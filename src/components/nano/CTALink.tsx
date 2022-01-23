import React from 'react';

type CTALinkProps = {
  label: string;
  link: string;
  isPrimary: boolean;
  isWide?: boolean;
};

const CTALink = ({
  label,
  link,
  isPrimary,
  isWide
}: CTALinkProps): JSX.Element => {
  let className = 'cta-link';
  if (isWide) {
    className = `${className} ${className}--wide`;
  } else if (!isPrimary) {
    className = `${className} ${className}--secondary`;
  }

  return (
    <a href={link} className={className}>
      {label}
    </a>
  );
};

export default CTALink;
