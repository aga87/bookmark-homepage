import React from 'react';
import { useGetNewsletterQuery } from '../../contentful';

const Newsletter = (): JSX.Element | null => {
  const { loading, error, data } = useGetNewsletterQuery();

  if (loading || error) return null;
  if (!data?.page?.newsletter) return null;

  const { title, tagline, inputPlaceholder, ctaText } = data.page.newsletter;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log('Handle email change', e.target);
  };

  return (
    <section>
      {tagline && <p>{tagline}</p>}
      {title && <h2>{title}</h2>}
      <form>
        <label htmlFor='newsletter-email'>{inputPlaceholder}</label>
        <input
          id='newsletter-email'
          type='email'
          placeholder={inputPlaceholder || ''}
          size={30}
          value={inputPlaceholder || ''}
          onChange={handleChange}
          required
          aria-describedby='newsletter-email-error'
        />
        <p id='newsletter-email-error' role='alert'>
          Error message
        </p>
        <button type='submit'>{ctaText || 'Submit'}</button>
      </form>
    </section>
  );
};

export default Newsletter;
