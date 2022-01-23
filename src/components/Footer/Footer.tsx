import React from 'react';
import NavigationFooter from '../Navigation/NavigationFooter';
import { ReactComponent as LogoBookmarkWhite } from '../../svg/logo-bookmark-white.svg';

const Footer = (): JSX.Element => {
  return (
    <footer className='c-footer'>
      <div className='l-wrapper'>
        <div className='l-footer'>
          <div className='l-footer__logo'>
            <LogoBookmarkWhite />
          </div>
          <NavigationFooter />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
