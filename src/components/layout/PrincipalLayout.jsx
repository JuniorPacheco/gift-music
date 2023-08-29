import { IconPlaylist } from "../icons/Icons";

const PrincipalLayout = ({ children }) => {
  return (
    <section className="bg-black text-white font-urbanist min-h-screen">
      <header className="bg-purple-gradient flex justify-between p-4 uppercase font-bold items-center">
        <h1>Gift music</h1>

        <section className="flex gap-4 text-sm sm:text-base">
          <button className="uppercase border-yellow-p border-[1px] rounded-full p-2 px-3">
            Mi cuenta
          </button>
          <button className="flex items-center gap-2 border-yellow-p border-[1px] rounded-full p-2 px-3">
            <IconPlaylist />
            <span>0</span>
          </button>
        </section>
      </header>

      <section className="p-4 pt-10 flex justify-center items-center">{children}</section>
    </section>
  );
};
export default PrincipalLayout;
