import "./App.css";
import { Navbar, Sidebar } from "./component";
import {
  History,
  Liked,
  Login,
  Playlist,
  Signup,
  SingleVideo,
  VideoListing,
  WatchLater,
} from "./pages";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PlaylistList from "./pages/Playlist/component/PlaylistList";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Sidebar />
        <Routes>
          <Route path="/" element={<VideoListing />} />
          <Route path="/singleVideo" element={<SingleVideo />} />
          <Route path="/playlist" element={<Playlist />} />
          <Route path="/playlist" element={<Playlist />} />
          <Route path="/playlist/playlistList" element={<PlaylistList />} />
          <Route path="/liked" element={<Liked />} />
          <Route path="/watchLater" element={<WatchLater />} />
          <Route path="/history" element={<History />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
