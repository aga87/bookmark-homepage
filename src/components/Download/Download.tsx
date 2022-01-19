import React from 'react';
import { useGetDownloadIntroQuery } from '../../contentful';

const Download: React.FC = ({ children }): JSX.Element | null => {
  const { loading, error, data } = useGetDownloadIntroQuery();

  if (loading || error) return null;
  if (!data?.page?.downloadIntro) return null;

  const { title, description } = data.page.downloadIntro;

  return (
    <section>
      {title && <h2>{title}</h2>}
      {description && <p>{description}</p>}
      {children}
    </section>
  );
};

export default Download;
