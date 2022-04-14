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
