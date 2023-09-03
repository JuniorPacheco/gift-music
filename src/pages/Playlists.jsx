import { useQuery } from "@tanstack/react-query";
import ContainerMusic from "../components/layout/ContainerMusic";
import CassetteList from "../components/playlists/CassetteList";
import { getPlaylistByUser } from "../services/playlist";
import { useState } from "react";
import { filterPlaylistByTitle } from "../utils/playlist";

const Playlists = () => {
  const [playlistTitle, setPlaylistTitle] = useState("");

  const { data: playlists, isFetching } = useQuery({
    queryKey: ["playlists"],
    queryFn: getPlaylistByUser,
    keepPreviousData: true,
  });

  const playlistByTitle = filterPlaylistByTitle(playlists, playlistTitle);

  return (
    <ContainerMusic>
      <form className="bg-purple-gradient flex items-center gap-2 rounded-md px-4">
        <button>
          {isFetching ? (
            <i className="bx bx-loader-alt animate-spin text-xl"></i>
          ) : (
            <img src="/images/icons/search.svg" />
          )}
        </button>
        <input
          placeholder="Buscar"
          className="bg-transparent flex-1 p-4 outline-none w-auto"
          type="text"
          value={playlistTitle}
          onChange={(e) => setPlaylistTitle(e.target.value)}
          id="querySearch"
          autoComplete="off"
          size={10}
        />
      </form>
      <CassetteList playlists={playlistByTitle ?? []} />
    </ContainerMusic>
  );
};
export default Playlists;
