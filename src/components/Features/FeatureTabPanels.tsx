import React from 'react';
import { useGetFeatureTabPanelsQuery } from '../../contentful';
import CTALink from '../nano/CTALink';

const FeatureTabPanels = (): JSX.Element | null => {
  const { loading, error, data } = useGetFeatureTabPanelsQuery();

  if (loading || error) return null;
  if (!data?.page?.featureTabsCollection?.items) return null;

  const { items } = data.page.featureTabsCollection;

  const tabPanels = items.map(item => {
    if (!item?.tabContent) return null;
    const { id } = item.tabContent.sys;
    const { image, title, description, ctAsCollection } = item.tabContent;

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
        {/* FIXME: desktop image for tab2 and tab2 does not match design (it's cropped). 
        Local svg can be used as a backup plan. 
        Mobile preview of tab2 and tab3 is unavailable. */}
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

  return <div>{tabPanels}</div>;
};

export default FeatureTabPanels;
