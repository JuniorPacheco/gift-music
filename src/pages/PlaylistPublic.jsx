import { useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { PlusIcon } from "../components/icons/Icons";
import ContainerMusic from "../components/layout/ContainerMusic";
import ContainerPublic from "../components/layout/ContainerPublic";
import TracksListByPlaylist from "../components/playlistDetail/TracksListByPlaylist";
import Loader from "../components/shared/loader/Loader";
import { getPlaylistById } from "../services/playlist";
import { alertCreatePlaylist } from "../services/alerts";
import { useQuery } from "@tanstack/react-query";

const PlaylistPublic = () => {
  // const [isLoading, setIsLoading] = useState(false);
  const [showFront, setShowFront] = useState(true);
  // const [playlist, setPlaylist] = useState(null);
  const [isCopied, setIsCopied] = useState(false);

  const navigate = useNavigate();
  const { id } = useParams();

  const formRef = useRef(null);

  const {
    data: playlist,
    isLoading,
  } = useQuery({
    queryKey: ["track", id],
    queryFn: () => getPlaylistById(id),
    keepPreviousData: true,
    staleTime: Infinity,
  });

  const handleShowAlert = () => {
    alertCreatePlaylist().then((result) => {
      if (result.isConfirmed) {
        navigate("/auth/register");
      }
    });
  };

  const handleClickCopy = () => {
    const urlActual = window.location.href;
    setIsCopied(true);
    navigator.clipboard
      .writeText(urlActual)
      .finally(() => setTimeout(() => setIsCopied(false), 1000));
  };

  // useEffect(() => {
  //   setIsLoading(true);
  //   getPlaylistById(id)
  //     .then((data) => setPlaylist(data))
  //     .catch((err) => console.log(err))
  //     .finally(() => setIsLoading(false));
  // }, [id]);

  return (
    <ContainerPublic>
      <ContainerMusic>
        {isLoading && !playlist && (
          <div className="grid place-content-center pt-4">
            <Loader />
          </div>
        )}
        {playlist && (
          <>
            <section
              ref={formRef}
              id="formPlaylistCart"
              className={`relative max-w-max mx-auto card w-[256px] ${
                showFront ? "front" : "back"
              }`}
            >
              {/* Lado A (Frente) */}
              <div className="front">
                <img className="w-full" src="/images/cassette.png" alt="" />
                <div className="flex bg-white absolute top-[20px] left-[22px] gap-2 p-2 py-1 w-[210px] rounded-md items-center text-black overflow-y-auto">
                  <h4>{playlist?.title}</h4>
                </div>
                <button
                  onClick={handleShowAlert}
                  type="button"
                  className="absolute bottom-4 right-14 group w-[32px] aspect-square border-2 rounded-full grid place-content-center hover:border-yellow-p transition-colors"
                >
                  <PlusIcon />
                </button>
                <button
                  type="button"
                  onClick={handleClickCopy}
                  disabled={isLoading}
                  className="absolute bottom-4 right-4 group w-[32px] aspect-square border-2 rounded-full grid place-content-center hover:border-yellow-p transition-colors"
                >
                  {isCopied ? (
                    <i className="bx bx-check text-lg group-hover:text-yellow-p"></i>
                  ) : (
                    <i className="bx bx-copy group-hover:text-yellow-p"></i>
                  )}
                </button>
              </div>

              {/* Lado B (Detras) */}
              <div className="absolute top-0 left-0 back">
                <img src="/images/cassette.png" alt="" />
                <div className="flex bg-white absolute top-[20px] left-[22px] gap-2 p-2 py-1 w-[210px] rounded-md items-center text-black overflow-y-auto">
                  <h4>{playlist?.to}</h4>
                </div>
                <div className="bg-white absolute top-[60px] left-[22px] gap-2 p-2 py-1 w-[210px] h-[90px] rounded-md items-center text-black overflow-y-auto">
                  <h4>{playlist?.message}</h4>
                </div>
              </div>
              <button
                className="max-w-max mx-auto block p-1 px-4 border-2 rounded-full mt-4 hover:border-yellow-p hover:text-yellow-p transition-colors"
                type="button"
                onClick={() => setShowFront(!showFront)}
              >
                {showFront ? "Lado B" : "Lado A"}
              </button>
            </section>
            <TracksListByPlaylist
              playlistId={id}
              tracks={playlist?.tracks ?? []}
              showPlayButton
            />
          </>
        )}
      </ContainerMusic>
    </ContainerPublic>
  );
};
export default PlaylistPublic;
