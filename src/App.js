import "./App.css";
import AboutPage from "./screens/aboutme/AboutMe.js";
import FishPage from "./screens/fish/Fish.js";
import VolleyballPage from "./screens/volleyball/Volleyball.js";
import TechPage from "./screens/tech/Tech.js";
import ResumePage from "./screens/resume/Resume.js";
import ContactPage from "./screens/contact/Contacts.js";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import BottomMenu from "./components/BottomMenu/BottomMenu.js";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <div id="ContentContainer">
          <Routes>
            {/* these page elements must have a margin-bottom of 32px since BottomMenu has a height of 32px*/}
            <Route path="/Anderson-Hsieh-Website/" element={<AboutPage />} />
            <Route path="/Anderson-Hsieh-Website/fish" element={<FishPage />} />
            <Route
              path="/Anderson-Hsieh-Website/volleyball"
              element={<VolleyballPage />}
            />
            <Route path="/Anderson-Hsieh-Website/tech" element={<TechPage />} />
            <Route
              path="/Anderson-Hsieh-Website/resume"
              element={<ResumePage />}
            />
            <Route
              path="/Anderson-Hsieh-Website/contacts"
              element={<ContactPage />}
            />
          </Routes>
        </div>
        <BottomMenu />
      </div>
    </BrowserRouter>
  );
};

export default App;
