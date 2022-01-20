import React, { useState } from 'react';
import ToggleButton from '../nano/ToggleButton';

type FAQProps = {
  question: string;
  answer: string;
  id: string;
};

const FAQ = ({ question, answer, id }: FAQProps): JSX.Element => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggleClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div>
      <ToggleButton
        label={question}
        isExpanded={isExpanded}
        id={id}
        controlledRegionId={`region-${id}`}
        handleClick={handleToggleClick}
      />
      <div id={`region-${id}`} role='region' aria-labelledby={id}>
        {isExpanded && <p>{answer}</p>}
      </div>
    </div>
  );
};

export default FAQ;
