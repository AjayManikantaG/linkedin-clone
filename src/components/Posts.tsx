import React, { useContext, useEffect, useState } from 'react';
import Post from './Post';
import { postsData } from '../mock_data/postsdata';
import './Posts.css';
import { UpdateContext } from '../App';

type PostProps = {
  userId: number;
  id: number;
  followers: number;
  imageUrl: string;
  name: string;
  workingAt: string;
  title: string;
  body: string;
};

function Posts() {
  const [postsData1, setPostsData1] = useState([]);
  const newPosts = useContext(UpdateContext);

  useEffect(() => {
    getPostsData(postsData);
  }, [newPosts]);

  const getPostsData = async (postData: any) => {
    const data = await setTimeout((postData) => {
      setPostsData1(postData);
    }, 2000);
    return data;
  };

  return (
    <section className='posts'>
      {postsData1 ? (
        <p className='posts__loadingspinner'>
          <img src='loading_spinner.gif' alt='' />
        </p>
      ) : (
        postsData.map((post: PostProps) => {
          return <Post key={post.id} post={post} />;
        })
      )}
    </section>
  );
}

export default Posts;
