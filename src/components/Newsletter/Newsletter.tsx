import React from 'react';
import { useGetNewsletterQuery } from '../../contentful';
import NewsletterForm from './NewsletterForm';

const Newsletter = (): JSX.Element | null => {
  const { loading, error, data } = useGetNewsletterQuery();

  if (loading || error || !data?.page?.newsletter) return null;
  const { title, tagline, inputPlaceholder, ctaText } = data.page.newsletter;

  return (
    <section>
      {tagline && <p>{tagline}</p>}
      {title && <h2>{title}</h2>}
      <NewsletterForm
        emailPlaceholder={inputPlaceholder || ''}
        ctaText={ctaText || 'Submit'}
      />
    </section>
  );
};

export default Newsletter;
