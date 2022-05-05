import React from "react";
import "./Fish.css";
import PhotoGallery from "../../components/PhotoGallery/PhotoGallery.js";

// fish photo/video imports
import normans_lampeyes from "../../assets/fishphotos/normans_lampeyes.mp4";
import albino_full_red_guppy from "../../assets/fishphotos/albino_full_red_guppy.jpg";
import half_beak from "../../assets/fishphotos/half_beak.jpg";
import hillstream_loachs from "../../assets/fishphotos/hillstream_loachs.jpg";
import ricefish_babies from "../../assets/fishphotos/ricefish_babies_cropped.jpg";
import ricefish from "../../assets/fishphotos/ricefish_cropped.jpg";
import shrimp from "../../assets/fishphotos/shrimp.jpg";
import tricolor_swordtail from "../../assets/fishphotos/tricolor_swordtail.jpg";
import white_angel from "../../assets/fishphotos/white_angel.jpg";

// aspect ratio as height:width -> 3:4
const galleryHeight = "70vh";
const galleryWidth = "100vh";

const fishPhotos = [
  {
    imgPath: ricefish,
    imgDescriptionEng: (
      <p
        style={{
          marginTop: "5px",
          marginBottom: "0px",
          fontSize: "1.5vh",
          width: galleryWidth,
        }}
      >
        I kept these <span style={{ fontWeight: "bold" }}>rice fish</span>{" "}
        during my second coop back in Taiwan, suprisingly hard to find in Canada
        but probably my favorite fish I've kept. They're egg layers, very easy
        to breed. There are 3 femals and 1 male in the picture, in the last two
        month of coop I was harvesting 10ish eggs everyday. End up gifting them
        and the babies to a coworker at KKstream Limited.{" "}
      </p>
    ),
    imgDescriptionMan: (
      <p
        style={{
          marginTop: "5px",
          marginBottom: "0px",
          fontSize: "1.5vh",
          width: galleryWidth,
        }}
      >
        圓圓的體型超可愛! 跟killifish是近親, 都是鱂魚科, 目前最喜歡的魚!
        兩隻確定是美卡達<span style={{ fontWeight: "bold" }}>稻田魚</span>,
        另外兩隻身體比較白的買的時候老闆說是粉紅稻田魚, 但我網路上找不太到,
        感覺是雜交出來的. 他們會把蛋生在浮萍的根部, 齁有夠會生
      </p>
    ),
    isVideo: false,
  },
  {
    imgPath: normans_lampeyes,
    imgDescriptionEng: (
      <p
        style={{
          marginTop: "5px",
          marginBottom: "0px",
          fontSize: "1.5vh",
          width: galleryWidth,
        }}
      >
        These are called
        <span style={{ fontWeight: "bold" }}>Norman's Lampeyes</span>, a type of
        very small killifish, and they're new member's of the family! Their
        eye's light up where they get their name as \"Lampeyes\". Super cute,
        can't wait to breed them.
      </p>
    ),
    imgDescriptionMan: (
      <p
        style={{
          marginTop: "5px",
          marginBottom: "0px",
          fontSize: "1.5vh",
          width: galleryWidth,
        }}
      >
        <span style={{ fontWeight: "bold" }}>藍眼燈</span>其實不是燈科魚!
        他們也是鱂魚科哦, 我也被騙了好一陣子. 目前養的最喜歡的魚!他們好可愛"
      </p>
    ),
    isVideo: true,
  },
  {
    imgPath: albino_full_red_guppy,
    imgDescriptionEng: (
      <p
        style={{
          marginTop: "5px",
          marginBottom: "0px",
          fontSize: "1.5vh",
          width: galleryWidth,
        }}
      >
        These are{" "}
        <span style={{ fontWeight: "bold" }}>albino full red guppies</span>, and
        they were my first pair of fish that I purchased! They made tons of
        babies. I gave out a bunch and also rasied up til like the third
        generations. You can see the babies separated from their parents in the
        plastic container in the photo! These are also somehow hard to find in
        Canada for some reason, Canada has very little fish options compare to
        Taiwan
      </p>
    ),
    imgDescriptionMan: (
      <p
        style={{
          marginTop: "5px",
          marginBottom: "0px",
          fontSize: "1.5vh",
          width: galleryWidth,
        }}
      >
        龍潭蝦寶來的<span style={{ fontWeight: "bold" }}>全紅白子</span>,
        我的第一對買的魚, 也是第一對品系孔雀魚. 之後還有買黑木炭. 這堆生超級多,
        而且有一批還剛好
      </p>
    ),
    isVideo: false,
  },
  {
    imgPath: white_angel,
    imgDescriptionEng: (
      <p
        style={{
          marginTop: "5px",
          marginBottom: "0px",
          fontSize: "1.5vh",
          width: galleryWidth,
        }}
      >
        I've always loved <span style={{ fontWeight: "bold" }}>angel fish</span>
        , but I've never really had big enough tanks to keep them. Learnt a hard
        lesson when one of these literally fought the other to death because the
        1 foot tank was way too smal for them. Will definitely keep a pair if I
        have room for a at least 55 gallon in the future.
      </p>
    ),
    imgDescriptionMan: (
      <p
        style={{
          marginTop: "5px",
          marginBottom: "0px",
          fontSize: "1.5vh",
          width: galleryWidth,
        }}
      >
        我以後長大一定要弄一個大的魚缸來養一對神仙魚, 他們真的很漂亮又很優雅.
        這一對在藍世界買的, 我傻傻的無知, 這個一尺缸根本不夠大,
        其中一隻直接被另一隻咬死 :( 有學到東西,
        如果不能給魚兒們好的環境就不要折磨他們
      </p>
    ),
    isVideo: false,
  },
  {
    imgPath: half_beak,
    imgDescriptionEng: (
      <p>
        <span style={{ fontWeight: "bold" }}>Wrestling Halfbeaks</span> are
        definitely one of my favorites. Haven't had too much success with them
        tho since they are BIG jumper and is semi aggressive.
      </p>
    ),
    imgDescriptionMan: (
      <p>
        <span style={{ fontWeight: "bold" }}>銀水針</span>
        算是我一直沒有養成功的魚. 長的很特別我超喜歡, 但是真的很會跳.
        其中一次傻傻的跟神仙魚養再一起, 被咬到受傷, 我趕快把他隔離起來下鹽巴.
        過一兩天真的有好轉! 結果第三天隔離水盆的水加太高, 跳出來了嗚嗚嗚
      </p>
    ),
    isVideo: false,
  },
  {
    imgPath: hillstream_loachs,
    imgDescriptionEng: (
      <p>
        Took me a long time to find this baby! He/she's a{" "}
        <span style={{ fontWeight: "bold" }}>hillstream loach</span>! My
        favorite bottom layer algae eater because it literally looks like a mini
        stingray. Some people say they're not good at it but this guy ate some
        algae for me
      </p>
    ),
    imgDescriptionMan: (
      <p>
        可愛的滿天星<span style={{ fontWeight: "bold" }}>爬鰍</span>,
        根本就是迷你魟魚, 我最喜歡的底層魚!
      </p>
    ),
    isVideo: false,
  },
  {
    imgPath: shrimp,
    imgDescriptionEng: (
      <p>
        These are{" "}
        <span style={{ fontWeight: "bold" }}>neocaridina shrimps</span>! The
        lady at the store got me a pregant female and it gave birth within a
        couple days at my house!
      </p>
    ),
    imgDescriptionMan: (
      <p>
        彩色<span style={{ fontWeight: "bold" }}>米蝦</span>,
        超幸運魚中魚店員幫我撈的時候撈到一隻懷孕的母蝦,
        我跟我女朋友走出店裡興奮到不行. 到家過一兩天就生了一堆小蝦!
      </p>
    ),
    isVideo: false,
  },
  {
    imgPath: tricolor_swordtail,
    imgDescriptionEng: (
      <p>
        These are the{" "}
        <span style={{ fontWeight: "bold" }}>tricolor swordtails</span> I have
        right now. All of them are females and I'm looking a male one with the
        same coloration to get the breeding started. They look like little
        Japanese Koi fish to me, which is on the dream fish to keep list as
        well!
      </p>
    ),
    imgDescriptionMan: (
      <p>
        三隻母的<span style={{ fontWeight: "bold" }}>三色劍尾魚</span>,
        看起來就像小鯉魚
      </p>
    ),
    isVideo: false,
  },
  {
    imgPath: ricefish_babies,
    imgDescriptionEng: (
      <p>
        Too bad I couldn't raise these{" "}
        <span style={{ fontWeight: "bold" }}>rice fish babies</span> myself cuz
        I gotta come back to Canada. I end up gifting them together with their
        parents to a experienced fish keeper/coworker at KKstream., Ltd. It was
        hard to say goodbye.
      </p>
    ),
    imgDescriptionMan: (
      <p>
        在板橋的稻田魚們生地的小寶包! 可惜要離開台灣要回來加拿大讀書了,
        沒辦法親手把他們帶大, 不然他時候真的孵出來超多隻! 每天都在收蛋
      </p>
    ),
    isVideo: false,
  },
];

const Fish = () => {
  return (
    <div className="FishContainer">
      <div className="PhotoWrapper">
        <PhotoGallery
          myImages={fishPhotos}
          height={galleryHeight}
          width={galleryWidth}
        />
      </div>
      <div className="TextContainer">
        <h1>My Fish Keeping Weekly Updates!</h1>
        <h3>May 5th, 2022</h3>
        <p>
          I've had the water running in the 10 gallon tank since last Monday
          when I first moved into my apartment. I was debating on buying and
          adding bacteria starter(Top fin) but also seen things online saying
          that they don't work well. So I decided to go for it
        </p>
      </div>
    </div>
  );
};

export default Fish;
