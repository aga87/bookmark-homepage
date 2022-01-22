import React from 'react';
import { useGetNewsletterQuery } from '../../contentful';
import Heading from '../nano/Heading';
import NewsletterForm from './NewsletterForm';

const Newsletter = (): JSX.Element | null => {
  const { loading, error, data } = useGetNewsletterQuery();

  if (loading || error || !data?.page?.newsletter) return null;
  const { title, tagline, inputPlaceholder, ctaText } = data.page.newsletter;

  return (
    <section className='c-newsletter'>
      <div className='l-wrapper'>
        <div className='l-newsletter'>
          <div className='l-newsletter__content'>
            {tagline && (
              <p className='c-newsletter__tagline l-newsletter__tagline'>
                {tagline}
              </p>
            )}
            {title && (
              <div className='l-newsletter__title'>
                <Heading level={2} title={title} variant='secondary' />
              </div>
            )}
            <NewsletterForm
              emailPlaceholder={inputPlaceholder || ''}
              ctaText={ctaText || 'Submit'}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
