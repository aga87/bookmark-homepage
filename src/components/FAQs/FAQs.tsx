import React from 'react';
import { useGetFaqsQuery } from '../../contentful';
import Heading from '../nano/Heading';
import CTALink from '../nano/CTALink';

const FAQs: React.FC = ({ children }): JSX.Element | null => {
  const { loading, error, data } = useGetFaqsQuery();

  if (loading || error || !data?.page) return null;
  const { faqIntro, faqCta } = data.page;

  return (
    <section>
      {faqIntro && faqIntro.title && (
        <Heading level={2} title={faqIntro.title} />
      )}
      {faqIntro && faqIntro.description && <p>{faqIntro.description}</p>}
      {children}
      {faqCta && faqCta.link && faqCta.label && (
        <CTALink
          label={faqCta.label}
          link={faqCta.link}
          isPrimary={faqCta.isPrimaryCta as boolean}
        />
      )}
    </section>
  );
};

export default FAQs;
