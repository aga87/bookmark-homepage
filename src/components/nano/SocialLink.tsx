import React from 'react';

type SocialLinkProps = {
  link: string;
};

const SocialLink: React.FC<SocialLinkProps> = ({
  link,
  children
}): JSX.Element => {
  return (
    <a className='social-link' href={link} target='_blank' rel='noreferrer'>
      {children}
    </a>
  );
};

export default SocialLink;
