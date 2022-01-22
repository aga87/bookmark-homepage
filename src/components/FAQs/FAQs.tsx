import React from 'react';
import { useGetFaqsQuery } from '../../contentful';
import Heading from '../nano/Heading';
import CTALink from '../nano/CTALink';

const FAQs: React.FC = ({ children }): JSX.Element | null => {
  const { loading, error, data } = useGetFaqsQuery();

  if (loading || error || !data?.page) return null;
  const { faqIntro, faqCta } = data.page;

  return (
    <section className='c-faqs'>
      <div className='c-faqs__content'>
        {faqIntro && faqIntro.title && (
          <Heading level={2} title={faqIntro.title} />
        )}
        {faqIntro && faqIntro.description && (
          <p className='c-faqs__intro'>{faqIntro.description}</p>
        )}
        <div className='c-faqs__accordion'>{children}</div>
        {faqCta && faqCta.link && faqCta.label && (
          <CTALink
            label={faqCta.label}
            link={faqCta.link}
            isPrimary={faqCta.isPrimaryCta as boolean}
          />
        )}
      </div>
    </section>
  );
};

export default FAQs;
