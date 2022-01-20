import React from 'react';
import { useGetFeatureTabPanelsQuery } from '../../contentful';
import CTALink from '../nano/CTALink';

type FeatureTabPanelsProps = {
  selectedTab: number;
};

const FeatureTabPanels = ({
  selectedTab
}: FeatureTabPanelsProps): JSX.Element | null => {
  const { loading, error, data } = useGetFeatureTabPanelsQuery();

  const tabPanels = data?.page?.featureTabsCollection?.items.map((item, i) => {
    if (!item?.tabContent) return null;
    const { id } = item.tabContent.sys;
    const { image, title, description, ctAsCollection } = item.tabContent;
    // Render only selected tab
    if (selectedTab !== i) return null;

    const tabCTAs = ctAsCollection?.items?.map(tabItem => {
      if (!tabItem || !tabItem.label || !tabItem.link) return null;
      return (
        <li key={tabItem.sys?.id}>
          <CTALink
            label={tabItem.label}
            link={tabItem.link}
            isPrimary={tabItem.isPrimaryCta as boolean}
          />
        </li>
      );
    });

    return (
      <div role='tabpanel' id={id} key={id}>
        {image && image.url && (
          <img
            src={image.url}
            alt={image.description || ''}
            width={image.width || ''}
            height={image.height || ''}
          />
        )}
        {title && <h3>{title}</h3>}
        {description && <p>{description}</p>}
        {tabCTAs && <ul>{tabCTAs}</ul>}
      </div>
    );
  });

  if (loading || error || !tabPanels) return null;
  return <div>{tabPanels}</div>;
};

export default FeatureTabPanels;
