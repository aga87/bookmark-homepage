import React from 'react';
import { useGetNewsletterQuery } from '../../contentful';
import Heading from '../nano/Heading';
import NewsletterForm from './NewsletterForm';

const Newsletter = (): JSX.Element | null => {
  const { loading, error, data } = useGetNewsletterQuery();

  if (loading || error || !data?.page?.newsletter) return null;
  const { title, tagline, inputPlaceholder, ctaText } = data.page.newsletter;

  return (
    <section>
      {tagline && <p>{tagline}</p>}
      {title && <Heading level={2} title={title} variant='secondary' />}
      <NewsletterForm
        emailPlaceholder={inputPlaceholder || ''}
        ctaText={ctaText || 'Submit'}
      />
    </section>
  );
};

export default Newsletter;
