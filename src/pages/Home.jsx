import { useEffect, useState } from "react";
import ContainerMusic from "../components/layout/ContainerMusic";
import { getTrackRecommendations } from "../services/tracks";
import TrackList from "../components/shared/TrackList";

const Home = () => {
  const [tracksRecommendations, setTracksRecommendations] = useState([]);
  console.log(tracksRecommendations)
  useEffect(() => {
    getTrackRecommendations()
      .then((data) => setTracksRecommendations(data))
      .catch((err) => console.log(err))
  }, [])

  return (
    <ContainerMusic>
      <form className="bg-purple-gradient flex items-center gap-2 rounded-md px-4">
        <img src="/images/icons/search.svg" />
        <input
          placeholder="Buscar"
          className="bg-transparent flex-1 p-4 outline-none w-auto"
          type="text"
          size={10}
        />
        <select className="bg-transparent outline-none">
          <option value="10">10</option>
        </select>
      </form>
      <TrackList tracks={tracksRecommendations} />
    </ContainerMusic>
  );
};
export default Home;
