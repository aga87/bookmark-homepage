import React from 'react';
import { useGetNavigationLinksQuery } from '../../contentful';
import NavLink from '../nano/NavLink';
import NavToggleButton from '../nano/NavToggleButton';
import NavigationSocialLinks from './NavigationSocialLinks';

const Navigation = (): JSX.Element | null => {
  const { loading, error, data } = useGetNavigationLinksQuery();
  if (loading || error) return null;
  if (!data?.settings?.navigationBarLinksCollection?.items) return null;

  const { items } = data.settings.navigationBarLinksCollection;

  const handleNavToggleBtnClick = () => {
    console.log('Handle click');
  };
  const handleNavToggleBtnKeyDown = (
    e: React.KeyboardEvent<HTMLButtonElement>
  ) => {
    console.log('Handle click', e.target);
  };

  const links = items.map(item => {
    if (!item || !item.link || !item.label) return null;
    const { sys, link, label, isPrimaryCta } = item;

    return (
      <li key={sys.id}>
        <NavLink
          link={link}
          label={label}
          isPrimary={isPrimaryCta as boolean}
        />
      </li>
    );
  });

  return (
    <nav>
      <NavToggleButton
        ref={null}
        isExpanded={false}
        id='main-nav-toggle-btn'
        controlledNavId='main-nav'
        handleClick={handleNavToggleBtnClick}
        handleKeyDown={handleNavToggleBtnKeyDown}
      />
      <ul id='main-nav' aria-labelledby='main-nav-toggle-btn'>
        {links}
      </ul>
      <NavigationSocialLinks />
    </nav>
  );
};

export default Navigation;
