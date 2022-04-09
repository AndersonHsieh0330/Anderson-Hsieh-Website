import './PhotoGallery.css';
import React from 'react';
import photo1 from '../assets/github_avatar_cropped.jpg'


const BottomMenu = (props) => {
    
    
    return (
        <div className='ImageContainer'>
                <img className='Image' src = {photo1}/>
                <p>I'm catching shrimps</p>
        </div>
    );
}

export default BottomMenu;