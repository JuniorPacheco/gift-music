import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { SaveIcon, ShareIcon } from "../components/icons/Icons";
import ContainerMusic from "../components/layout/ContainerMusic";
import ContainerPublic from "../components/layout/ContainerPublic";
import TracksListByPlaylist from "../components/playlistDetail/TracksListByPlaylist";
import Loader from "../components/shared/loader/Loader";
import { getPlaylistById } from "../services/playlist";

const PlaylistPublic = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [showFront, setShowFront] = useState(true);
  const [playlist, setPlaylist] = useState(null);
  const [isCopied, setIsCopied] = useState(false);

  const { id } = useParams();

  const formRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target));
    setIsLoading(true);
    updatePlaylist(playlist.id, data)
      .then((data) => console.log(data))
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  };

  const handleClickCopy = () => {
    const urlActual = window.location.href;
    setIsCopied(true);
    navigator.clipboard
      .writeText(urlActual)
      .finally(() => setTimeout(() => setIsCopied(false), 1000));
  };

  const deleteTrackOnPlaylist = (trackId) => {
    const currentTracks = playlist.tracks;
    const newTracks = currentTracks.filter((track) => track.id !== trackId);
    setPlaylist({ ...playlist, tracks: newTracks });
  };

  useEffect(() => {
    setIsLoading(true);
    getPlaylistById(id)
      .then((data) => setPlaylist(data))
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <ContainerPublic>
      <ContainerMusic>
        <ContainerMusic>
          {isLoading && !playlist && (
            <div className="grid place-content-center pt-4">
              <Loader />
            </div>
          )}
          {playlist && (
            <>
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                id="formPlaylistCart"
                className={`relative max-w-max mx-auto card w-[256px] ${
                  showFront ? "front" : "back"
                }`}
              >
                {/* Lado A (Frente) */}
                <div className="front">
                  <img className="w-full" src="/images/cassette.png" alt="" />
                  <div className="flex bg-white absolute top-[20px] left-[22px] gap-2 p-2 py-1 w-[210px] rounded-md items-center text-black">
                    <h4>{playlist?.title}</h4>
                  </div>
                  <button
                    disabled={isLoading}
                    type="submit"
                    className="absolute bottom-4 right-14 group w-[32px] aspect-square border-2 rounded-full grid place-content-center hover:border-yellow-p transition-colors"
                  >
                    {isLoading ? (
                      <i className="bx bx-loader-alt animate-spin text-xl"></i>
                    ) : (
                      <SaveIcon />
                    )}
                  </button>
                  <button
                    type="button"
                    onClick={handleClickCopy}
                    disabled={isLoading}
                    className="absolute bottom-4 right-4 group w-[32px] aspect-square border-2 rounded-full grid place-content-center hover:border-yellow-p transition-colors"
                  >
                    {isLoading ? (
                      <i className="bx bx-loader-alt animate-spin text-xl"></i>
                    ) : (
                      <>
                        {isCopied ? (
                          <i className="bx bx-check text-lg"></i>
                        ) : (
                          <i className="bx bx-copy"></i>
                        )}
                      </>
                    )}
                  </button>
                </div>

                {/* Lado B (Detras) */}
                <div className="absolute top-0 left-0 back">
                  <img src="/images/cassette.png" alt="" />
                  <div className="flex bg-white absolute top-[20px] left-[22px] gap-2 p-2 py-1 w-[210px] rounded-md items-center text-black">
                    <h4>{playlist?.to}</h4>
                  </div>
                  <div className="bg-white absolute top-[60px] left-[22px] gap-2 p-2 py-1 w-[210px] h-[90px] rounded-md items-center text-black">
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
              </form>
              <TracksListByPlaylist
                playlistId={id}
                tracks={playlist?.tracks ?? []}
                deleteTrackOnPlaylist={deleteTrackOnPlaylist}
                showPlayButton
              />
            </>
          )}
        </ContainerMusic>
      </ContainerMusic>
    </ContainerPublic>
  );
};
export default PlaylistPublic;
