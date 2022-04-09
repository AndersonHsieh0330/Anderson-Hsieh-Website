import React, { useState} from 'react';
import logo from './logo.svg';
import './App.css';
import AboutPage from './screens/aboutme/AboutMe.js';
import FishPage from './screens/fish/Fish.js';
import VolleyballPage from './screens/volleyball/Volleyball.js'
import TechPage from './screens/tech/Tech.js';
import ResumePage from './screens/resume/Resume.js'
import ContactPage from './screens/contact/Contact.js'

import {BrowserRouter, Route, Routes} from 'react-router-dom';

import BottomMenu from './components/BottomMenu.js';

import PhotoLinkedList from './components/PhotoLinkedList/PhotoLinkedList';
import  PhotoNode from './components/PhotoLinkedList/PhotoNode';


const App = () => {

  let list = new PhotoLinkedList();
  list.addToBack(new PhotoNode("1","1"));
  list.addToBack(new PhotoNode("2","2"));
  list.addToBack(new PhotoNode("3","3"));
  list.addToBack(new PhotoNode("4","4"));

  console.log(list.getFront().next.next.next.next.imgPath);

  return (
    <BrowserRouter>
    <div className='App'>
       
      <Routes>
        <Route path = "/" element = {<AboutPage/>} />
        <Route path = "/fish"element = {<FishPage/>} />
        <Route path = "/volleyball" element = {<VolleyballPage/>} />
        <Route path = "/tech"element = {<TechPage/>} />
        <Route path = "/resume" element = {<ResumePage/>} />
        <Route path = "/contact"element = {<ContactPage/>} />
      </Routes> 
     
      <BottomMenu/>
      
    </div>
    </BrowserRouter>

  );
}

export default App;
