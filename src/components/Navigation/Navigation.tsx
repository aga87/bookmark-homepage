import React from 'react';
import { useGetNavigationLinksQuery } from '../../contentful';
import useDropdown from '../../hooks/useDropdown';
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
        <li key={sys.id}>
          <NavLink
            ref={ref => {
              dropdownItemsRefs.current[i] = ref;
            }}
            link={link}
            label={label.toUpperCase()}
            isPrimary={isPrimaryCta as boolean}
            handleKeyDown={handleDropdownItemKeyDown}
          />
        </li>
      );
    }
  );

  if (loading || error || !navLinks) return null;
  return (
    <nav>
      <NavToggleButton
        ref={toggleButtonRef}
        isExpanded={false}
        id='main-nav-toggle-btn'
        controlledNavId='main-nav'
        handleClick={handleDropdownToggleClick}
        handleKeyDown={handleDropdownToggleKeyDown}
      />
      {isExpanded && (
        <ul id='main-nav' aria-labelledby='main-nav-toggle-btn'>
          {navLinks}
        </ul>
      )}
      <NavigationSocialLinks />
    </nav>
  );
};

export default Navigation;
