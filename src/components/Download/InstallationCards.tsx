import React from 'react';
import { useGetInstallationCardsQuery } from '../../contentful';
import CTALink from '../nano/CTALink';
import { ReactComponent as DottedLine } from '../../svg/icons/bg-dots.svg';

const InstallationCards = () => {
  const { loading, error, data } = useGetInstallationCardsQuery();

  if (loading || error) return null;
  if (!data?.page?.installationCardsCollection?.items) return null;

  const { items } = data.page.installationCardsCollection;

  const cards = items.map(item => {
    if (!item) return null;
    const { logo, title, version, installLink } = item;
    return (
      <li key={item.sys.id}>
        {logo && logo.url && (
          <img
            src={logo.url}
            alt={logo.description || ''}
            width={logo.width || ''}
            height={logo.height || ''}
          />
        )}
        <h3>{title}</h3>
        <p>{version}</p>
        <DottedLine />
        {installLink && installLink.link && (
          <CTALink
            label={installLink.label || ''}
            link={installLink.link}
            isPrimary={installLink.isPrimaryCta as boolean}
          />
        )}
      </li>
    );
  });

  return <ul>{cards}</ul>;
};

export default InstallationCards;
