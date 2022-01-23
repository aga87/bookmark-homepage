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
      <li
        key={item.sys.id}
        className='c-installation-cards__card l-installation-cards__card'
      >
        <div className='c-installation-cards__card-top'>
          {logo && logo.url && (
            <img
              className='c-installation-cards__card-img'
              src={logo.url}
              title={logo.title || ''}
              alt={logo.description || ''}
              width={logo.width || ''}
              height={logo.height || ''}
            />
          )}
          {title && (
            <div className='c-installation-cards__card-title'>
              <Heading level={3} title={title} />
            </div>
          )}
          {version && (
            <small className='c-installation-cards__card-version'>
              {version}
            </small>
          )}
        </div>
        <DottedLine />
        <div className='c-installation-cards__card-bottom'>
          {installLink && installLink.link && (
            <CTALink
              label={installLink.label || ''}
              link={installLink.link}
              isPrimary={installLink.isPrimaryCta as boolean}
              isWide
            />
          )}
        </div>
      </li>
    );
  });

  if (loading || error || !cards) return null;

  return <ul className='c-installation-cards l-installation-cards'>{cards}</ul>;
};

export default InstallationCards;
