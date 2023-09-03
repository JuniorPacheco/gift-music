import { useEffect, useRef, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  PencilIcon,
  SaveIcon,
  ShareIcon,
  TrashIcon,
} from "../components/icons/Icons";
import ContainerMusic from "../components/layout/ContainerMusic";
import TracksListByPlaylist from "../components/playlistDetail/TracksListByPlaylist";
import Loader from "../components/shared/loader/Loader";
import {
  deletePlaylist,
  getPlaylistById,
  updatePlaylist,
} from "../services/playlist";

const PlaylistDetail = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [showFront, setShowFront] = useState(true);
  const [playlist, setPlaylist] = useState(null);

  const navigate = useNavigate();

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

  const handleDeletePlaylist = () => {
    setIsLoading(true);
    deletePlaylist(playlist.id)
      .then(() => navigate("/playlists"))
      .catch(() => setIsLoading(false));
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
  }, [id]);

  useEffect(() => {
    if (playlist) {
      formRef.current["playlistDetail-message"].value = playlist.message;
      formRef.current["playlistDetail-title"].value = playlist.title;
      formRef.current["playlistDetail-to"].value = playlist.to;
    }
  }, [playlist]);

  return (
    <ContainerMusic>
      <Link to={-1}>{"<"} Atras</Link>
      {isLoading && !playlist && (
        <div className="grid place-content-center pt-4">
          <Loader />
        </div>
      )}
      {playlist && (
        <>
          <form
            onSubmit={handleSubmit}
            ref={formRef}
            id="formPlaylistCart"
            className={`relative max-w-max mx-auto card w-[256px] ${
              showFront ? "front" : "back"
            }`}
          >
            {/* Lado A (Frente) */}
            <div className="front">
              <img className="w-full" src="/images/cassette.png" alt="" />
              <div className="flex bg-white absolute top-[20px] left-[22px] gap-2 p-2 py-1 w-[210px] rounded-md items-center">
                <input
                  id="playlistDetail-title"
                  name="title"
                  size={10}
                  required
                  onFocus={() => setShowFront(true)}
                  autoComplete="off"
                  placeholder="Titulo"
                  className="bg-transparent flex-1 outline-none text-sm text-black"
                  type="text"
                />
                <label htmlFor="playlistDetail-title" className="w-[20px]">
                  <PencilIcon />
                </label>
              </div>
              <button
                disabled={isLoading}
                type="submit"
                className="absolute bottom-4 left-4 group w-[32px] aspect-square border-2 rounded-full grid place-content-center hover:border-yellow-p transition-colors"
              >
                {isLoading ? (
                  <i className="bx bx-loader-alt animate-spin text-xl"></i>
                ) : (
                  <SaveIcon />
                )}
              </button>
              <button
                type="button"
                onClick={handleDeletePlaylist}
                disabled={isLoading}
                className="absolute bottom-4 left-14 group w-[32px] aspect-square border-2 rounded-full grid place-content-center hover:border-yellow-p transition-colors"
              >
                {isLoading ? (
                  <i className="bx bx-loader-alt animate-spin text-xl"></i>
                ) : (
                  <TrashIcon />
                )}
              </button>
              <Link
                to={`/playlists/public/${playlist.id}`}
                disabled={isLoading}
                className="absolute bottom-4 right-4 group w-[32px] aspect-square border-2 rounded-full grid place-content-center hover:border-yellow-p transition-colors"
              >
                {isLoading ? (
                  <i className="bx bx-loader-alt animate-spin text-xl"></i>
                ) : (
                  <ShareIcon />
                )}
              </Link>
            </div>

            {/* Lado B (Detras) */}
            <div className="absolute top-0 left-0 back">
              <img src="/images/cassette.png" alt="" />
              <div className="flex bg-white absolute top-[20px] left-[22px] gap-2 p-2 py-1 w-[210px] rounded-md items-center">
                <input
                  id="playlistDetail-to"
                  name="to"
                  required
                  autoComplete="off"
                  size={10}
                  onFocus={() => setShowFront(false)}
                  placeholder="Para"
                  className="bg-transparent flex-1 outline-none text-sm text-black"
                  type="text"
                />
                <label htmlFor="playlistDetail-to" className="w-[20px]">
                  <PencilIcon />
                </label>
              </div>
              <div className="flex bg-white absolute top-[60px] left-[22px] gap-2 p-2 py-1 w-[210px] rounded-md items-center">
                <textarea
                  id="playlistDetail-message"
                  name="message"
                  required
                  autoComplete="off"
                  rows={4}
                  onFocus={() => setShowFront(false)}
                  placeholder="Mensaje"
                  className="bg-transparent flex-1 resize-none outline-none text-sm text-black"
                  type="text"
                />
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
            showDeleteButton
          />
        </>
      )}
    </ContainerMusic>
  );
};
export default PlaylistDetail;
