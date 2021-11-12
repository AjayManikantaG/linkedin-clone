import React from 'react';
import './MainHomeSection.css';
import MainSideBarLeft from './HomeSideBarLeft';

function MainHomeSection() {
  return (
    <main className='main__section'>
      <div className='main__container'>
        <MainSideBarLeft />
      </div>
    </main>
  );
}

export default MainHomeSection;
