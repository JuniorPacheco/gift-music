import { useEffect, useState } from "react";
import ContainerMusic from "../components/layout/ContainerMusic";
import { getPlaylistByUser } from "../services/playlist";
import CassetteList from "../components/playlists/CassetteList";

const Playlists = () => {
  const [playlists, setPlaylists] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getPlaylistByUser()
      .then((data) => setPlaylists(data))
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <ContainerMusic>
      <form className="bg-purple-gradient flex items-center gap-2 rounded-md px-4">
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
          size={10}
        />
      </form>
      <CassetteList playlists={playlists} />
    </ContainerMusic>
  );
};
export default Playlists;
