import React from 'react';
import MainHero from '../components/MainHero/MainHero';
import Features from '../components/Features/Features';
import FeatureTabs from '../components/Features/FeatureTabs';
import Download from '../components/Download/Download';
import InstallationCards from '../components/Download/InstallationCards';
import FAQs from '../components/FAQs/FAQs';
import FAQAccordion from '../components/FAQs/FAQAccordion';
import Newsletter from '../components/Newsletter/Newsletter';

const Homepage = (): JSX.Element => (
  <div>
    <div className='l-wrapper'>
      <MainHero />
      <Features>
        <FeatureTabs />
      </Features>
      <Download>
        <InstallationCards />
      </Download>
      <FAQs>
        <FAQAccordion />
      </FAQs>
    </div>
    <Newsletter />
  </div>
);

export default Homepage;
