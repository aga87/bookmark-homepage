import React from 'react';
import { useGetLogoQuery } from '../../../contentful';

const Logo = (): JSX.Element | null => {
  const { loading, error, data } = useGetLogoQuery();

  if (loading || error || !data?.settings?.logo) return null;
  const { title, description, url, width, height } = data.settings.logo;
  if (!url) return null;

  return (
    <img
      src={url}
      title={title || ''}
      alt={description || ''}
      width={width || ''}
      height={height || ''}
    />
  );
};

export default Logo;
