import React from 'react';
import MainHero from '../components/MainHero/MainHero';
import Features from '../components/Features/Features';
import FeatureTabs from '../components/Features/FeatureTabs';
import FeatureTabPanels from '../components/Features/FeatureTabPanels';

const Homepage = (): JSX.Element => (
  <div>
    <MainHero />
    <Features>
      <FeatureTabs />
      <FeatureTabPanels />
    </Features>
  </div>
);

export default Homepage;
