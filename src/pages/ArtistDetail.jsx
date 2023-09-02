import { Link, useParams } from "react-router-dom";
import ContainerMusic from "../components/layout/ContainerMusic";
import { useEffect, useState } from "react";
import { getArtistById } from "../services/artists";
import "swiper/css";
import SliderAlbums from "../components/shared/SliderAlbums";
import TrackList from "../components/shared/TrackList";
import Loader from "../components/shared/loader/Loader";

const ArtistDetail = () => {
  const [artist, setArtist] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const { id } = useParams();

  useEffect(() => {
    setIsLoading(true);
    getArtistById(id)
      .then((data) => setArtist(data))
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  }, [id]);
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
          isLoading && artist ? "opacity-100" : "opacity-0"
        }`}
      >
        <Loader />
      </div>

      {isLoading && !artist && (
        <div className="grid place-content-center">
          <Loader />
        </div>
      )}

      {artist && (
        <>
          <header className="grid sm:grid-cols-2 gap-4 mt-4">
            <div className="w-full h-full overflow-hidden flex justify-center items-center">
              <img
                className="w-full aspect-square object-cover rounded-xl sm:rounded-full"
                src={artist?.images[0].url}
                alt=""
              />
            </div>
            <section className="flex flex-col gap-2 grid-rows-[auto_auto]">
              <h2 className="text-2xl">{artist?.name}</h2>
              <ul className="flex flex-col gap-2 [&>li]:font-light [&>li]:line-clamp-1  [&>li>span]:font-bold text-sm">
                <li>
                  <span>Seguidores:</span> {artist?.followers.total}
                </li>
                <li>
                  <span>Popularidad:</span> {artist?.popularity}
                </li>
              </ul>
              <div className="font-light text-sm">
                <span className="font-bold">Generos:</span>
                <ul className="flex flex-wrap gap-2 py-2">
                  {artist?.genres.slice(0, 4).map((genre) => (
                    <li
                      className="rounded-full p-1 px-4 border-[1px] text-sm"
                      key={genre}
                    >
                      {genre}
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          </header>
          <section className="my-8">
            <h4 className="text-lg">Albums del artista</h4>
            <SliderAlbums albums={artist?.albums ?? []} />
          </section>
          <section>
            <h4 className="mb-2">Canciones top del artista</h4>
            <TrackList tracks={artist?.songsTop ?? []} py={4} />
          </section>
        </>
      )}
    </ContainerMusic>
  );
};
export default ArtistDetail;
