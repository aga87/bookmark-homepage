import React from 'react';
import { ReactComponent as ArrowIcon } from '../../svg/icon-arrow.svg';

type ToggleButtonProps = {
  label: string;
  isExpanded: boolean;
  controlledRegionId: string;
  id: string;
  handleClick: () => void;
};

const ToggleButton = ({
  label,
  isExpanded,
  controlledRegionId,
  id,
  handleClick
}: ToggleButtonProps): JSX.Element => {
  return (
    <button
      type='button'
      aria-expanded={isExpanded}
      aria-controls={controlledRegionId}
      id={id}
      onClick={handleClick}
    >
      <span>{label}</span>
      <ArrowIcon />
    </button>
  );
};

export default ToggleButton;
