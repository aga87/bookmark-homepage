import React, { useState } from 'react';
import FAQToggle from './FAQToggle';

type FAQProps = {
  question: string;
  answer: string;
  id: string;
  handleKeyDown: (e: React.KeyboardEvent<HTMLButtonElement>) => void;
};

const FAQ = React.forwardRef<HTMLButtonElement, FAQProps>(
  ({ question, answer, id, handleKeyDown }: FAQProps, ref): JSX.Element => {
    const [isExpanded, setIsExpanded] = useState(false);

    const handleToggleClick = () => {
      setIsExpanded(!isExpanded);
    };

    return (
      <div className='c-faq'>
        <FAQToggle
          ref={ref}
          label={question}
          isExpanded={isExpanded}
          id={id}
          controlledRegionId={`region-${id}`}
          handleClick={handleToggleClick}
          handleKeyDown={handleKeyDown}
        />
        <div id={`region-${id}`} role='region' aria-labelledby={id}>
          {isExpanded && <p className='c-faq__answer'>{answer}</p>}
        </div>
      </div>
    );
  }
);

export default FAQ;
