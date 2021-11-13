import React from 'react';
import './MainHomeSection.css';
import MainSideBarLeft from './HomeSideBarLeft';
import HomePosts from './HomePosts';
import HomeNews from './HomeNews';

function MainHomeSection() {
  return (
    <main className='main__section'>
      <br />
      <br />
      <div className='main__container'>
        <MainSideBarLeft />
        <HomePosts />
        <HomeNews />
      </div>
    </main>
  );
}

export default MainHomeSection;
