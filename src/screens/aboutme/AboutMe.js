import "./AboutMe.css";
import PhotoGallery from "../../components/PhotoGallery/PhotoGallery.js";

// photo path imports. React converts file path to static address, thus we gotta import it here instead of putting it directly in the array
import ShrimpCatch from "../../assets/aboutmephotos/shrimpcatch.jpg";
import WithKids from "../../assets/aboutmephotos/withkids.jpg";
import MarketWithMom from "../../assets/aboutmephotos/marketwithmom.jpg";
import TruckDriving from "../../assets/aboutmephotos/truckdriving.jpg";
import CookieAndBeer from "../../assets/aboutmephotos/cookieandbeer.jpg";
import Guitar from "../../assets/aboutmephotos/guitar.png";
import Biking from "../../assets/aboutmephotos/biking.jpg";
import StreetFood from "../../assets/aboutmephotos/streetfood.jpg";
import Bingsu from "../../assets/aboutmephotos/bingsu.jpg";
import MomsDress from "../../assets/aboutmephotos/momsdress.jpg";
import Cat from "../../assets/aboutmephotos/cat.jpg";
import Speech from "../../assets/aboutmephotos/speech.jpg";

const myImages = [
  {
    imgPath: ShrimpCatch,
    imgDescriptionEng:
      "I love catching little shrimp and fishes in rivers streams ever since I was little, give me a water bottle and we're eating good tonight!",
    imgDescriptionMan: "超喜歡在溪裡面抓小魚小蝦, 給我一個寶特瓶今晚加菜!",
    isVideo: false,
  },
  {
    imgPath: WithKids,
    imgDescriptionEng:
      "My cute cousins, I've always like kids and fun fact I used volunteer at Chang Gung Memorial Hospital for takig care of children with illness.",
    imgDescriptionMan:
      "圖裡面是我可愛的堂弟們. 一直都很喜歡小孩子, 在台灣的時候暑假會去林口長庚做志工顧小孩呦.",
    isVideo: false,
  },
  {
    imgPath: MarketWithMom,
    imgDescriptionEng:
      "Love going to traditional market with mom because I get to pick what's for dinner. You can tell I blend in well with the tank top",

    imgDescriptionMan:
      "阿伯套裝跟媽媽上市場, 超喜歡去因為都可以偷渡好吃的跟或涼的回家, 還可以決定晚餐吃什麼~. 仙草布丁、結冰洛神花茶、切好一盤100的雞肉...不行了",
    isVideo: false,
  },
  {
    imgPath: TruckDriving,

    imgDescriptionEng:
      "My grandparents own an onion wholesale business(大和農場) in the southern part of Taiwan and it is one of my favorite places to be. When I go visit I often help out by going on trips to deliver the onions while chating with my grandpa. This is me on a test drive on a 3.5 ton old manual truck with my dad. ",

    imgDescriptionMan:
      "阿公的大和農場就在車城鄉已經停飛的恆春機場後面. 如果你在屏東有買洋蔥, 有機會那就是我們家的~ 回去的時候很喜歡跟阿公一起去送洋蔥, 開著三噸半在恆春到處跑, 當然也要學著開啦!",
    isVideo: false,
  },
  {
    imgPath: CookieAndBeer,

    imgDescriptionEng:
      "Get yourself a man who can do both, I can do a thing or two in the kitchen as well! I used to bake chocolate chip cookies for my coworkers during my first coop. This is me accidently burning a batch cuz I got distracted by the beer in my hand.",

    imgDescriptionMan:
      '邊烤餅乾邊"採罐", 哈哈 不小心烤焦了>_< 第一份實習在巴可的時候我偶爾會烤餅乾給大家吃, 沒有烤焦的時候大受好評哦!',
    isVideo: false,
  },
  {
    imgPath: Guitar,

    imgDescriptionEng:
      "Fun Fact: I learned violin for 7 years, after that I self taught how to play the guitar. That's me in the picture singing alone while playing to cope with linear algebra.",

    imgDescriptionMan:
      "從大班開始學了七年的小提琴, 小時候的夢想是做音樂家哦~ 後來也因為興趣自學了吉他(謝謝雅琴阿姨買吉他給我).",
    isVideo: false,
  },
  {
    imgPath: Biking,
    imgDescriptionEng:
      "My dad absolutely loves biking, and it kinda has became a little father and sons activity. We also took 10 days to ride the bike around Taiwan back when I was in elementary school!",
    imgDescriptionMan:
      "爸爸超喜歡騎車. 以前覺得騎車很累, 但越長大越珍惜跟爸爸的父子時光, 所以偶爾會陪爸爸早上去騎個石門水庫或楊梅後山. 之前國小的時候還有騎車環島哦~",
    isVideo: false,
  },
  {
    imgPath: StreetFood,

    imgDescriptionEng: "Me grabbing some declicious street food in Taiwan",

    imgDescriptionMan: "這個在老梅綠石槽, 挖塞咧那個大腸包小腸辣的超好吃!",
    isVideo: false,
  },
  {
    imgPath: Bingsu,

    imgDescriptionEng:
      "Bingsu is everywhere in Taiwan and it is very inexpensive, we often like to grab one after a morning bike ride. My favorite dessert by far.",

    imgDescriptionMan:
      "大溪老街入口轉角的剉冰店, 他一邊賣豆干一邊賣剉冰, 超好吃!",
    isVideo: false,
  },
  {
    imgPath: MomsDress,

    imgDescriptionEng:
      "Borrowed my moms dress for 2021 Christmas party, I was hotter than all of the girls there.",

    imgDescriptionMan: "辣台妹",
    isVideo: false,
  },
  {
    imgPath: Cat,

    imgDescriptionEng: "In case you didn't know, I'm a cat person!",

    imgDescriptionMan:
      "1A 大一的時候讀書讀到很挫折, 爸爸帶我跟媽媽來侯硐, 超級開心,還是爸爸懂我. 這隻我兄弟, 那天遇到超多貓, 但我覺得他最肥最可愛.",
    isVideo: false,
  },
  {
    imgPath: Speech,

    imgDescriptionEng:
      "I was invited back to my junior high school to share my experience studying aboard!",

    imgDescriptionMan: "暑假時劉孟珠老師邀請我回石門國中分享出國留學經驗!",
    isVideo: false,
  },
];

