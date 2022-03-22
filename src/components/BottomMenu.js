import './BottomMenu.css';
import HeartLogo from '../assets/pixelart/js/heart.js';
import FishLogo from '../assets/pixelart/js/fish.js';
import VolleyballLogo from '../assets/pixelart/js/volleyball.js';
import CodeLogo from '../assets/pixelart/js/code.js';
import ScrollLogo from '../assets/pixelart/js/scroll.js';
import PhoneLogo from '../assets/pixelart/js/phone.js';


function BottomMenu(){

    return (
<div className='BottomMenuContainer'>
    <ul className='MenuList'>
        <li><HeartLogo/></li>
        <li><FishLogo/></li>
        <li><VolleyballLogo/></li>
        <li><CodeLogo/></li>
        <li><ScrollLogo/></li>
        <li><PhoneLogo/></li>
    
    </ul>
</div>
    );
}

export default BottomMenu;