import React from 'react';
// import { NavLink } from 'react-router-dom';
import Common from './Common';
import home from './images/home.jpg';

const Home = ()=> {
  return (
    <>
      <Common
        imgsrc = {home}
        name = 'Grow your Buisness with'
        visit = '/service'
        btname = 'Get Started'
      />
    </>
  )
}

export default Home;