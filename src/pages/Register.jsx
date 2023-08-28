import { Link } from "react-router-dom";
import ContainerAuth from "../components/layout/ContainerAuth";

const Register = () => {
  return (
    <ContainerAuth>
      <header className="hidden sm:block max-w-[350px]">
        <img src="/images/register-header.png" alt="" />
      </header>

      <form className="grid gap-6 w-[min(100%,_350px)] sm:w-[300px]">
        <h1 className="text-3xl font-semibold uppercase">Cuenta nueva</h1>
        <div className="grid gap-4">
          <label className="text-white opacity-50 text-sm" htmlFor="email">
            E-mail
          </label>
          <input
            autocomplete="off"
            className="bg-transparent border-b-[1px] border-primary outline-none p-2"
            id="email"
            type="text"
          />
        </div>
        <div className="grid gap-4">
          <label className="text-white opacity-50 text-sm" htmlFor="name">
            Nombre de usuario
          </label>
          <input
            autocomplete="off"
            className="bg-transparent border-b-[1px] border-primary outline-none p-2"
            id="name"
            type="text"
          />
        </div>
        <div className="grid gap-4">
          <label className="text-white opacity-50 text-sm" htmlFor="password">
            Contraseña
          </label>
          <input
            autocomplete="off"
            className="bg-transparent border-b-[1px] border-primary outline-none p-2"
            id="password"
            type="password"
          />
        </div>
        <button className="bg-secondary w-max p-2 uppercase rounded-full px-10 font-bold mx-auto shadow-lg shadow-indigo-500/50 hover:shadow-indigo-500 transition-shadow">
          Crear
        </button>
        <Link className="text-center" to="/auth/login">
          O iniciar sesión
        </Link>
      </form>
    </ContainerAuth>
  );
};
export default Register;
