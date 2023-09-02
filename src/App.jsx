import { Route, Routes } from "react-router-dom";
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
import Page404 from "./pages/Page404";
import PrivateRoutes from "./components/auth/PrivateRoutes";

function App() {
  return (
    <Routes>
      <Route path="/auth/login" element={<Login />} />
      <Route path="/auth/register" element={<Register />} />

      <Route element={<PrivateRoutes />}>
        <Route path="/" element={<Home />} />
        <Route path="/artist/:id" element={<ArtistDetail />} />
        <Route path="/track/:id" element={<TrackDetail />} />
        <Route path="/playlists" element={<Playlists />} />
        <Route path="/playlists/:id" element={<PlaylistDetail />} />
      </Route>

      <Route path="/playlist/public/:id" element={<PlaylistPublic />} />

      <Route path="*" element={<Page404 />} />
    </Routes>
  );
}

export default App;
