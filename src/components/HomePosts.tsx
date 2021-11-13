import React from 'react';
import {
  FaCalendarCheck,
  FaLocationArrow,
  FaPhotoVideo,
  FaVideo,
} from 'react-icons/fa';
import './HomePosts.css';

function HomePosts() {
  return (
    <main className='home__posts'>
      <div className='home__createpost'>
        <div className='home__input-container'>
          <img src='./Ajay_image.png' alt='Ajay profile' />
          <input type='text' placeholder='Start a post' />
        </div>
        <div className='home__media-container'>
          <div className='home__media-photo'>
            <FaPhotoVideo style={{ color: 'hsl(210 92% 71%)' }} />
            <span>Photo</span>
          </div>
          <div className='home__media-video'>
            <FaVideo style={{ color: 'hsl(100 44% 56%)' }} />
            <span>Video</span>
          </div>
          <div className='home__media-event'>
            <FaCalendarCheck style={{ color: 'hsl(36 78% 57%)' }} />
            <span>Event</span>
          </div>
          <div className='home__media-send'>
            <FaLocationArrow style={{ color: 'hsl(358 95% 78%)' }} />
            <span>Send</span>
          </div>
        </div>
      </div>
      <Posts />
    </main>
  );
}

export default HomePosts;
