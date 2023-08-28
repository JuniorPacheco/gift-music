import { Link } from "react-router-dom";

const Register = () => {
  return (
    <section className="min-h-screen font-urbanist grid bg-[#0F0817] text-white justify-stretch justify-items-center items-center p-4 bg-[url(/images/register-mobile.png)] bg-no-repeat bg-right sm:grid-cols-[auto_auto] sm:gap-10 sm:justify-center sm:justify-items-center">
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
        <button className="bg-secondary w-max p-2 uppercase rounded-full px-10 font-bold mx-auto shadow-lg shadow-indigo-500/50 hover:shadow-indigo-500 transition-shadow">Crear</button>
        <Link className="text-center" to="/auth/login">
          O iniciar sesión
        </Link>
      </form>
    </section>
  );
};
export default Register;
