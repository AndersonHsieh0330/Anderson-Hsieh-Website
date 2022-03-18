import './SideMenu.css';
import iconPhoto from '../assets/github_avatar.jpg';
function SideMenu(){

    return (
<div className='SideMenuContainer'>
    <img className = 'Avatar' src = {iconPhoto}></img>
    <h2>Anderson Hsieh</h2>
    <ul className='MenuList'>
        <li>ABOUT ME</li>
        <li>TECH</li>
        <li>PROJECTS</li>
        <li>VOLLEYBALL</li>
        <li>FISH</li>
        <li>CONTACT</li>
    </ul>
    
    
</div>
    );
}

export default SideMenu;