import { Link } from "react-router-dom";

const ContainerPublic = ({ children }) => {
  return (
    <section className="bg-black text-white font-urbanist min-h-screen overflow-hidden bg-[url(/images/register-bg-mobile.png)] bg-no-repeat bg-right-bottom sm:bg-[url(/images/register-bg-desktop.png)]">
      <header className="bg-purple-gradient flex justify-center p-4 uppercase font-bold items-center relative">
        <Link className="hover:text-yellow-p transition-colors" to="/">
          Gift music
        </Link>
      </header>

      <section className="p-4 pt-10 flex justify-center items-center">
        {children}
      </section>
    </section>
  );
};
export default ContainerPublic;
