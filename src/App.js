import logo from './logo.svg';
import './App.css';
import AboutPage from './screens/AboutMe.js';
import TechPage from './screens/Tech.js';
import BottomMenu from './components/BottomMenu.js';
import ContactPage from './screens/Contact.js'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  return (
    
    <div className='App' >
      <Routes>
        <Route path = "/" element = {<AboutPage/>} />
        <Route path = "/tech"element = {<TechPage/>} />
        <Route path = "/contact" element = {<ContactPage/>} />
        </Routes>
      
      <h1>h</h1>
      <BottomMenu/>
    </div>
    
    
  );
}

export default App;
