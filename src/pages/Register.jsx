import { Link, useNavigate } from "react-router-dom";
import ContainerAuth from "../components/layout/ContainerAuth";
import { useState } from "react";
import { register } from "../services/auth";

const Register = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target));
    setIsLoading(true)
    register(data)
      .then(() => {
        navigate("/auth/login");
      })
      .finally(() => setIsLoading(false));
  };

  return (
    <ContainerAuth>
      <header className="hidden sm:block max-w-[350px]">
        <img src="/images/register-header.png" alt="" />
      </header>

      <form
        onSubmit={handleSubmit}
        className="grid gap-6 w-[min(100%,_350px)] sm:w-[300px]"
      >
        <h1 className="text-3xl font-semibold uppercase">Cuenta nueva</h1>
        <div className="grid gap-4">
          <label className="text-white opacity-50 text-sm" htmlFor="email">
            E-mail
          </label>
          <input
            autoComplete="off"
            className="bg-transparent border-b-[1px] border-primary outline-none p-2"
            id="email"
            name="email"
            type="text"
          />
        </div>
        <div className="grid gap-4">
          <label className="text-white opacity-50 text-sm" htmlFor="name">
            Nombre de usuario
          </label>
          <input
            autoComplete="off"
            className="bg-transparent border-b-[1px] border-primary outline-none p-2"
            id="name"
            name="name"
            type="text"
          />
        </div>
        <div className="grid gap-4">
          <label className="text-white opacity-50 text-sm" htmlFor="password">
            Contraseña
          </label>
          <input
            autoComplete="off"
            className="bg-transparent border-b-[1px] border-primary outline-none p-2"
            id="password"
            name="password"
            type="password"
          />
        </div>
        <button
          disabled={isLoading}
          className="bg-secondary w-max p-2 uppercase rounded-full px-10 font-bold mx-auto shadow-lg shadow-indigo-500/50 hover:shadow-indigo-500 transition-shadow"
        >
          {isLoading ? "Loading" : "Crear"}
        </button>
        <Link className="text-center" to="/auth/login">
          O iniciar sesión
        </Link>
      </form>
    </ContainerAuth>
  );
};
export default Register;
