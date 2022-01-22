import React from 'react';

type TabProps = {
  title: string;
  selected: boolean;
  tabPanelId: string;
  handleClick: () => void;
  handleKeyDown: (e: React.KeyboardEvent<HTMLButtonElement>) => void;
};

const Tab = React.forwardRef<HTMLButtonElement, TabProps>(
  (
    { title, selected, tabPanelId, handleClick, handleKeyDown }: TabProps,
    ref
  ): JSX.Element => (
    <button
      type='button'
      role='tab'
      ref={ref}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      className='tab'
      aria-selected={selected}
      tabIndex={selected ? 0 : -1} // Roving tabindex
      aria-controls={tabPanelId}
    >
      <span className='tab__title'>
        {title}
        <span
          className={`tab__selection ${selected && 'tab__selection--selected'}`}
        />
      </span>
    </button>
  )
);

export default Tab;
