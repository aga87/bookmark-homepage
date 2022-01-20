import React from 'react';
import { useGetNavigationSocialLinksQuery } from '../../contentful';
import { ReactComponent as TwitterIcon } from '../../svg/icon-twitter.svg';
import { ReactComponent as FacebookIcon } from '../../svg/icon-facebook.svg';

const NavigationSocialLinks = (): JSX.Element | null => {
  const { loading, error, data } = useGetNavigationSocialLinksQuery();
  if (loading || error) return null;

  if (!data?.settings) return null;

  const { twitterLink, facebookLink } = data.settings;

  return (
    <ul>
      {twitterLink && (
        <li>
          <a href={twitterLink} target='_blank' rel='noreferrer'>
            <TwitterIcon title='Twitter' />
          </a>
        </li>
      )}
      {facebookLink && (
        <li>
          <a href={facebookLink} target='_blank' rel='noreferrer'>
            <FacebookIcon title='Facebook' />
          </a>
        </li>
      )}
    </ul>
  );
};

export default NavigationSocialLinks;
