import { useState } from "react";
import { PencilIcon } from "../icons/Icons";

const PopUpPlaylist = ({ showCurrentPlaylist }) => {
  const [showFront, setShowFront] = useState(true);

  return (
    <section
      className={`absolute -bottom-2 translate-y-full bg-secondary border-[1px] border-yellow-p p-2 rounded-lg transition-[right] w-[275px] duration-300  ${
        showCurrentPlaylist ? "right-4" : "-right-full"
      }`}
    >
      <header>
        <form className={`relative card ${showFront ? "front" : "back"}`}>
          {/* Lado A (Frente) */}
          <div className="front">
            <img className="w-full" src="/images/cassette.png" alt="" />
            <div className="flex bg-white absolute top-[20px] left-[22px] gap-2 p-2 py-1 w-[210px] rounded-md items-center">
              <input
                id="currentPlaylist-title"
                name="title"
                size={10}
                placeholder="Titulo"
                className="bg-transparent flex-1 outline-none text-sm text-black"
                type="text"
              />
              <label htmlFor="currentPlaylist-title" className="w-[20px]">
                <PencilIcon />
              </label>
            </div>
          </div>

          {/* Lado B (Detras) */}
          <div className="absolute top-0 left-0 back">
            <img src="/images/cassette.png" alt="" />
            <div className="flex bg-white absolute top-[20px] left-[22px] gap-2 p-2 py-1 w-[210px] rounded-md items-center">
              <input
                id="currentPlaylist-to"
                name="to"
                size={10}
                placeholder="Para"
                className="bg-transparent flex-1 outline-none text-sm text-black"
                type="text"
              />
              <label htmlFor="currentPlaylist-to" className="w-[20px]">
                <PencilIcon />
              </label>
            </div>
            <div className="flex bg-white absolute top-[60px] left-[22px] gap-2 p-2 py-1 w-[210px] rounded-md items-center">
              <textarea
                name="message"
                rows={4}
                placeholder="Mensaje"
                className="bg-transparent flex-1 resize-none outline-none text-sm text-black"
                type="text"
              />
            </div>
          </div>
          <button
            className="max-w-max mx-auto block p-1 px-4 border-2 rounded-full mt-4"
            type="button"
            onClick={() => setShowFront(!showFront)}
          >
            {showFront ? "Lado A" : "Lado B"}
          </button>
        </form>
      </header>
    </section>
  );
};
export default PopUpPlaylist;
