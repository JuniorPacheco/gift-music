import { Link } from "react-router-dom"
import { PencilIcon } from "../icons/Icons"

const CassetteCard = ({playlist, index}) => {

  const up = (55 * index)

  return (
    <Link to={`/playlists/${playlist.id}`} className="absolute transition-transform hover:-translate-y-6 hover:rotate-3" style={{top: `${up}px`}}>
      <div className="w-[256px] relative">
        <img src="/images/cassette.png" alt="" />
        <div className="flex bg-white absolute top-[19px] left-[22px] gap-2 p-2 py-1 w-[212px] rounded-md items-center">
          <h4 className="text-black font-bold flex-1 uppercase line-clamp-1 text-sm">{playlist.title}</h4>
          <PencilIcon />
        </div>
      </div>
    </Link>
  )
}
export default CassetteCard