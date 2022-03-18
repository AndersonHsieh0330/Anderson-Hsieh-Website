import logo from './logo.svg';
import './App.css';
import AboutPage from './screens/AboutMe.js';
import SideMenu from './components/SideMenu.js';

function App() {
  return (
    <div className='Canvas'>
      <SideMenu/>
      <AboutPage/>
    </div>
  );
}

export default App;
