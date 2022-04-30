import PhotoNode from "./PhotoNode.js";

//I decided to implement this linkedlist in javascript by myself
//instead of using a library out there
//purely for practice and to get myself more familiar with js syntax
export default class PhotoLinkedList {
  constructor() {
    this.front_sentinel = new PhotoNode(
      "front_sentinel",
      "front_sentinel",
      "頭"
    );
    this.back_sentinel = new PhotoNode("back_sentinel", "back_sentinel", "尾");
    this.front_sentinel.next = this.back_sentinel;
    this.back_sentinel.previous = this.front_sentinel;
    this.size = 0;
  }

  addToBack(photoNode) {
    //item is inserted between the last real element and the back_sentinel
    photoNode.next = this.back_sentinel;
    photoNode.previous = this.back_sentinel.previous;
    photoNode.previous.next = photoNode;
    photoNode.next.previous = photoNode;
    this.size++;
  }

  getFront() {
    //return the first actual
    return this.front_sentinel.next;
  }

  getSize() {
    return this.size;
  }
}

/*
import PhotoLinkedList from './components/PhotoLinkedList/PhotoLinkedList';
import  PhotoNode from './components/PhotoLinkedList/PhotoNode';
*/

// archive
// const AboutMe = () => {
//   let list = new PhotoLinkedList();
//   list.addToBack(
//     new PhotoNode(
//       ShrimpCatch,
//       "I love catching little shrimp and fishes in rivers streams ever since I was little, give me a water bottle and we're eating good tonight!",
//       "超喜歡在溪裡面抓小魚小蝦, 給我一個寶特瓶今晚加菜!"
//     )
//   );
//   list.addToBack(
//     new PhotoNode(
//       WithKids,
//       "My cute cousins, I've always like kids and fun fact I used volunteer at Chang Gung Memorial Hospital for takig care of children with illness.",
//       "圖裡面是我可愛的堂弟們. 一直都很喜歡小孩子, 在台灣的時候暑假會去林口長庚做志工顧小孩呦."
//     )
//   );
//   list.addToBack(
//     new PhotoNode(
//       MarketWithMom,
//       "Love going to traditional market with mom because I get to pick what's for dinner. You can tell I blend in well with the tank top",
//       "阿伯套裝跟媽媽上市場, 超喜歡去因為都可以偷渡好吃的跟或涼的回家, 還可以決定晚餐吃什麼~. 仙草布丁、結冰洛神花茶、切好一盤100的雞肉...不行了"
//     )
//   );
//   list.addToBack(
//     new PhotoNode(
//       TruckDriving,
//       "My grandparents own an onion wholesale business(大和農場) in the southern part of Taiwan and it is one of my favorite places to be. When I go visit I often help out by going on trips to deliver the onions while chating with my grandpa. This is me on a test drive on a 3.5 ton old manual truck with my dad. ",
//       "阿公的大和農場就在車城鄉已經停飛的恆春機場後面. 如果你在屏東有買洋蔥, 有機會那就是我們家的~ 回去的時候很喜歡跟阿公一起去送洋蔥, 開著三噸半在恆春到處跑, 當然也要學著開啦!"
//     )
//   );
//   list.addToBack(
//     new PhotoNode(
//       CookieAndBeer,
//       "Get yourself a man who can do both, I can do a thing or two in the kitchen as well! I used to bake chocolate chip cookies for my coworkers during my first coop. This is me accidently burning a batch cuz I got distracted by the beer in my hand.",
//       '邊烤餅乾邊"採罐", 哈哈 不小心烤焦了>_< 第一份實習在巴可的時候我偶爾會烤餅乾給大家吃, 沒有烤焦的時候大受好評哦!'
//     )
//   );
//   list.addToBack(
//     new PhotoNode(
//       Guitar,
//       "Fun Fact: I learned violin for 7 years, after that I self taught how to play the guitar. That's me in the picture singing alone while playing to cope with linear algebra.",
//       "從大班開始學了七年的小提琴, 小時候的夢想是做音樂家哦~ 後來發現會餓死, 但還是自學了吉他(謝謝雅琴阿姨買吉他給我). 常有人說會彈吉他把妹妹很好用, 我認同 讚"
//     )
//   );
//   list.addToBack(
//     new PhotoNode(
//       Biking,
//       "My dad absolutely loves biking, and it kinda has became a little father and sons activity. We also took 10 days to ride the bike around Taiwan back when I was in elementary school!",
//       "爸爸超喜歡騎車. 以前覺得騎車很累, 但越長大越珍惜跟爸爸的父子時光, 所以偶爾會陪爸爸早上去騎個石門水庫或楊梅後山. 之前國小的時候還有騎車環島哦~"
//     )
//   );
//   list.addToBack(
//     new PhotoNode(
//       StreetFood,
//       "Me grabbing some declicious street food in Taiwan",
//       "這個在老梅綠石槽, 挖塞咧那個大腸包小腸辣的超好吃!"
//     )
//   );
//   list.addToBack(
//     new PhotoNode(
//       Bingsu,
//       "Bingsu is everywhere in Taiwan and it is very inexpensive, we often like to grab one after a morning bike ride. My favorite dessert by far.",
//       "大溪老街入口轉角的剉冰店, 他一邊賣豆干一邊賣剉冰, 超好吃!"
//     )
//   );
//   list.addToBack(
//     new PhotoNode(
//       MomsDress,
//       "Borrowed my moms dress for 2021 Christmas party, I was hotter than all of the girls there.",
//       "辣台妹"
//     )
//   );
//   list.addToBack(
//     new PhotoNode(
//       Cat,
//       "In case you didn't know, I'm a cat person!",
//       "1A 大一的時候讀書讀到很挫折, 爸爸帶我跟媽媽來侯硐, 超級開心,還是爸爸懂我. 這隻我兄弟, 那天遇到超多貓, 但我覺得他最肥最可愛."
//     )
//   );
//   list.addToBack(
//     new PhotoNode(
//       Speech,
//       "I was invited back to my junior high school to share my experience studying aboard!",
//       "暑假時劉孟珠老師邀請我回石門國中分享出國留學經驗!"
//     )
//   );
