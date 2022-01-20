import React from 'react';
import NavigationFooter from '../Navigation/NavigationFooter';
import Logo from '../nano/Logo/Logo';
import { ReactComponent as LogoBookmarkSvg } from '../../svg/logo-bookmark.svg';

const Footer = (): JSX.Element => {
  return (
    <footer>
      <Logo />
      <LogoBookmarkSvg />
      <NavigationFooter />
    </footer>
  );
};

export default Footer;
