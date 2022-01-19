import React from 'react';
import { useGetFeaturesQuery } from '../../contentful';

const Features: React.FC = ({ children }): JSX.Element | null => {
  const { loading, error, data } = useGetFeaturesQuery();

  if (loading || error) return null;
  if (!data?.page) return null;

  const { featuresIntro } = data.page;

  return (
    <section>
      {featuresIntro && featuresIntro.title && <h2>{featuresIntro.title}</h2>}
      {featuresIntro && featuresIntro.description && (
        <p>{featuresIntro.description}</p>
      )}
      {children}
    </section>
  );
};

export default Features;
