import React from 'react';
import './HomeSideBarLeft.css';

function MainSideBarLeft() {
  const role: string = 'Senior associate consultant at Infosys';
  const name: string = 'Ajay Manikanta';
  const profileViewCount: number = 330;
  const postViewCount: number = 2429;

  return (
    <aside className='home__leftsidebar'>
      <div className='home__leftprofile'>
        <div className='home__leftprofile-container'>
          <img
            className='home__banner'
            src='/Ajay_LinkedIn Banner.png'
            alt='Ajay linkedin banner'
          />
          <img
            className='home__profile'
            src='/Ajay_image.png'
            alt='Ajay linkedin banner'
          />
          <br />
          <h4>{name}</h4>
          <h5>{role}</h5>
        </div>
        <hr />
        <div className='home__leftprofile-content'>
          <div className='home__left-profileview'>
            <p>Who viewed your profile</p>
            <p>{profileViewCount}</p>
          </div>
          <div className='home__left-postview'>
            <p>Views of your post</p>
            <p>{postViewCount}</p>
          </div>
        </div>
      </div>
      <div className='home__leftrecent'></div>
    </aside>
  );
}

export default MainSideBarLeft;
