import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage";
import Home from "./components/Home/Home";
import DogDetail from "./components/DogDetail/DogDetail";
import DogCreation from "./components/DogCreation/DogCreation";
import About from "./components/About/About";

//Para deploy
import axios from "axios";
axios.defaults.baseURL = "https://dogsapibackend-production.up.railway.app/";
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/dogs/:id" element={<DogDetail />} />
          <Route path="/newDog/" element={<DogCreation />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
