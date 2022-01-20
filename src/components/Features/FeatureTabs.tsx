import React, { useState } from 'react';
import { useGetFeatureTabsQuery } from '../../contentful';
import useRovingFocus from '../../hooks/useRovingFocus';
import Tab from '../nano/Tab';
import FeatureTabPanels from './FeatureTabPanels';

const FeatureTabs = (): JSX.Element | null => {
  const { loading, error, data } = useGetFeatureTabsQuery();
  // Tabs with roving focus and manual activation
  const [selectedTab, selectTab] = useState(0);
  const { widgetItemsRefs, handleKeyDown } = useRovingFocus(
    data?.page?.featureTabsCollection?.items.length || 0,
    true
  );

  const handleTabClick = (number: number) => {
    selectTab(number);
  };

  const tabs = data?.page?.featureTabsCollection?.items.map((item, i) => {
    if (!item?.tabContent || !item?.tabTitle) return null;
    return (
      <li key={item.tabContent.sys.id}>
        <Tab
          ref={ref => {
            widgetItemsRefs.current[i] = ref;
          }}
          title={item.tabTitle}
          selected={i === selectedTab}
          handleClick={() => handleTabClick(i)}
          handleKeyDown={handleKeyDown}
          tabPanelId={item.tabContent.sys.id}
        />
      </li>
    );
  });

  if (loading || error || !tabs) return null;
  return (
    <div>
      <ul role='tablist'>{tabs}</ul>
      <FeatureTabPanels selectedTab={selectedTab} />
    </div>
  );
};

export default FeatureTabs;
