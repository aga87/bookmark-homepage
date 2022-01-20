import React from 'react';
import { ReactComponent as ArrowIcon } from '../../svg/icon-arrow.svg';

type ToggleButtonProps = {
  label: string;
  isExpanded: boolean;
  controlledRegionId: string;
  id: string;
  handleClick: () => void;
  handleKeyDown: (e: React.KeyboardEvent<HTMLButtonElement>) => void;
};

const ToggleButton = React.forwardRef<HTMLButtonElement, ToggleButtonProps>(
  (
    {
      label,
      isExpanded,
      controlledRegionId,
      id,
      handleClick,
      handleKeyDown
    }: ToggleButtonProps,
    ref
  ): JSX.Element => {
    return (
      <button
        ref={ref}
        type='button'
        aria-expanded={isExpanded}
        aria-controls={controlledRegionId}
        id={id}
        onClick={handleClick}
        onKeyDown={handleKeyDown}
      >
        <span>{label}</span>
        <ArrowIcon />
      </button>
    );
  }
);

export default ToggleButton;
