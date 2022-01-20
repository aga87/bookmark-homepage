import React from 'react';
import Logo from '../nano/Logo/Logo';
import Navigation from '../Navigation/Navigation';
import { ReactComponent as LogoBookmarkSvg } from '../../svg/logo-bookmark.svg';

const Header = (): JSX.Element => {
  return (
    <header>
      <Logo />
      <LogoBookmarkSvg />
      <Navigation />
    </header>
  );
};

export default Header;
