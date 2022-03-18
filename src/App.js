import logo from './logo.svg';
import './App.css';
import AboutPage from './screens/AboutMe.js';
import TechPage from './screens/Tech.js';
import SideMenu from './components/SideMenu.js';
import {BrowserRouter as Router, Routes, Switch, Route} from 'react-router-dom';
function App() {
  return (
    <Router>
    <div className='Canvas'>
      <SideMenu/>
      <Routes>
      <Route path = "/" element = {<AboutPage/>}/> 
      <Route path = "/tech" element = {<TechPage/>}/> 
      </Routes>
    </div>
    </Router>
  );
}

export default App;
