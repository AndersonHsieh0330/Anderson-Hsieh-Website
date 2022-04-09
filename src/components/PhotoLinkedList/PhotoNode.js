export default class PhotoNode{
    constructor(imgPath,imgDescription){
        //this is a string
        this.imgPath = imgPath;

        //this is a string
        this.imgDescription = imgDescription;

        this.next = null;
        this.previous = null;
    }
}