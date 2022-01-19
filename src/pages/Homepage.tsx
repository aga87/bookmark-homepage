import React from 'react';
import MainHero from '../components/MainHero/MainHero';
import Features from '../components/Features/Features';
import FeatureTabs from '../components/Features/FeatureTabs';
import FeatureTabPanels from '../components/Features/FeatureTabPanels';
import Download from '../components/Download/Download';
import InstallationCards from '../components/Download/InstallationCards';
import FAQs from '../components/FAQs/FAQs';
import FAQAccordion from '../components/FAQs/FAQAccordion';

const Homepage = (): JSX.Element => (
  <div>
    <MainHero />
    <Features>
      <FeatureTabs />
      <FeatureTabPanels />
    </Features>
    <Download>
      <InstallationCards />
    </Download>
    <FAQs>
      <FAQAccordion />
    </FAQs>
  </div>
);

export default Homepage;
