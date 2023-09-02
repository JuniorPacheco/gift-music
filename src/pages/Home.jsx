import { useEffect, useState } from "react";
import ContainerMusic from "../components/layout/ContainerMusic";
import { getTrackRecommendations, searchTracks } from "../services/tracks";
import TrackList from "../components/shared/TrackList";

const Home = () => {
  const [tracksRecommendations, setTracksRecommendations] = useState([]);
  const [querySearch, setQuerySearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [limit, setLimit] = useState(10);

  const handleSubmit = (e) => {
    e.preventDefault();
    setQuerySearch(e.target.querySearch.value);
  };

  useEffect(() => {
    if (querySearch) {
      setIsLoading(true);
      searchTracks(querySearch, limit)
        .then((data) => setSearchResults(data))
        .catch((err) => console.log(err))
        .finally(() => setIsLoading(false));
    } else {
      setSearchResults([]);
    }
  }, [querySearch, limit]);

  useEffect(() => {
    setIsLoading(true);
    getTrackRecommendations()
      .then((data) => setTracksRecommendations(data))
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <ContainerMusic>
      <form
        onSubmit={handleSubmit}
        className="bg-purple-gradient flex items-center gap-2 rounded-md px-4"
      >
        <button>
          {isLoading ? (
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
          disabled={isLoading}
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
      <TrackList
        tracks={
          searchResults.length
            ? searchResults
            : tracksRecommendations.slice(0, limit)
        }
      />
    </ContainerMusic>
  );
};
export default Home;
