import { axiosMusic } from "../utils/configAxios";

const getTrackRecommendations = async () => {
  const PATH = "/api/tracks/recommendations?seed_genres=reggaeton";
  const {
    data: { tracks },
  } = await axiosMusic.get(PATH);
  return tracks;
};

const searchTracks = async (q, limit = 10) => {
  const path = `/api/tracks?limit=${limit}&q=${q}`;
  const { data: {tracks: {items}} } = await axiosMusic.get(path);
  return items;
};

const getTrackById = async (id) => {
  const path = `/api/tracks/${id}`
  const { data } = await axiosMusic.get(path);
  return data;
}

export { getTrackRecommendations, searchTracks, getTrackById };
