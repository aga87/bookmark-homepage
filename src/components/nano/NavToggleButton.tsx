import React from 'react';
import { ReactComponent as HamburgerIcon } from '../../svg/icon-hamburger.svg';
import { ReactComponent as CloseIcon } from '../../svg/icon-close.svg';

type NavToggleButtonProps = {
  isExpanded: boolean;
  id: string;
  controlledNavId: string;
  handleClick: () => void;
  handleKeyDown: (e: React.KeyboardEvent<HTMLButtonElement>) => void;
};

const NavToggleButton = React.forwardRef<
  HTMLButtonElement,
  NavToggleButtonProps
>(
  (
    {
      isExpanded,
      id,
      controlledNavId,
      handleClick,
      handleKeyDown
    }: NavToggleButtonProps,
    ref
  ): JSX.Element => {
    /* Note: The exact wording of the button label would be agreed on with the content writer */
    const label = isExpanded ? 'Close menu' : 'Open menu';
    return (
      <button
        className={
          isExpanded
            ? 'nav-toggle-button nav-toggle-button--expanded'
            : 'nav-toggle-button'
        }
        ref={ref}
        type='button'
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        aria-label={label}
        id={id}
        aria-haspopup='menu'
        aria-controls={controlledNavId}
      >
        <span aria-hidden='true'>
          {isExpanded ? <CloseIcon /> : <HamburgerIcon />}
        </span>
      </button>
    );
  }
);

export default NavToggleButton;
