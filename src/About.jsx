import React from 'react';
// import { NavLink } from 'react-router-dom';
import Common from './Common';
import about from './images/about.jpg'


const About = ()=> {
  return (
    <>
      <Common 
        imgsrc = {about}
        name = 'Welcome to about page'
        visit ='/contact'
        btname = 'Contact now'
      />
    </>
  )
}

export default About;