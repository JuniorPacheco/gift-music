import { axiosMusic } from "../utils/configAxios";

const getArtistById = async (id) => {
  const { data } = await axiosMusic.get(`/api/artists/${id}`);
  return data;
};

export { getArtistById };
