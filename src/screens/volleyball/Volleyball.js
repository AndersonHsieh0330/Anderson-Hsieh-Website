import "./Volleyball.css";
import intramurals_horizontal from "../../assets/volleyballphotos/intramurals.jpg";
import claremont_vertical from "../../assets/volleyballphotos/provincials.jpg";
import spank_vertical from "../../assets/volleyballphotos/spank_tourney.jpg";
import taiwan612_horizontal from "../../assets/volleyballphotos/612_aftergamedinner.jpg";

const Volleyball = () => {
  return (
    <div id="VolleyballContainer">
      <div id="LeftContentContainer">
        <div id="VolleyballTextContainer">
          <h2>Volleyball</h2>

          <p>
            Started playing volleyball in grade 10, I am absolutely in love with
            the sport. To me the best kind of player is the ones that can do
            all. Soft hands to deliver sets, mechanically smooth arm swing and
            flexible torso rotation for maximum hitter power, those are the
            packages that I'm on my way of getting. I'm also an executive of UW
            SERVE, come find me in the club sessions or tourneys!
            <br />
            <br />
            Click the video to see me in action!
          </p>
          <div id="Volleyball_Dividor_1" />
        </div>

        <iframe
          id="EmbedYoutube"
          src="https://www.youtube.com/embed/yk3u9NGW2l0"
          title="Anderson Hsieh Volleyball Clips"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <div className="FourPhotoContainer">
        <img className="LeftTopVerticalImg" src={claremont_vertical} />
        <img className="RightTopHorizontalImg" src={intramurals_horizontal} />
        <img className="LeftBottomHorizontalImg" src={taiwan612_horizontal} />
        <img className="RightBottomVerticalImg" src={spank_vertical} />
      </div>
    </div>
  );
};

export default Volleyball;
