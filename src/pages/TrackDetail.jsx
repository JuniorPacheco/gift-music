import { Link, useParams } from "react-router-dom";
import ContainerMusic from "../components/layout/ContainerMusic";
import { useEffect, useState } from "react";
import { getTrackById } from "../services/tracks";
import TrackList from "../components/shared/TrackList";

const TrackDetail = () => {
  const [track, setTrack] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    getTrackById(id)
      .then((data) => setTrack(data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <ContainerMusic>
      <Link to={-1}>{"<"} Atrás</Link>
      <header className="grid sm:grid-cols-2 gap-4 mt-4">
        <div className="w-full h-full overflow-hidden flex justify-center items-center">
          <img
            className="w-full aspect-square object-cover rounded-full"
            src={track?.album.images[0].url}
            alt=""
          />
        </div>
        <section className="flex flex-col justify-center gap-2 grid-rows-[auto_auto]">
          <h2 className="text-xl font-semibold line-clamp-1">{track?.name}</h2>
          <h3 className="text-base line-clamp-1">{track?.artists[0].name}</h3>
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
      <section>
        <h4 className="mb-2 mt-4">Canciones relacionadas</h4>
        <TrackList tracks={track?.relatedSongs ?? []} />
      </section>
    </ContainerMusic>
  );
};
export default TrackDetail;
