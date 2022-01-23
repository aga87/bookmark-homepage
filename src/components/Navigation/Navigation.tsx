import React from 'react';
import { useGetNavigationLinksQuery } from '../../contentful';
import useDropdown from '../../hooks/useDropdown';
import { ReactComponent as LogoBookmarkWhite } from '../../svg/logo-bookmark-all-white.svg';
import NavLink from '../nano/NavLink';
import NavToggleButton from '../nano/NavToggleButton';
import NavigationSocialLinks from './NavigationSocialLinks';

const Navigation = (): JSX.Element | null => {
  const { loading, error, data } = useGetNavigationLinksQuery();

  const {
    isExpanded,
    toggleButtonRef,
    dropdownItemsRefs,
    handleDropdownToggleClick,
    handleDropdownToggleKeyDown,
    handleDropdownItemKeyDown
  } = useDropdown(
    data?.settings?.navigationBarLinksCollection?.items.length || 0
  );

  const navLinks = data?.settings?.navigationBarLinksCollection?.items.map(
    (item, i) => {
      if (!item || !item.link || !item.label) return null;
      const { sys, link, label, isPrimaryCta } = item;

      return (
        <li key={sys.id} className='c-navigation__list-item'>
          <NavLink
            ref={ref => {
              dropdownItemsRefs.current[i] = ref;
            }}
            link={link}
            label={label.toUpperCase()}
            isPrimary={isPrimaryCta || false}
            handleKeyDown={handleDropdownItemKeyDown}
          />
        </li>
      );
    }
  );

  if (loading || error || !navLinks) return null;
  return (
    <nav
      className={`c-navigation ${isExpanded ? 'c-navigation--expanded' : ''}`}
      aria-label='primary'
    >
      <div
        className={`c-navigation__inner-header ${
          isExpanded ? 'c-navigation__inner-header--expanded' : ''
        }`}
      >
        {isExpanded && <LogoBookmarkWhite />}
        <NavToggleButton
          ref={toggleButtonRef}
          isExpanded={isExpanded}
          id='main-nav-toggle-btn'
          controlledNavId='main-nav'
          handleClick={handleDropdownToggleClick}
          handleKeyDown={handleDropdownToggleKeyDown}
        />
      </div>

      <ul
        id='main-nav'
        className={`c-navigation__list ${
          isExpanded ? 'c-navigation__list--expanded' : ''
        }`}
        aria-labelledby='main-nav-toggle-btn'
      >
        {navLinks}
      </ul>
      {isExpanded && (
        <div className='c-navigation__social'>
          <NavigationSocialLinks />
        </div>
      )}
    </nav>
  );
};

export default Navigation;
