import React from 'react';

type CTALinkProps = {
  label: string;
  link: string;
  isPrimary: boolean;
};

const CTALink = ({ label, link, isPrimary }: CTALinkProps): JSX.Element => {
  let className = 'cta-link';
  if (!isPrimary) {
    className = `${className} ${className}--secondary`;
  }

  return (
    <a href={link} className={className}>
      {label}
    </a>
  );
};

export default CTALink;
