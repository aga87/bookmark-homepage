import React from 'react';

type NavLinkProps = {
  link: string;
  label: string;
  isPrimary: boolean;
};

const NavLink = ({ link, label, isPrimary }: NavLinkProps): JSX.Element => {
  let className = 'nav-link';
  if (!isPrimary) {
    className = `${className} ${className}--secondary`;
  }

  return (
    <a href={link} className={className}>
      {label}
    </a>
  );
};

export default NavLink;
