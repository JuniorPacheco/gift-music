import { Link } from "react-router-dom";
import { IconAdd, IconPlay } from "../icons/Icons";

const TrackCard = ({ track }) => {
  return (
    <article className="flex gap-2 items-center transition-colors p-1 pr-2 rounded-md hover:bg-white/20">
      <header className="rounded-md overflow-hidden">
        <img src={track.album.images[2]?.url} alt="" />
      </header>
      <section className="flex-1 grid gap-2 text-sm">
        <Link
          to={`/track/${track.id}`}
          className="font-bold line-clamp-1 hover:text-yellow-p transition-colors"
        >
          {track.name}
        </Link>
        <Link
          to={`/artist/${track.artists[0].id}`}
          className="text-slate-400 line-clamp-1 hover:text-yellow-p transition-colors hover:font-semibold"
        >
          {track.artists[0]?.name}
        </Link>
      </section>
      <footer className="flex gap-2 items-center">
        <Link to={track.uri} className="group">
          <IconPlay />
        </Link>
        <button className="group">
          <IconAdd />
        </button>
      </footer>
    </article>
  );
};
export default TrackCard;
