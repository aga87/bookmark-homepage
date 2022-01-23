import React from 'react';
import Navigation from '../Navigation/Navigation';
import { ReactComponent as LogoBookmarkSvg } from '../../svg/logo-bookmark.svg';

const Header = (): JSX.Element => {
  return (
    <header className='c-header'>
      <div className='l-wrapper'>
        <div className='l-header'>
          <div className='l-header__logo'>
            <LogoBookmarkSvg />
          </div>
          <div>
            <Navigation />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
