import { Link } from "react-router-dom";
import { useUserStore } from "../../store/user";
import { IconLogOut, IconPlayMinimal } from "../icons/Icons";
import { usePlaylistCart } from "../../store/playlistCart";

const PopUpAuth = ({ showAccountOptions }) => {
  const logout = useUserStore((store) => store.logout);
  const resetStart = usePlaylistCart((store) => store.resetStart);

  const handleClickLogout = () => {
    logout()
    resetStart()
  }

  return (
    <section
      className={`absolute -bottom-2 z-20 translate-y-full bg-secondary border-[1px] border-yellow-p p-2 rounded-lg transition-[right] duration-300 ${
        showAccountOptions ? "right-4" : "-right-full"
      }`}
    >
      <Link to={"/playlists"} className="flex items-center gap-2 group hover:text-yellow-p uppercase">
        <IconPlayMinimal /> Mis grabaciones
      </Link>
      <button
        onClick={handleClickLogout}
        className="flex items-center gap-2 group hover:text-yellow-p uppercase"
      >
        <IconLogOut /> Cerrar Sesion
      </button>
    </section>
  );
};
export default PopUpAuth;
