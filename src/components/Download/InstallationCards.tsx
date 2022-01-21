import React from 'react';
import { useGetInstallationCardsQuery } from '../../contentful';
import Heading from '../nano/Heading';
import CTALink from '../nano/CTALink';
import { ReactComponent as DottedLine } from '../../svg/bg-dots.svg';

const InstallationCards = () => {
  const { loading, error, data } = useGetInstallationCardsQuery();

  const cards = data?.page?.installationCardsCollection?.items.map(item => {
    if (!item) return null;
    const { logo, title, version, installLink } = item;
    return (
      <li key={item.sys.id}>
        {logo && logo.url && (
          <img
            src={logo.url}
            title={logo.title || ''}
            alt={logo.description || ''}
            width={logo.width || ''}
            height={logo.height || ''}
          />
        )}
        {title && <Heading level={3} title={title} />}
        {version && <p>{version}</p>}
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

  if (loading || error || !cards) return null;

  return <ul>{cards}</ul>;
};

export default InstallationCards;
