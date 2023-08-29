import { Link, useNavigate } from "react-router-dom";
import ContainerAuth from "../components/layout/ContainerAuth";
import { useUserStore } from "../store/user";

const Login = () => {
  const login = useUserStore((state) => state.login);
  const isLoading = useUserStore((state) => state.loading);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target));
    const res = await login(data);
    if (res) navigate("/");
  };

  return (
    <ContainerAuth>
      <header className="hidden sm:block max-w-[350px]">
        <img src="/images/login-header.png" alt="" />
      </header>

      <form
        onSubmit={handleSubmit}
        className="grid gap-6 w-[min(100%,_350px)] sm:w-[300px]"
      >
        <h1 className="text-3xl font-semibold uppercase">Iniciar Sesión</h1>
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
        <button className="bg-secondary w-max p-2 uppercase rounded-full px-10 font-bold mx-auto shadow-lg shadow-indigo-500/50 hover:shadow-indigo-500 transition-shadow">
          {isLoading ? "Cargando..." : "Entrar"}
        </button>
        <Link className="text-center" to="/auth/register">
          O crear una cuenta nueva
        </Link>
      </form>
    </ContainerAuth>
  );
};
export default Login;
