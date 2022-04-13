import "./AboutMe.css";
import PhotoGallery from "../../components/PhotoGallery/PhotoGallery.js";
import PhotoLinkedList from "../../components/PhotoLinkedList/PhotoLinkedList.js";
import PhotoNode from "../../components/PhotoLinkedList/PhotoNode.js";
import photo1 from "../../assets/github_avatar_cropped.jpg";
import photo2 from "../../assets/volleyballphotos/S__18915350.jpg";

const AboutMe = () => {
  let list = new PhotoLinkedList();
  list.addToBack(new PhotoNode(photo2, "1"));

  return (
    <div className="RowCenterContainer">
      <div className="ColumnCenterContainer">
        <div className="AlignTopContainer">
          <PhotoGallery linkedlist={list} />
          <div id="TextContainer">
            <h2>About Me</h2>
            <p>
              I'm on a journey of exploration in the tech world while enjoying
              the sense of accomplishment/creativity in programming. I'm a quick
              and self-motivated learner that can't wait to make the most out of
              my life. Long way ahead but always excited to overcome new
              challenges and receive new knowledge that will take me to my
              long-term goal of building my own social media/life convenience
              app. Aside from that my passionate also goes into volleyball,
              music(guitar/sing), guppy fish keeping. Originally from Taoyuan,
              Taiwan, I'm very lucky to be in this international education
              experience. The opportunity has not only built me a very outgoing
              and socialized personality but also gave me the ability to analyze
              both sides of the argument on social issues.
            </p>
            <h2>哩賀!</h2>
            <p>我是鞍</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
