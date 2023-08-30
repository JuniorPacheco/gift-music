import { Link } from "react-router-dom";
import { IconLogOut, IconPlayMinimal, IconPlaylist } from "../icons/Icons";
import { useState } from "react";
import { useUserStore } from "../../store/user";

const PrincipalLayout = ({ children }) => {
  const [isShowOptionsAccount, setIsShowOptionsAccount] = useState(false);

  const logout = useUserStore(store => store.logout)

  return (
    <section className="bg-black text-white font-urbanist min-h-screen overflow-hidden">
      <header className="bg-purple-gradient flex justify-between p-4 uppercase font-bold items-center relative">
        <h1>Gift music</h1>

        <section className="flex gap-4 text-sm sm:text-base">
          <button
            onClick={() => setIsShowOptionsAccount(!isShowOptionsAccount)}
            className="uppercase border-yellow-p border-[1px] rounded-full p-2 px-3"
          >
            Mi cuenta
          </button>
          <button className="flex items-center gap-2 border-yellow-p border-[1px] rounded-full p-2 px-3">
            <IconPlaylist />
            <span>0</span>
          </button>
        </section>

        {/* PopUp Auth */}
        <section
          className={`absolute -bottom-2 translate-y-full bg-secondary border-[1px] border-yellow-p p-2 rounded-lg transition-[right] duration-300 ${
            isShowOptionsAccount ? "right-4" : "-right-full"
          }`}
        >
          <Link className="flex items-center gap-2 group hover:text-yellow-p uppercase">
            <IconPlayMinimal /> Mis grabaciones
          </Link>
          <button onClick={logout} className="flex items-center gap-2 group hover:text-yellow-p uppercase">
            <IconLogOut /> Cerrar Sesion
          </button>
        </section>
      </header>

      <section className="p-4 pt-10 flex justify-center items-center">
        {children}
      </section>
    </section>
  );
};
export default PrincipalLayout;
