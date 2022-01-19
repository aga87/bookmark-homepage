import React from 'react';
import { useGetFaqAccordionQuery } from '../../contentful';
import ToggleButton from '../nano/ToggleButton';

const FAQAccordion = () => {
  const { loading, error, data } = useGetFaqAccordionQuery();

  if (loading || error) return null;
  if (!data?.page?.frequentlyAskedQuestionsCollection?.items) return null;

  const { items } = data.page.frequentlyAskedQuestionsCollection;

  const handleClick = () => {
    console.log('click');
  };

  const accordion = items.map(item => {
    if (!item || !item.question || !item.answer) return null;
    const { question, answer } = item;
    const { id } = item.sys;

    return (
      <div key={id}>
        <h3>
          <ToggleButton
            label={question}
            isExpanded={false}
            id={id}
            controlledRegionId={`region-${id}`}
            handleClick={handleClick}
          />
        </h3>
        <div id={`region-${id}`} role='region' aria-labelledby={id}>
          <p>{answer}</p>
        </div>
      </div>
    );
  });

  return <div>{accordion}</div>;
};

export default FAQAccordion;
