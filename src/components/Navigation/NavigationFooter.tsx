import React from 'react';
import { useGetNavigationFooterLinksQuery } from '../../contentful';
import NavLink from '../nano/NavLink';
import NavigationSocialLinks from './NavigationSocialLinks';

const NavigationFooter = (): JSX.Element | null => {
  const { loading, error, data } = useGetNavigationFooterLinksQuery();

  const footerLinks = data?.settings?.footerLinksCollection?.items.map(item => {
    if (!item || !item.link || !item.label) return null;
    const { sys, link, label, isPrimaryCta } = item;

    return (
      <li key={sys.id} className='l-navigation-footer__list-item'>
        <NavLink
          link={link}
          label={label}
          isPrimary={isPrimaryCta as boolean}
        />
      </li>
    );
  });

  if (loading || error || !footerLinks) return null;
  return (
    <nav
      className='c-navigation-footer l-navigation-footer'
      aria-label='secondary'
    >
      <ul className='l-navigation-footer__list'>{footerLinks}</ul>
      <NavigationSocialLinks />
    </nav>
  );
};

export default NavigationFooter;
