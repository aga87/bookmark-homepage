import React from 'react';

type HeadingProps = {
  title: string;
  level: 1 | 2 | 3;
  variant?: 'primary' | 'secondary';
};

const Heading = ({
  title,
  level,
  variant = 'primary'
}: HeadingProps): JSX.Element => {
  let className = 'heading';
  if (variant !== 'primary') {
    className = `${className} ${className}--${variant}`;
  }

  if (level === 1) return <h1 className={className}>{title}</h1>;
  if (level === 2) return <h2 className={className}>{title}</h2>;
  return <h3 className={className}>{title}</h3>;
};

export default Heading;
