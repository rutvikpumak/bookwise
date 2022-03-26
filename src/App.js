import "./App.css";
import { Loader, Navbar, PlaylistModal, Sidebar } from "./component";
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
import { useData } from "./context/data/videoContext";

function App() {
  const { loader } = useData();
  return (
    <div className="App">
      <PlaylistModal />
      <Router>
        <Navbar />
        <Sidebar />
        {loader && <Loader />}
        <Routes>
          <Route path="/" element={<VideoListing />} />
          <Route path="/:videoId" element={<SingleVideo />} />
          <Route
            path="/playlist"
            element={
              <PrivateRoute>
                <Playlist />
              </PrivateRoute>
            }
          />
          <Route
            path="/playlist/:playListId"
            element={
              <PrivateRoute>
                <PlaylistList />
              </PrivateRoute>
            }
          />
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
