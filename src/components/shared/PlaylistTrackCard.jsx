import { Link } from "react-router-dom"
import { DeleteIcon } from "../icons/Icons"
import { usePlaylistCart } from "../../store/playlistCart"

const PlaylistTrackCard = ({track}) => {
  const deleteTrack = usePlaylistCart(state => state.deleteTrack)
  return (
    <article className="flex gap-2 items-center transition-colors p-1 pr-2 rounded-md hover:bg-white/20 normal-case font-normal">
      <header className="rounded-md overflow-hidden w-[50px]">
        <img src={track.album.images[2]?.url} alt="" />
      </header>
      <section className="flex-1 grid gap-2 text-xs">
        <Link
          to={`/tracks/${track.id}`}
          className="font-semibold line-clamp-1 hover:text-yellow-p transition-colors"
        >
          {track.name}
        </Link>
        <Link
          to={`/artists/${track.artists[0].id}`}
          className="text-slate-300 line-clamp-1 hover:text-yellow-p transition-colors hover:font-semibold"
        >
          {track.artists[0]?.name}
        </Link>
      </section>
      <footer className="flex gap-2 items-center">
        <button onClick={() => deleteTrack(track.id)} className="group">
          <DeleteIcon />
        </button>
      </footer>
    </article>
  )
}
export default PlaylistTrackCard