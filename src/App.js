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
            <Route path="/" element={<AboutPage />} />
            <Route path="/fish" element={<FishPage />} />
            <Route path="/volleyball" element={<VolleyballPage />} />
            <Route path="/tech" element={<TechPage />} />
            <Route path="/resume" element={<ResumePage />} />
            <Route path="/contacts" element={<ContactPage />} />
          </Routes>
        </div>
        <BottomMenu />
      </div>
    </BrowserRouter>
  );
};

export default App;
