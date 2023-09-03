import { useQuery } from "@tanstack/react-query";
import { Link, useParams } from "react-router-dom";
import ContainerMusic from "../components/layout/ContainerMusic";
import TrackList from "../components/shared/TrackList";
import Loader from "../components/shared/loader/Loader";
import { getTrackById } from "../services/tracks";
import PlaySong from "../components/trackDetail/PlaySong";
import { useState } from "react";

const TrackDetail = () => {
  const [isShowSong, setIsShowSong] = useState(false);

  const { id } = useParams();

  const {
    data: track,
    isLoading,
    isFetching,
  } = useQuery({
    queryKey: ["track", id],
    queryFn: () => getTrackById(id),
    keepPreviousData: true,
    staleTime: Infinity,
  });

  const handleChangeShowSong = () => setIsShowSong(!isShowSong);
  
  return (
    <ContainerMusic>
      <Link
        className="hover:text-yellow-p transition-colors font-semibold"
        to={-1}
      >
        {"<"} Atrás
      </Link>

      <div
        className={`top-2 right-2 absolute transition-opacity z-10 ${
          !isLoading && isFetching ? "opacity-100" : "opacity-0"
        }`}
      >
        <Loader />
      </div>

      {isLoading && (
        <div className="grid place-content-center">
          <Loader />
        </div>
      )}

      {track && (
        <>
          <header className="grid sm:grid-cols-2 gap-4 mt-4">
            <button
              onClick={handleChangeShowSong}
              className="w-full h-full overflow-hidden rounded-xl sm:rounded-full flex justify-center items-center relative after:content-[''] after:absolute after:hover:bg-black/25 after:h-full after:w-full after:block after:top-0 after:bottom-0 after:z-20 cursor-pointer after:transition-colors group"
            >
              <img
                className="w-full aspect-square object-cover"
                src={track?.album.images[0].url}
                alt=""
              />
              <i className="bx bx-play opacity-0 group-hover:opacity-100 absolute text-6xl left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 transition-opacity"></i>
            </button>
            <section className="flex flex-col justify-center gap-2 grid-rows-[auto_auto]">
              <h2 className="text-xl font-semibold line-clamp-1">
                {track?.name}
              </h2>
              <h3 className="text-base line-clamp-1">
                {track?.artists[0].name}
              </h3>
              <ul className="flex flex-col gap-2 [&>li]:font-light [&>li]:line-clamp-1  [&>li>span]:font-bold text-sm">
                <li>
                  <span>Disco:</span> {track?.album.name}
                </li>
                <li>
                  <span>Año de salida:</span> {track?.album.release_date}
                </li>
              </ul>
            </section>
          </header>

          {track && isShowSong && <PlaySong trackId={track.id} />}

          <section>
            <h4 className="mb-2 mt-4">Canciones relacionadas</h4>
            <TrackList tracks={track?.relatedSongs ?? []} />
          </section>
        </>
      )}
    </ContainerMusic>
  );
};
export default TrackDetail;
