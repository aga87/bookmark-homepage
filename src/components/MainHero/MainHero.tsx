import React from 'react';
import { useGetMainHeroQuery } from '../../contentful';
import CTALink from '../nano/CTALink';
import Heading from '../nano/Heading';

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
          title={image.title || ''}
          alt={image.description || ''}
          width={image.width || ''}
          height={image.height || ''}
        />
      )}
      {title && <Heading level={1} title={title} />}
      {description && <p>{description}</p>}
      {CTAs && <ul>{CTAs}</ul>}
    </main>
  );
};

export default MainHero;
