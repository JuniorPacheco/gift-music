import { axiosMusic } from "../utils/configAxios";

const register = async (dataUser) => {
  const { data } = await axiosMusic.post("/api/auth/register", dataUser);
  return data;
};

const login = async (dataUser) => {
  const { data } = await axiosMusic.post("/api/auth/login", dataUser);
  return data;
};

export { register, login };
