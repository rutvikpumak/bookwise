import "./App.css";
import { Navbar, Sidebar } from "./component";
import Mockman from "mockman-js";

import {
  History,
  Liked,
  Login,
  Playlist,
  Signup,
  SingleVideo,
  VideoListing,
  WatchLater,
  PlaylistList,
} from "./pages";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Sidebar />
        <Routes>
          {/* <Route path="/mockman" element={<Mockman />} /> */}
          <Route path="/" element={<VideoListing />} />
          <Route path="/:videoId" element={<SingleVideo />} />
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
