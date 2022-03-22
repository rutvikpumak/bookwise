import "./App.css";
import { Navbar, Sidebar } from "./component";
import { VideoListing } from "./pages";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { SingleVideo } from "./pages/Home/SingleVideo";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Sidebar />
        <Routes>
          <Route path="/" element={<VideoListing />} />
          <Route path="/singleVideo" element={<SingleVideo />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
