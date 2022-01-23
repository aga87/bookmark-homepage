import React from 'react';
import { useGetFaqAccordionQuery } from '../../contentful';
import useRovingFocus from '../../hooks/useRovingFocus';
import FAQ from './FAQ';

const FAQAccordion = () => {
  const { loading, error, data } = useGetFaqAccordionQuery();

  const { widgetItemsRefs, handleKeyDown } = useRovingFocus(
    data?.page?.frequentlyAskedQuestionsCollection?.items.length || 0,
    true
  );

  const accordion = data?.page?.frequentlyAskedQuestionsCollection?.items.map(
    (item, i: number) => {
      if (!item || !item.question || !item.answer) return null;
      const { question, answer } = item;
      const { id } = item.sys;

      return (
        <div key={id}>
          <FAQ
            ref={ref => {
              widgetItemsRefs.current[i] = ref;
            }}
            // Workaround the content typo in the API
            question={i === 0 ? 'What is Bookmark?' : question}
            answer={answer}
            id={id}
            handleKeyDown={handleKeyDown}
          />
        </div>
      );
    }
  );

  if (loading || error || !accordion) return null;
  return <div>{accordion}</div>;
};

export default FAQAccordion;
