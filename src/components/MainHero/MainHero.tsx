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
      <li key={cta.sys.id} className='l-main-hero__ctas-cta'>
        <CTALink
          label={cta.label}
          link={cta?.link as string}
          isPrimary={cta?.isPrimaryCta as boolean}
        />
      </li>
    );
  });

  return (
    <div className='c-main-hero'>
      <main className=' l-main-hero'>
        {image && image.url && (
          <div className='l-main-hero__img'>
            <img
              src={image.url}
              title={image.title || ''}
              alt={image.description || ''}
              width={image.width || ''}
              height={image.height || ''}
            />
          </div>
        )}
        <div className='l-main-hero__content'>
          {title && <Heading level={1} title={title} />}
          {description && <p className='l-main-hero__intro'>{description}</p>}
          {CTAs && <ul className='l-main-hero__ctas'>{CTAs}</ul>}
        </div>
      </main>
    </div>
  );
};

export default MainHero;
