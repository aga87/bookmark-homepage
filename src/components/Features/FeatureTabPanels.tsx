import React from 'react';
import { useGetFeatureTabPanelsQuery } from '../../contentful';
import Heading from '../nano/Heading';
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
      <div
        className='l-feature-tabpanels__tabpanel'
        role='tabpanel'
        id={id}
        key={id}
      >
        {image && image.url && (
          <div
            className={`l-feature-tabpanels__tabpanel-img l-feature-tabpanels__tabpanel-img--${
              i + 1
            }`}
          >
            <img
              src={image.url}
              alt={image.description || ''}
              width={image.width || ''}
              height={image.height || ''}
            />
          </div>
        )}
        <div className='l-feature-tabpanels__tabpanel-content'>
          {title && (
            <div className='l-feature-tabpanels__tabpanel-title'>
              <Heading level={2} title={title} />
            </div>
          )}
          {description && (
            <p className='l-feature-tabpanels__tabpanel-desc'>{description}</p>
          )}
          {tabCTAs && (
            <ul className='l-feature-tabpanels__tabpanel-ctas'>{tabCTAs}</ul>
          )}
        </div>
      </div>
    );
  });

  if (loading || error || !tabPanels) return null;
  return (
    <div className='c-feature-tabpanels l-feature-tabpanels'>{tabPanels}</div>
  );
};

export default FeatureTabPanels;
