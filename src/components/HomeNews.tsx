import React from 'react';
import './HomeNews.css';

function HomeNews() {
  return (
    <aside className='home__news'>
      <div className='home__newscontainer'>
        <h3>Linkedin News</h3>
        <ul>
          <li>Co-working spaces see strong demand</li>
          <p>9 days ago</p>
          <li>Talent wars: IT firms go all out</li>
          <p>2 days ago</p>
          <li>When negotiating salary is a must</li>
          <p>5 days ago</p>
          <li>Nykaa vs Paytm</li>
          <p>1 days ago</p>
          <li>No time for job search?</li>
          <p>20 days ago</p>
        </ul>
      </div>
    </aside>
  );
}

export default HomeNews;