const AboutMe = () => {
  return (
    <div className="AboutMeContainer">
      <div className="ColumnCenterContainer">
        <div className="SideBySideContainer">
          <PhotoGallery myImages={myImages} height="60vh" width="45vh" />

          <div id="TextContainer">
            <h1>About Me</h1>
            <p>
              Originally from Taiwan, I’m a current Computer Engineering student
              at University of Waterloo, with focus in software development.
              Outside of school and careers I have a lot of other identities,
              keep exploring you’ll see.
            </p>
            <p>
              Through experiences from school, internships and design teams I
              have developed knowledge in various technical fields such as
              Android App dev, backend API dev, low level firmware dev and more.
            </p>
            <p>
              I’m on my way of becoming a well-rounded software engineer who is
              capable of constructing all aspects of a system, from front end,
              backend and even to the hardware level. All this grind will
              prepare myself with the technical foundations that I need to pitch
              my start up.
            </p>

            <h2>Every photo tells a story</h2>
            <p>
              I rarely delete photos in my camera roll, even if they seem random
              because every photo reminds me of a memory with an emotion and can
              not be reproduced. This is where I share some of my favorites with
              you, enjoy.
            </p>

            <h2>序章</h2>
            <p>
              桃園人, 國三來到加拿大讀書(Victoria, BC), 並且 「加拿大是健身房,
              台灣是家」 一直住在桃園的我從國中三年級開始到加拿大讀書,
              花了我很多時間適應, 也很羨慕在台灣多采多姿的學生生活.
              曾經迷惘不知道我是台灣人, 還是個想成為加拿大人的四不像。2019
              COVID疫情來襲, 轉而給了我機會在台灣常住一年多的機會,
              讓我重新認識了這片土地, 且更懂得珍惜. 現在我常說回到了這健身房,
              在專業技能上把自己往前推. 同學們各個都身懷絕技, 促使著我跟著進步.
              很喜歡現在的生活, 偶爾還是有低潮有煩惱, 但我不會再猶豫了,
              因為這些都是我的一部分. 我會繼續前進!
            </p>
            <div id="AboutME_Dividor_1" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
