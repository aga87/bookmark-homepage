import React from 'react';
import { useGetFeaturesQuery } from '../../contentful';
import Heading from '../nano/Heading';

const Features: React.FC = ({ children }): JSX.Element | null => {
  const { loading, error, data } = useGetFeaturesQuery();

  if (loading || error || !data?.page) return null;
  const { featuresIntro } = data.page;

  return (
    <section className='c-features'>
      {featuresIntro && featuresIntro.title && (
        <Heading level={2} title={featuresIntro.title} />
      )}
      {featuresIntro && featuresIntro.description && (
        <p className='c-features__intro'>{featuresIntro.description}</p>
      )}
      {children}
    </section>
  );
};

export default Features;
