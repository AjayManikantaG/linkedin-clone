import React, { useState } from 'react';
import './Header.css';
import {
  FaSearch,
  FaHome,
  FaNetworkWired,
  FaBlackTie,
  FaEnvelopeOpen,
  FaBell,
  FaJenkins,
} from 'react-icons/fa';

type HeaderProps = {
  badges: boolean;
};

const Header = (props: HeaderProps) => {
  const [isClicked, setIsClicked] = useState(1);

  return (
    <div className='header'>
      {/* Icon and search bar */}
      <div className='header__container'>
        <div className='header__left'>
          <img
            src='data:image/png;base64,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'
            alt=''
          />
          <div className='header__search-bar'>
            <FaSearch className='header__search-icon' />
            <input type='text' placeholder='Search for jobs, companies...' />
          </div>
        </div>

        {/* menu icons */}
        <div className='header__right'>
          <div
            onClick={() => setIsClicked(1)}
            className={`header__right-home ${
              isClicked === 1 ? 'header__icon-enable' : ''
            }`}
          >
            <FaHome className='header__icons' />
            <p>Home</p>
          </div>
          <div
            onClick={() => setIsClicked(2)}
            className={`header__right-network ${
              isClicked === 2 ? 'header__icon-enable' : ''
            }`}
          >
            <FaNetworkWired className='header__icons' />
            <p>My Network</p>
          </div>
          <div
            onClick={() => setIsClicked(3)}
            className={`header__right-jobs ${
              isClicked === 3 ? 'header__icon-enable' : ''
            }`}
          >
            <FaBlackTie className='header__icons' />
            <p>Jobs</p>
          </div>
          <div
            onClick={() => setIsClicked(4)}
            className={`header__right-msg ${
              isClicked === 4 ? 'header__icon-enable' : ''
            }`}
          >
            <FaEnvelopeOpen className='header__icons' />
            <p>Messaging</p>
          </div>
          <div
            onClick={() => setIsClicked(5)}
            className={`header__right-notify ${
              isClicked === 5 ? 'header__icon-enable' : ''
            }`}
          >
            <FaBell className='header__icons' />
            <p>Notifications</p>
          </div>
          <div
            onClick={() => setIsClicked(6)}
            className={`header__right-me ${
              isClicked === 6 ? 'header__icon-enable' : ''
            }`}
          >
            <FaJenkins className='header__icons' />
            <p>Me</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
