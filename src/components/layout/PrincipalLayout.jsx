import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { usePlaylistCart } from "../../store/playlistCart";
import { IconPlaylist } from "../icons/Icons";
import PopUpAuth from "../shared/PopUpAuth";
import PopUpPlaylist from "../shared/PopUpPlaylist";

const PrincipalLayout = ({ children }) => {
  const [showAccountOptions, setShowAccountOptions] = useState(false);
  const [showCurrentPlaylist, setShowCurrentPlaylist] = useState(false);
  const tracks = usePlaylistCart((state) => state.tracks);

  useEffect(() => {
    if (showAccountOptions && showCurrentPlaylist)
      setShowCurrentPlaylist(false);
  }, [showAccountOptions]);

  useEffect(() => {
    if (showCurrentPlaylist && showAccountOptions) setShowAccountOptions(false);
  }, [showCurrentPlaylist]);

  return (
    <section className="bg-black text-white font-urbanist min-h-screen overflow-hidden">
      <header className="bg-purple-gradient flex justify-between p-4 uppercase font-bold items-center relative">
        <Link className="hover:text-yellow-p transition-colors" to="/">
          Gift music
        </Link>

        <section className="flex gap-4 text-sm sm:text-base">
          <button
            onClick={() => setShowAccountOptions(!showAccountOptions)}
            className={`uppercase border-yellow-p border-[1px] rounded-full p-2 px-3 ${
              showAccountOptions ? "bg-secondary" : ""
            }`}
          >
            Mi cuenta
          </button>
          <button
            onClick={() => setShowCurrentPlaylist(!showCurrentPlaylist)}
            className={`flex items-center gap-2 border-yellow-p border-[1px] rounded-full p-2 px-3 ${
              showCurrentPlaylist ? "bg-secondary" : ""
            }`}
          >
            <IconPlaylist />
            <span className="uppercase font hidden sm:inline">Grabaciones</span>
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
