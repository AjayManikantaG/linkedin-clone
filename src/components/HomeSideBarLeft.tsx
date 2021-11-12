import React from 'react';
import './HomeSideBarLeft.css';

function MainSideBarLeft() {
  return (
    <aside className='home__leftsidebar'>
      <div className='home__leftprofile'>
        <div className='home__leftprofile-banner'>
          <img
            className='home__banner'
            src='/Ajay_LinkedIn Banner.png'
            alt='Ajay linkedin banner'
          />
          <img
            className='home__profile'
            src='/Ajay_Photo.jpg'
            alt='Ajay linkedin banner'
          />
        </div>
        <div className='home__leftprofile-content'></div>
      </div>
      <div className='home__leftrecent'></div>
    </aside>
  );
}

export default MainSideBarLeft;
