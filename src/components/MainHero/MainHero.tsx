import React from 'react';
import { useGetMainHeroQuery } from '../../contentful';
import CTALink from '../nano/CTALink';

const MainHero = (): JSX.Element | null => {
  const { loading, error, data } = useGetMainHeroQuery();

  if (loading || error || !data?.page?.mainHero) return null;
  const { image, title, description, ctAsCollection } = data.page.mainHero;

  const CTAs = ctAsCollection?.items.map(cta => {
    if (!cta || !cta.link || !cta.label) return null;
    return (
      <li key={cta.sys.id}>
        <CTALink
          label={cta.label}
          link={cta?.link as string}
          isPrimary={cta?.isPrimaryCta as boolean}
        />
      </li>
    );
  });

  return (
    <main>
      {image && image.url && (
        <img
          src={image.url}
          alt={image.description || ''}
          width={image.width || ''}
          height={image.height || ''}
        />
      )}
      {title && <h1>{title}</h1>}
      {description && <p>{description}</p>}
      {CTAs && <ul>{CTAs}</ul>}
    </main>
  );
};

export default MainHero;
