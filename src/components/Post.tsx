import React, { useState } from 'react';
import './Post.css';
import {
  FaThumbsUp,
  FaRegCommentDots,
  FaRegShareSquare,
  FaLocationArrow,
} from 'react-icons/fa';

export type PostProps = {
  post: {
    userId: number;
    id: number;
    name: string;
    workingAt: string;
    followers: number;
    imageUrl: string;
    title: string;
    body: string;
  };
};

function Post({ post }: PostProps) {
  const [noOfLikes, setNoOfLikes] = useState(
    Math.floor(Math.random() * 1000) || 108
  );
  const [liked, setLiked] = useState(false);

  const likePost = () => {
    if (liked) {
      setLiked(!liked);
      setNoOfLikes(noOfLikes - 1);
      console.log(noOfLikes);
    } else {
      setLiked(!liked);
      setNoOfLikes(noOfLikes + 1);
      console.log(noOfLikes);
    }
  };

  return (
    <section className='post'>
      <div className='post__feedprofile'>
        <img src='https://source.unsplash.com/random/200x200' alt='' />
        <div className='post__profilecontainer'>
          <p>{post.name}</p>
          <p className='post__profilework'>Working at {post.workingAt}</p>
          <p>{Math.floor(Math.random() * 10) || 1} d</p>
        </div>
      </div>
      <div className='post__feedtext'>
        <p>{post.title}</p>
        <img
          src='https://source.unsplash.com/random/500x500'
          alt='post describing action'
        />
        <span style={{ marginLeft: '1rem', fontSize: '12px' }}>
          {noOfLikes} likes
        </span>
      </div>
      <div className='post__feedlikes'>
        <hr style={{ color: '#DCDCDC' }} />
        <div className='post__feedlikescontainer'>
          <button
            onClick={likePost}
            style={{ color: liked ? 'royalblue' : '' }}
          >
            <FaThumbsUp className='post__feedemoji' /> Like
          </button>
          <button>
            <FaRegCommentDots className='post__feedemoji' /> Comment
          </button>
          <button>
            <FaRegShareSquare className='post__feedemoji' /> Share
          </button>
          <button>
            <FaLocationArrow className='post__feedemoji' /> Send
          </button>
        </div>
      </div>
    </section>
  );
}

export default Post;
