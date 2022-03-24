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
  UserProfile,
} from "./pages";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { PrivateRoute } from "./component/PrivateRoute/PrivateRoute";

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
          <Route
            path="/liked"
            element={
              <PrivateRoute>
                <Liked />
              </PrivateRoute>
            }
          />
          <Route
            path="/watchLater"
            element={
              <PrivateRoute>
                <WatchLater />
              </PrivateRoute>
            }
          />
          <Route
            path="/history"
            element={
              <PrivateRoute>
                <History />
              </PrivateRoute>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/userProfile" element={<UserProfile />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
