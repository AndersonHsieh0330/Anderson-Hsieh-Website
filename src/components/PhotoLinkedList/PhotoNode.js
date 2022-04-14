export default class PhotoNode {
  constructor(imgPath, imgDescriptionEng, imgDescriptionMan) {
    //this is a string
    this.imgPath = imgPath;

    //this is a string
    this.imgDescriptionEng = imgDescriptionEng;

    //this is a string
    this.imgDescriptionMan = imgDescriptionMan;
    this.next = null;
    this.previous = null;
  }
}
