import React from 'react';

type NavLinkProps = {
  link: string;
  label: string;
  isPrimary: boolean;
  handleKeyDown?: (e: React.KeyboardEvent<HTMLAnchorElement>) => void;
};

const NavLink = React.forwardRef<HTMLAnchorElement, NavLinkProps>(
  (
    { link, label, isPrimary, handleKeyDown }: NavLinkProps,
    ref
  ): JSX.Element => {
    let className = 'nav-link';
    if (isPrimary) {
      className = `${className} ${className}--primary`;
    }

    return (
      <a
        ref={ref}
        href={link}
        className={className}
        onKeyDown={e => handleKeyDown && handleKeyDown(e)}
      >
        {label}
      </a>
    );
  }
);

export default NavLink;
