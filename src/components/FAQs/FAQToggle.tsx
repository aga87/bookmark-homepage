import React from 'react';
import { ReactComponent as ArrowIcon } from '../../svg/icon-arrow.svg';

type FAQToggleProps = {
  label: string;
  isExpanded: boolean;
  controlledRegionId: string;
  id: string;
  handleClick: () => void;
  handleKeyDown: (e: React.KeyboardEvent<HTMLButtonElement>) => void;
};

const FAQToggle = React.forwardRef<HTMLButtonElement, FAQToggleProps>(
  (
    {
      label,
      isExpanded,
      controlledRegionId,
      id,
      handleClick,
      handleKeyDown
    }: FAQToggleProps,
    ref
  ): JSX.Element => {
    return (
      <button
        ref={ref}
        type='button'
        className={
          isExpanded ? 'faq-toggle faq-toggle--expanded' : 'faq-toggle'
        }
        aria-expanded={isExpanded}
        aria-controls={controlledRegionId}
        id={id}
        onClick={handleClick}
        onKeyDown={handleKeyDown}
      >
        <span className='toggle-button__label'>{label}</span>
        <ArrowIcon stroke='#5267DF' />
      </button>
    );
  }
);

export default FAQToggle;
