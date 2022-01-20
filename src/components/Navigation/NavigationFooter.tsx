import React from 'react';
import { useGetNavigationFooterLinksQuery } from '../../contentful';
import NavLink from '../nano/NavLink';
import NavigationSocialLinks from './NavigationSocialLinks';

const NavigationFooter = (): JSX.Element | null => {
  const { loading, error, data } = useGetNavigationFooterLinksQuery();
  if (loading || error) return null;
  if (!data?.settings?.footerLinksCollection?.items) return null;

  const { items } = data.settings.footerLinksCollection;

  const footerLinks = items.map(item => {
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
    <nav aria-label='secondary'>
      <ul>{footerLinks}</ul>
      <NavigationSocialLinks />
    </nav>
  );
};

export default NavigationFooter;
