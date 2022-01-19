import React from 'react';
import { useGetFeatureTabsQuery } from '../../contentful';
import Tab from '../nano/Tab';

const FeatureTabs = (): JSX.Element | null => {
  const { loading, error, data } = useGetFeatureTabsQuery();

  if (loading || error) return null;
  if (!data?.page?.featureTabsCollection?.items) return null;

  const { items } = data.page.featureTabsCollection;

  const handleTabClick = () => {
    console.log('todo');
  };

  const handleTabKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    console.log('todo', e.target);
  };

  const tabs = items.map(item => {
    if (!item?.tabContent || !item?.tabTitle) return null;
    return (
      <li key={item.tabContent.sys.id}>
        <Tab
          title={item.tabTitle}
          selected={false}
          handleClick={handleTabClick}
          handleKeyDown={handleTabKeyDown}
          tabPanelId={item.tabContent.sys.id}
        />
      </li>
    );
  });

  return <ul role='tablist'>{tabs}</ul>;
};

export default FeatureTabs;
