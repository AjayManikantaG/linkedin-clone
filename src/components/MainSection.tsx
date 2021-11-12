import React from 'react';
import './MainSection.css';
import MainSideBarLeft from './MainSideBarLeft';

function MainSection() {
  return (
    <main className='main__section'>
      <div className='main__container'>
        <MainSideBarLeft />
      </div>
    </main>
  );
}

export default MainSection;
