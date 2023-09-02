import { axiosMusic } from "../utils/configAxios";

const getPlaylistByUser = async () => {
  const { data } = await axiosMusic.get("/api/playlists/me");
  return data;
};

const getPlaylistById = async (idPlaylist) => {
  const { data } = await axiosMusic.get(`/api/playlists/${idPlaylist}`);
  return data;
};

const deleteTrackByPlaylist = async (playlistId, trackId) => {
  const { data } = await axiosMusic.delete(
    `/api/playlists/${playlistId}/tracks/${trackId}`
  );
  return data;
};

const updatePlaylist = async (playlistId, newDataPlaylist) => {
  const { data } = await axiosMusic.patch(
    `/api/playlists/${playlistId}`,
    newDataPlaylist
  );
  return data;
};

const deletePlaylist = async (playlistId) => {
  const { data } = await axiosMusic.delete(`/api/playlists/${playlistId}`);
  return data;
};

export {
  getPlaylistByUser,
  getPlaylistById,
  deleteTrackByPlaylist,
  updatePlaylist,
  deletePlaylist,
};
