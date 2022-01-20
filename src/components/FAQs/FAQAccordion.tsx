import React from 'react';
import { useGetFaqAccordionQuery } from '../../contentful';
import FAQ from './FAQ';

const FAQAccordion = () => {
  const { loading, error, data } = useGetFaqAccordionQuery();

  const accordion = data?.page?.frequentlyAskedQuestionsCollection?.items.map(
    item => {
      if (!item || !item.question || !item.answer) return null;
      const { question, answer } = item;
      const { id } = item.sys;

      return (
        <div key={id}>
          <FAQ question={question} answer={answer} id={id} />
        </div>
      );
    }
  );

  if (loading || error || !accordion) return null;
  return <div>{accordion}</div>;
};

export default FAQAccordion;
