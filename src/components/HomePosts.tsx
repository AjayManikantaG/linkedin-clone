import React, { useRef } from 'react';
import {
  FaCalendarCheck,
  FaLocationArrow,
  FaPhotoVideo,
  FaVideo,
} from 'react-icons/fa';
import './HomePosts.css';
import Posts from './Posts';
import { postsData } from '../mock_data/postsdata';

function HomePosts() {
  const inputRef = useRef<any>();

  const createPost = (event: any) => {
    const post = {
      userId: 1,
      id: 1,
      followers: 123,
      imageUrl: 'https://source.unsplash.com/random/300x300',
      name: 'Ajay Manikanta',
      workingAt: 'Techm',
      title: inputRef.current.value,
      body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
    };
    postsData.unshift(post);
    inputRef.current.value = '';
  };

  return (
    <main className='home__posts'>
      <div className='home__createpost'>
        <div className='home__input-container'>
          <img src='./Ajay_image.png' alt='Ajay profile' />
          <input ref={inputRef} type='text' placeholder='Start a post' />
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
          <div onClick={createPost} className='home__media-send'>
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
