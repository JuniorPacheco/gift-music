import { axiosMusic } from "../utils/configAxios";

const getPlaylistByUser = async () => {
  const { data } = await axiosMusic.get("/api/playlists/me");
  return data;
};

export { getPlaylistByUser };
