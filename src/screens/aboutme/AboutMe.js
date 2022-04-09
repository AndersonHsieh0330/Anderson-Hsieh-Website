
import './AboutMe.css';
import Icon from '../../assets/github_avatar_cropped.jpg';
import PhotoGallery from '../../components/PhotoGallery.js'

const AboutMe = () => {
    return (
        <div className='ContentContainer'>
            <PhotoGallery/>
            <div className='TextContainer'>
            <h2>About Me</h2>
            <p>I'm on a journey of exploration in the tech world while enjoying the sense of accomplishment/creativity in programming. I'm a quick and self-motivated learner that can't wait to make the most out of my life. Long way ahead but always excited to overcome new challenges and receive new knowledge that will take me to my long-term goal of building my own social media/life convenience app. Aside from that my passionate also goes into volleyball, music(guitar/sing), guppy fish keeping. 
Originally from Taoyuan, Taiwan, I'm very lucky to be in this international education experience. The opportunity has not only built me a very outgoing and socialized personality but also gave me the ability to analyze both sides of the argument on social issues.</p>
        </div>
        </div>
    );
}

export default AboutMe;


