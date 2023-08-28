import { Route, Routes } from "react-router-dom";
import "./App.css";
import {
  ArtistDetail,
  Home,
  Login,
  PlaylistDetail,
  PlaylistPublic,
  Playlists,
  Register,
  TrackDetail,
} from "./pages";

function App() {
  return (
    <Routes>
      <Route path="/auth/login" element={<Login />} />
      <Route path="/auth/register" element={<Register />} />

      <Route path="/" element={<Home />} />
      <Route path="/artist/:id" element={<ArtistDetail />} />
      <Route path="/track/:id" element={<TrackDetail />} />
      <Route path="/playlists" element={<Playlists />} />
      <Route path="/playlist/:id" element={<PlaylistDetail />} />

      <Route path="/playlist/public/:id" element={<PlaylistPublic />} />
    </Routes>
  );
}

export default App;
