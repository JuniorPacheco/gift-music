import { Link } from "react-router-dom";
import { IconLogOut, IconPlayMinimal, IconPlaylist } from "../icons/Icons";
import { useState } from "react";
import { useUserStore } from "../../store/user";
import PopUpAuth from "../shared/PopUpAuth";
import PopUpPlaylist from "../shared/PopUpPlaylist";
import { usePlaylistCart } from "../../store/playlistCart";

const PrincipalLayout = ({ children }) => {
  const [showAccountOptions, setShowAccountOptions] = useState(false);
  const [showCurrentPlaylist, setShowCurrentPlaylist] = useState(false);
  const [showSideA, setShowSideA] = useState(true);
  const tracks = usePlaylistCart(state => state.tracks)

  return (
    <section className="bg-black text-white font-urbanist min-h-screen overflow-hidden">
      <header className="bg-purple-gradient flex justify-between p-4 uppercase font-bold items-center relative">
        <h1>Gift music</h1>

        <section className="flex gap-4 text-sm sm:text-base">
          <button
            onClick={() => setShowAccountOptions(!showAccountOptions)}
            className="uppercase border-yellow-p border-[1px] rounded-full p-2 px-3"
          >
            Mi cuenta
          </button>
          <button
            onClick={() => setShowCurrentPlaylist(!showCurrentPlaylist)}
            className="flex items-center gap-2 border-yellow-p border-[1px] rounded-full p-2 px-3"
          >
            <IconPlaylist />
            <span>{tracks.length}</span>
          </button>
        </section>

        <PopUpAuth showAccountOptions={showAccountOptions} />

        <PopUpPlaylist showCurrentPlaylist={showCurrentPlaylist} />
      </header>

      <section className="p-4 pt-10 flex justify-center items-center">
        {children}
      </section>
    </section>
  );
};
export default PrincipalLayout;
