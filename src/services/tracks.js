import { axiosMusic } from "../utils/configAxios"

const getTrackRecommendations = async  () => {
  const PATH = "/api/tracks/recommendations?seed_genres=reggaeton"
  const {data: {tracks}} = await axiosMusic.get(PATH)
  return tracks
}

export {
  getTrackRecommendations
}