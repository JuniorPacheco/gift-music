import { useState } from "react";
import ContainerMusic from "../components/layout/ContainerMusic";
import { getTrackRecommendations, searchTracks } from "../services/tracks";
import TrackList from "../components/shared/TrackList";
import { useQuery } from "@tanstack/react-query";

const Home = () => {
  const [querySearch, setQuerySearch] = useState("");
  const [limit, setLimit] = useState(10);

  const { data: tracksRecommendations, isLoading: isLoadingRecommendations } =
    useQuery({
      queryKey: ["trackRecommendations"],
      queryFn: getTrackRecommendations,
      staleTime: Infinity
    });

  const { data: searchResults, isFetching: isFetchingSearch } = useQuery({
    queryKey: ["SearchTracks", querySearch],
    queryFn: () => searchTracks(querySearch, 10),
    enabled: querySearch !== "",
    keepPreviousData: true,
    staleTime: Infinity,
  });

  const generalIsLoagin = isLoadingRecommendations || isFetchingSearch;

  const handleSubmit = (e) => {
    e.preventDefault();
    setQuerySearch(e.target.querySearch.value);
  };

  return (
    <ContainerMusic>
      <form
        onSubmit={handleSubmit}
        className="bg-purple-gradient flex items-center gap-2 rounded-md px-4"
      >
        <button>
          {generalIsLoagin ? (
            <i className="bx bx-loader-alt animate-spin text-xl"></i>
          ) : (
            <img src="/images/icons/search.svg" />
          )}
        </button>
        <input
          placeholder="Buscar"
          className="bg-transparent flex-1 p-4 outline-none w-auto"
          type="text"
          id="querySearch"
          autoComplete="off"
          disabled={generalIsLoagin}
          size={10}
        />
        <select
          value={limit}
          onChange={(e) => setLimit(e.target.value)}
          className="bg-transparent outline-none"
        >
          <option className="text-black" value="3">
            3
          </option>
          <option className="text-black" value="5">
            5
          </option>
          <option className="text-black" value="7">
            7
          </option>
          <option className="text-black" value="10">
            10
          </option>
        </select>
      </form>

      {tracksRecommendations && (
        <TrackList
          tracks={
            searchResults
              ? searchResults.slice(0, limit)
              : tracksRecommendations.slice(0, limit)
          }
        />
      )}
    </ContainerMusic>
  );
};
export default Home;
