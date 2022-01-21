import React from 'react';
import { useGetDownloadIntroQuery } from '../../contentful';
import Heading from '../nano/Heading';

const Download: React.FC = ({ children }): JSX.Element | null => {
  const { loading, error, data } = useGetDownloadIntroQuery();

  if (loading || error || !data?.page?.downloadIntro) return null;
  const { title, description } = data.page.downloadIntro;

  return (
    <section>
      {title && <Heading level={2} title={title} />}
      {description && <p>{description}</p>}
      {children}
    </section>
  );
};

export default Download;
