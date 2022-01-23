import React from 'react';
import { useGetNavigationSocialLinksQuery } from '../../contentful';
import { ReactComponent as TwitterIcon } from '../../svg/icon-twitter.svg';
import { ReactComponent as FacebookIcon } from '../../svg/icon-facebook.svg';
import SocialLink from '../nano/SocialLink';

const NavigationSocialLinks = (): JSX.Element | null => {
  const { loading, error, data } = useGetNavigationSocialLinksQuery();

  if (loading || error || !data?.settings) return null;
  const { twitterLink, facebookLink } = data.settings;

  return (
    <div className='c-navigation-social-links'>
      <ul className='l-navigation-social-links'>
        {twitterLink && (
          <li>
            <SocialLink link={twitterLink}>
              <TwitterIcon fill='#FFF' title='Twitter' />
            </SocialLink>
          </li>
        )}
        {facebookLink && (
          <li>
            <SocialLink link={facebookLink}>
              <FacebookIcon fill='#FFF' title='Facebook' />
            </SocialLink>
          </li>
        )}
      </ul>
    </div>
  );
};

export default NavigationSocialLinks;
