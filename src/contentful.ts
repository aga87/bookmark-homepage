import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /**
   * A date-time string at UTC, such as 2007-12-03T10:15:30Z,
   *     compliant with the 'date-time' format outlined in section 5.6 of
   *     the RFC 3339 profile of the ISO 8601 standard for representation
   *     of dates and times using the Gregorian calendar.
   */
  DateTime: any;
  /** The 'Dimension' type represents dimensions as whole numeric values between `1` and `4000`. */
  Dimension: any;
  /** The 'HexColor' type represents color in `rgb:ffffff` string format. */
  HexColor: any;
  /** The 'Quality' type represents quality as whole numeric values between `1` and `100`. */
  Quality: any;
};

/** Represents a binary file in a space. An asset can be any file type. */
export type Asset = {
  __typename?: 'Asset';
  contentType?: Maybe<Scalars['String']>;
  contentfulMetadata: ContentfulMetadata;
  description?: Maybe<Scalars['String']>;
  fileName?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Int']>;
  linkedFrom?: Maybe<AssetLinkingCollections>;
  size?: Maybe<Scalars['Int']>;
  sys: Sys;
  title?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetContentTypeArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetFileNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetHeightArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetSizeArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetUrlArgs = {
  locale?: InputMaybe<Scalars['String']>;
  transform?: InputMaybe<ImageTransformOptions>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetWidthArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type AssetCollection = {
  __typename?: 'AssetCollection';
  items: Array<Maybe<Asset>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type AssetFilter = {
  AND?: InputMaybe<Array<InputMaybe<AssetFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<AssetFilter>>>;
  contentType?: InputMaybe<Scalars['String']>;
  contentType_contains?: InputMaybe<Scalars['String']>;
  contentType_exists?: InputMaybe<Scalars['Boolean']>;
  contentType_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contentType_not?: InputMaybe<Scalars['String']>;
  contentType_not_contains?: InputMaybe<Scalars['String']>;
  contentType_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description?: InputMaybe<Scalars['String']>;
  description_contains?: InputMaybe<Scalars['String']>;
  description_exists?: InputMaybe<Scalars['Boolean']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  description_not?: InputMaybe<Scalars['String']>;
  description_not_contains?: InputMaybe<Scalars['String']>;
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fileName?: InputMaybe<Scalars['String']>;
  fileName_contains?: InputMaybe<Scalars['String']>;
  fileName_exists?: InputMaybe<Scalars['Boolean']>;
  fileName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fileName_not?: InputMaybe<Scalars['String']>;
  fileName_not_contains?: InputMaybe<Scalars['String']>;
  fileName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  height?: InputMaybe<Scalars['Int']>;
  height_exists?: InputMaybe<Scalars['Boolean']>;
  height_gt?: InputMaybe<Scalars['Int']>;
  height_gte?: InputMaybe<Scalars['Int']>;
  height_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  height_lt?: InputMaybe<Scalars['Int']>;
  height_lte?: InputMaybe<Scalars['Int']>;
  height_not?: InputMaybe<Scalars['Int']>;
  height_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  size?: InputMaybe<Scalars['Int']>;
  size_exists?: InputMaybe<Scalars['Boolean']>;
  size_gt?: InputMaybe<Scalars['Int']>;
  size_gte?: InputMaybe<Scalars['Int']>;
  size_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  size_lt?: InputMaybe<Scalars['Int']>;
  size_lte?: InputMaybe<Scalars['Int']>;
  size_not?: InputMaybe<Scalars['Int']>;
  size_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  url?: InputMaybe<Scalars['String']>;
  url_contains?: InputMaybe<Scalars['String']>;
  url_exists?: InputMaybe<Scalars['Boolean']>;
  url_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  url_not?: InputMaybe<Scalars['String']>;
  url_not_contains?: InputMaybe<Scalars['String']>;
  url_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  width?: InputMaybe<Scalars['Int']>;
  width_exists?: InputMaybe<Scalars['Boolean']>;
  width_gt?: InputMaybe<Scalars['Int']>;
  width_gte?: InputMaybe<Scalars['Int']>;
  width_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  width_lt?: InputMaybe<Scalars['Int']>;
  width_lte?: InputMaybe<Scalars['Int']>;
  width_not?: InputMaybe<Scalars['Int']>;
  width_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};

export type AssetLinkingCollections = {
  __typename?: 'AssetLinkingCollections';
  cardCollection?: Maybe<CardCollection>;
  entryCollection?: Maybe<EntryCollection>;
  heroCollection?: Maybe<HeroCollection>;
  settingsCollection?: Maybe<SettingsCollection>;
};


export type AssetLinkingCollectionsCardCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type AssetLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type AssetLinkingCollectionsHeroCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type AssetLinkingCollectionsSettingsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum AssetOrder {
  ContentTypeAsc = 'contentType_ASC',
  ContentTypeDesc = 'contentType_DESC',
  FileNameAsc = 'fileName_ASC',
  FileNameDesc = 'fileName_DESC',
  HeightAsc = 'height_ASC',
  HeightDesc = 'height_DESC',
  SizeAsc = 'size_ASC',
  SizeDesc = 'size_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  UrlAsc = 'url_ASC',
  UrlDesc = 'url_DESC',
  WidthAsc = 'width_ASC',
  WidthDesc = 'width_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/84wwkpwxe46m/content_types/card) */
export type Card = Entry & {
  __typename?: 'Card';
  contentfulMetadata: ContentfulMetadata;
  installLink?: Maybe<Cta>;
  linkedFrom?: Maybe<CardLinkingCollections>;
  logo?: Maybe<Asset>;
  sys: Sys;
  title?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/84wwkpwxe46m/content_types/card) */
export type CardInstallLinkArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


/** [See type definition](https://app.contentful.com/spaces/84wwkpwxe46m/content_types/card) */
export type CardLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/84wwkpwxe46m/content_types/card) */
export type CardLogoArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


/** [See type definition](https://app.contentful.com/spaces/84wwkpwxe46m/content_types/card) */
export type CardTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/84wwkpwxe46m/content_types/card) */
export type CardVersionArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type CardCollection = {
  __typename?: 'CardCollection';
  items: Array<Maybe<Card>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type CardFilter = {
  AND?: InputMaybe<Array<InputMaybe<CardFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CardFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  installLink?: InputMaybe<CfCtaNestedFilter>;
  installLink_exists?: InputMaybe<Scalars['Boolean']>;
  logo_exists?: InputMaybe<Scalars['Boolean']>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  version?: InputMaybe<Scalars['String']>;
  version_contains?: InputMaybe<Scalars['String']>;
  version_exists?: InputMaybe<Scalars['Boolean']>;
  version_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  version_not?: InputMaybe<Scalars['String']>;
  version_not_contains?: InputMaybe<Scalars['String']>;
  version_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type CardLinkingCollections = {
  __typename?: 'CardLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  pageCollection?: Maybe<PageCollection>;
};


export type CardLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type CardLinkingCollectionsPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum CardOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  VersionAsc = 'version_ASC',
  VersionDesc = 'version_DESC'
}

export type ContentfulMetadata = {
  __typename?: 'ContentfulMetadata';
  tags: Array<Maybe<ContentfulTag>>;
};

export type ContentfulMetadataFilter = {
  tags?: InputMaybe<ContentfulMetadataTagsFilter>;
  tags_exists?: InputMaybe<Scalars['Boolean']>;
};

export type ContentfulMetadataTagsFilter = {
  id_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  id_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  id_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

/**
 * Represents a tag entity for finding and organizing content easily.
 *     Find out more here: https://www.contentful.com/developers/docs/references/content-delivery-api/#/reference/content-tags
 */
export type ContentfulTag = {
  __typename?: 'ContentfulTag';
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

/** A call to action item to be used on the page [See type definition](https://app.contentful.com/spaces/84wwkpwxe46m/content_types/cta) */
export type Cta = Entry & {
  __typename?: 'Cta';
  contentfulMetadata: ContentfulMetadata;
  isPrimaryCta?: Maybe<Scalars['Boolean']>;
  label?: Maybe<Scalars['String']>;
  link?: Maybe<Scalars['String']>;
  linkedFrom?: Maybe<CtaLinkingCollections>;
  sys: Sys;
};


/** A call to action item to be used on the page [See type definition](https://app.contentful.com/spaces/84wwkpwxe46m/content_types/cta) */
export type CtaIsPrimaryCtaArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** A call to action item to be used on the page [See type definition](https://app.contentful.com/spaces/84wwkpwxe46m/content_types/cta) */
export type CtaLabelArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** A call to action item to be used on the page [See type definition](https://app.contentful.com/spaces/84wwkpwxe46m/content_types/cta) */
export type CtaLinkArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** A call to action item to be used on the page [See type definition](https://app.contentful.com/spaces/84wwkpwxe46m/content_types/cta) */
export type CtaLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type CtaCollection = {
  __typename?: 'CtaCollection';
  items: Array<Maybe<Cta>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type CtaFilter = {
  AND?: InputMaybe<Array<InputMaybe<CtaFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CtaFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  isPrimaryCta?: InputMaybe<Scalars['Boolean']>;
  isPrimaryCta_exists?: InputMaybe<Scalars['Boolean']>;
  isPrimaryCta_not?: InputMaybe<Scalars['Boolean']>;
  label?: InputMaybe<Scalars['String']>;
  label_contains?: InputMaybe<Scalars['String']>;
  label_exists?: InputMaybe<Scalars['Boolean']>;
  label_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  label_not?: InputMaybe<Scalars['String']>;
  label_not_contains?: InputMaybe<Scalars['String']>;
  label_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  link?: InputMaybe<Scalars['String']>;
  link_contains?: InputMaybe<Scalars['String']>;
  link_exists?: InputMaybe<Scalars['Boolean']>;
  link_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  link_not?: InputMaybe<Scalars['String']>;
  link_not_contains?: InputMaybe<Scalars['String']>;
  link_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type CtaLinkingCollections = {
  __typename?: 'CtaLinkingCollections';
  cardCollection?: Maybe<CardCollection>;
  entryCollection?: Maybe<EntryCollection>;
  heroCollection?: Maybe<HeroCollection>;
  pageCollection?: Maybe<PageCollection>;
  settingsCollection?: Maybe<SettingsCollection>;
};


export type CtaLinkingCollectionsCardCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type CtaLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type CtaLinkingCollectionsHeroCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type CtaLinkingCollectionsPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type CtaLinkingCollectionsSettingsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum CtaOrder {
  IsPrimaryCtaAsc = 'isPrimaryCta_ASC',
  IsPrimaryCtaDesc = 'isPrimaryCta_DESC',
  LabelAsc = 'label_ASC',
  LabelDesc = 'label_DESC',
  LinkAsc = 'link_ASC',
  LinkDesc = 'link_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type Entry = {
  contentfulMetadata: ContentfulMetadata;
  sys: Sys;
};

export type EntryCollection = {
  __typename?: 'EntryCollection';
  items: Array<Maybe<Entry>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type EntryFilter = {
  AND?: InputMaybe<Array<InputMaybe<EntryFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<EntryFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  sys?: InputMaybe<SysFilter>;
};

export enum EntryOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/84wwkpwxe46m/content_types/faq) */
export type Faq = Entry & {
  __typename?: 'Faq';
  answer?: Maybe<Scalars['String']>;
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<FaqLinkingCollections>;
  question?: Maybe<Scalars['String']>;
  sys: Sys;
};


/** [See type definition](https://app.contentful.com/spaces/84wwkpwxe46m/content_types/faq) */
export type FaqAnswerArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/84wwkpwxe46m/content_types/faq) */
export type FaqLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/84wwkpwxe46m/content_types/faq) */
export type FaqQuestionArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type FaqCollection = {
  __typename?: 'FaqCollection';
  items: Array<Maybe<Faq>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type FaqFilter = {
  AND?: InputMaybe<Array<InputMaybe<FaqFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<FaqFilter>>>;
  answer?: InputMaybe<Scalars['String']>;
  answer_contains?: InputMaybe<Scalars['String']>;
  answer_exists?: InputMaybe<Scalars['Boolean']>;
  answer_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  answer_not?: InputMaybe<Scalars['String']>;
  answer_not_contains?: InputMaybe<Scalars['String']>;
  answer_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  question?: InputMaybe<Scalars['String']>;
  question_contains?: InputMaybe<Scalars['String']>;
  question_exists?: InputMaybe<Scalars['Boolean']>;
  question_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  question_not?: InputMaybe<Scalars['String']>;
  question_not_contains?: InputMaybe<Scalars['String']>;
  question_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type FaqLinkingCollections = {
  __typename?: 'FaqLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  pageCollection?: Maybe<PageCollection>;
};


export type FaqLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type FaqLinkingCollectionsPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum FaqOrder {
  QuestionAsc = 'question_ASC',
  QuestionDesc = 'question_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** Hero showing a title, description, CTAs and supporting image [See type definition](https://app.contentful.com/spaces/84wwkpwxe46m/content_types/hero) */
export type Hero = Entry & {
  __typename?: 'Hero';
  contentfulMetadata: ContentfulMetadata;
  ctAsCollection?: Maybe<HeroCtAsCollection>;
  description?: Maybe<Scalars['String']>;
  image?: Maybe<Asset>;
  imageAlignment?: Maybe<Scalars['String']>;
  linkedFrom?: Maybe<HeroLinkingCollections>;
  name?: Maybe<Scalars['String']>;
  sys: Sys;
  title?: Maybe<Scalars['String']>;
};


/** Hero showing a title, description, CTAs and supporting image [See type definition](https://app.contentful.com/spaces/84wwkpwxe46m/content_types/hero) */
export type HeroCtAsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


/** Hero showing a title, description, CTAs and supporting image [See type definition](https://app.contentful.com/spaces/84wwkpwxe46m/content_types/hero) */
export type HeroDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Hero showing a title, description, CTAs and supporting image [See type definition](https://app.contentful.com/spaces/84wwkpwxe46m/content_types/hero) */
export type HeroImageArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


/** Hero showing a title, description, CTAs and supporting image [See type definition](https://app.contentful.com/spaces/84wwkpwxe46m/content_types/hero) */
export type HeroImageAlignmentArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Hero showing a title, description, CTAs and supporting image [See type definition](https://app.contentful.com/spaces/84wwkpwxe46m/content_types/hero) */
export type HeroLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Hero showing a title, description, CTAs and supporting image [See type definition](https://app.contentful.com/spaces/84wwkpwxe46m/content_types/hero) */
export type HeroNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Hero showing a title, description, CTAs and supporting image [See type definition](https://app.contentful.com/spaces/84wwkpwxe46m/content_types/hero) */
export type HeroTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type HeroCollection = {
  __typename?: 'HeroCollection';
  items: Array<Maybe<Hero>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type HeroCtAsCollection = {
  __typename?: 'HeroCtAsCollection';
  items: Array<Maybe<Cta>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type HeroFilter = {
  AND?: InputMaybe<Array<InputMaybe<HeroFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<HeroFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  ctAsCollection_exists?: InputMaybe<Scalars['Boolean']>;
  description?: InputMaybe<Scalars['String']>;
  description_contains?: InputMaybe<Scalars['String']>;
  description_exists?: InputMaybe<Scalars['Boolean']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  description_not?: InputMaybe<Scalars['String']>;
  description_not_contains?: InputMaybe<Scalars['String']>;
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  imageAlignment?: InputMaybe<Scalars['String']>;
  imageAlignment_contains?: InputMaybe<Scalars['String']>;
  imageAlignment_exists?: InputMaybe<Scalars['Boolean']>;
  imageAlignment_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  imageAlignment_not?: InputMaybe<Scalars['String']>;
  imageAlignment_not_contains?: InputMaybe<Scalars['String']>;
  imageAlignment_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  image_exists?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_exists?: InputMaybe<Scalars['Boolean']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name_not?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type HeroLinkingCollections = {
  __typename?: 'HeroLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  pageCollection?: Maybe<PageCollection>;
  tabCollection?: Maybe<TabCollection>;
};


export type HeroLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type HeroLinkingCollectionsPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type HeroLinkingCollectionsTabCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum HeroOrder {
  ImageAlignmentAsc = 'imageAlignment_ASC',
  ImageAlignmentDesc = 'imageAlignment_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export enum ImageFormat {
  Avif = 'AVIF',
  /** JPG image format. */
  Jpg = 'JPG',
  /**
   * Progressive JPG format stores multiple passes of an image in progressively higher detail.
   *         When a progressive image is loading, the viewer will first see a lower quality pixelated version which
   *         will gradually improve in detail, until the image is fully downloaded. This is to display an image as
   *         early as possible to make the layout look as designed.
   */
  JpgProgressive = 'JPG_PROGRESSIVE',
  /** PNG image format */
  Png = 'PNG',
  /**
   * 8-bit PNG images support up to 256 colors and weigh less than the standard 24-bit PNG equivalent.
   *         The 8-bit PNG format is mostly used for simple images, such as icons or logos.
   */
  Png8 = 'PNG8',
  /** WebP image format. */
  Webp = 'WEBP'
}

export enum ImageResizeFocus {
  /** Focus the resizing on the bottom. */
  Bottom = 'BOTTOM',
  /** Focus the resizing on the bottom left. */
  BottomLeft = 'BOTTOM_LEFT',
  /** Focus the resizing on the bottom right. */
  BottomRight = 'BOTTOM_RIGHT',
  /** Focus the resizing on the center. */
  Center = 'CENTER',
  /** Focus the resizing on the largest face. */
  Face = 'FACE',
  /** Focus the resizing on the area containing all the faces. */
  Faces = 'FACES',
  /** Focus the resizing on the left. */
  Left = 'LEFT',
  /** Focus the resizing on the right. */
  Right = 'RIGHT',
  /** Focus the resizing on the top. */
  Top = 'TOP',
  /** Focus the resizing on the top left. */
  TopLeft = 'TOP_LEFT',
  /** Focus the resizing on the top right. */
  TopRight = 'TOP_RIGHT'
}

export enum ImageResizeStrategy {
  /** Crops a part of the original image to fit into the specified dimensions. */
  Crop = 'CROP',
  /** Resizes the image to the specified dimensions, cropping the image if needed. */
  Fill = 'FILL',
  /** Resizes the image to fit into the specified dimensions. */
  Fit = 'FIT',
  /**
   * Resizes the image to the specified dimensions, padding the image if needed.
   *         Uses desired background color as padding color.
   */
  Pad = 'PAD',
  /** Resizes the image to the specified dimensions, changing the original aspect ratio if needed. */
  Scale = 'SCALE',
  /** Creates a thumbnail from the image. */
  Thumb = 'THUMB'
}

export type ImageTransformOptions = {
  /**
   * Desired background color, used with corner radius or `PAD` resize strategy.
   *         Defaults to transparent (for `PNG`, `PNG8` and `WEBP`) or white (for `JPG` and `JPG_PROGRESSIVE`).
   */
  backgroundColor?: InputMaybe<Scalars['HexColor']>;
  /**
   * Desired corner radius in pixels.
   *         Results in an image with rounded corners (pass `-1` for a full circle/ellipse).
   *         Defaults to `0`. Uses desired background color as padding color,
   *         unless the format is `JPG` or `JPG_PROGRESSIVE` and resize strategy is `PAD`, then defaults to white.
   */
  cornerRadius?: InputMaybe<Scalars['Int']>;
  /** Desired image format. Defaults to the original image format. */
  format?: InputMaybe<ImageFormat>;
  /** Desired height in pixels. Defaults to the original image height. */
  height?: InputMaybe<Scalars['Dimension']>;
  /**
   * Desired quality of the image in percents.
   *         Used for `PNG8`, `JPG`, `JPG_PROGRESSIVE` and `WEBP` formats.
   */
  quality?: InputMaybe<Scalars['Quality']>;
  /** Desired resize focus area. Defaults to `CENTER`. */
  resizeFocus?: InputMaybe<ImageResizeFocus>;
  /** Desired resize strategy. Defaults to `FIT`. */
  resizeStrategy?: InputMaybe<ImageResizeStrategy>;
  /** Desired width in pixels. Defaults to the original image width. */
  width?: InputMaybe<Scalars['Dimension']>;
};

/** [See type definition](https://app.contentful.com/spaces/84wwkpwxe46m/content_types/newsletter) */
export type Newsletter = Entry & {
  __typename?: 'Newsletter';
  contentfulMetadata: ContentfulMetadata;
  ctaText?: Maybe<Scalars['String']>;
  inputPlaceholder?: Maybe<Scalars['String']>;
  linkedFrom?: Maybe<NewsletterLinkingCollections>;
  sys: Sys;
  tagline?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/84wwkpwxe46m/content_types/newsletter) */
export type NewsletterCtaTextArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/84wwkpwxe46m/content_types/newsletter) */
export type NewsletterInputPlaceholderArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/84wwkpwxe46m/content_types/newsletter) */
export type NewsletterLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/84wwkpwxe46m/content_types/newsletter) */
export type NewsletterTaglineArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/84wwkpwxe46m/content_types/newsletter) */
export type NewsletterTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type NewsletterCollection = {
  __typename?: 'NewsletterCollection';
  items: Array<Maybe<Newsletter>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type NewsletterFilter = {
  AND?: InputMaybe<Array<InputMaybe<NewsletterFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<NewsletterFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  ctaText?: InputMaybe<Scalars['String']>;
  ctaText_contains?: InputMaybe<Scalars['String']>;
  ctaText_exists?: InputMaybe<Scalars['Boolean']>;
  ctaText_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  ctaText_not?: InputMaybe<Scalars['String']>;
  ctaText_not_contains?: InputMaybe<Scalars['String']>;
  ctaText_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  inputPlaceholder?: InputMaybe<Scalars['String']>;
  inputPlaceholder_contains?: InputMaybe<Scalars['String']>;
  inputPlaceholder_exists?: InputMaybe<Scalars['Boolean']>;
  inputPlaceholder_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  inputPlaceholder_not?: InputMaybe<Scalars['String']>;
  inputPlaceholder_not_contains?: InputMaybe<Scalars['String']>;
  inputPlaceholder_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
  tagline?: InputMaybe<Scalars['String']>;
  tagline_contains?: InputMaybe<Scalars['String']>;
  tagline_exists?: InputMaybe<Scalars['Boolean']>;
  tagline_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  tagline_not?: InputMaybe<Scalars['String']>;
  tagline_not_contains?: InputMaybe<Scalars['String']>;
  tagline_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type NewsletterLinkingCollections = {
  __typename?: 'NewsletterLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  pageCollection?: Maybe<PageCollection>;
};


export type NewsletterLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type NewsletterLinkingCollectionsPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum NewsletterOrder {
  CtaTextAsc = 'ctaText_ASC',
  CtaTextDesc = 'ctaText_DESC',
  InputPlaceholderAsc = 'inputPlaceholder_ASC',
  InputPlaceholderDesc = 'inputPlaceholder_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TaglineAsc = 'tagline_ASC',
  TaglineDesc = 'tagline_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

/** A page for the website [See type definition](https://app.contentful.com/spaces/84wwkpwxe46m/content_types/page) */
export type Page = Entry & {
  __typename?: 'Page';
  contentfulMetadata: ContentfulMetadata;
  downloadIntro?: Maybe<TextBlock>;
  faqCta?: Maybe<Cta>;
  faqIntro?: Maybe<TextBlock>;
  featureTabsCollection?: Maybe<PageFeatureTabsCollection>;
  featuresIntro?: Maybe<TextBlock>;
  frequentlyAskedQuestionsCollection?: Maybe<PageFrequentlyAskedQuestionsCollection>;
  installationCardsCollection?: Maybe<PageInstallationCardsCollection>;
  linkedFrom?: Maybe<PageLinkingCollections>;
  mainHero?: Maybe<Hero>;
  name?: Maybe<Scalars['String']>;
  newsletter?: Maybe<Newsletter>;
  sys: Sys;
};


/** A page for the website [See type definition](https://app.contentful.com/spaces/84wwkpwxe46m/content_types/page) */
export type PageDownloadIntroArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


/** A page for the website [See type definition](https://app.contentful.com/spaces/84wwkpwxe46m/content_types/page) */
export type PageFaqCtaArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


/** A page for the website [See type definition](https://app.contentful.com/spaces/84wwkpwxe46m/content_types/page) */
export type PageFaqIntroArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


/** A page for the website [See type definition](https://app.contentful.com/spaces/84wwkpwxe46m/content_types/page) */
export type PageFeatureTabsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


/** A page for the website [See type definition](https://app.contentful.com/spaces/84wwkpwxe46m/content_types/page) */
export type PageFeaturesIntroArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


/** A page for the website [See type definition](https://app.contentful.com/spaces/84wwkpwxe46m/content_types/page) */
export type PageFrequentlyAskedQuestionsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


/** A page for the website [See type definition](https://app.contentful.com/spaces/84wwkpwxe46m/content_types/page) */
export type PageInstallationCardsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


/** A page for the website [See type definition](https://app.contentful.com/spaces/84wwkpwxe46m/content_types/page) */
export type PageLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** A page for the website [See type definition](https://app.contentful.com/spaces/84wwkpwxe46m/content_types/page) */
export type PageMainHeroArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


/** A page for the website [See type definition](https://app.contentful.com/spaces/84wwkpwxe46m/content_types/page) */
export type PageNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** A page for the website [See type definition](https://app.contentful.com/spaces/84wwkpwxe46m/content_types/page) */
export type PageNewsletterArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};

export type PageCollection = {
  __typename?: 'PageCollection';
  items: Array<Maybe<Page>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type PageFeatureTabsCollection = {
  __typename?: 'PageFeatureTabsCollection';
  items: Array<Maybe<Tab>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type PageFilter = {
  AND?: InputMaybe<Array<InputMaybe<PageFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<PageFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  downloadIntro?: InputMaybe<CfTextBlockNestedFilter>;
  downloadIntro_exists?: InputMaybe<Scalars['Boolean']>;
  faqCta?: InputMaybe<CfCtaNestedFilter>;
  faqCta_exists?: InputMaybe<Scalars['Boolean']>;
  faqIntro?: InputMaybe<CfTextBlockNestedFilter>;
  faqIntro_exists?: InputMaybe<Scalars['Boolean']>;
  featureTabsCollection_exists?: InputMaybe<Scalars['Boolean']>;
  featuresIntro?: InputMaybe<CfTextBlockNestedFilter>;
  featuresIntro_exists?: InputMaybe<Scalars['Boolean']>;
  frequentlyAskedQuestionsCollection_exists?: InputMaybe<Scalars['Boolean']>;
  installationCardsCollection_exists?: InputMaybe<Scalars['Boolean']>;
  mainHero?: InputMaybe<CfHeroNestedFilter>;
  mainHero_exists?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_exists?: InputMaybe<Scalars['Boolean']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name_not?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  newsletter?: InputMaybe<CfNewsletterNestedFilter>;
  newsletter_exists?: InputMaybe<Scalars['Boolean']>;
  sys?: InputMaybe<SysFilter>;
};

export type PageFrequentlyAskedQuestionsCollection = {
  __typename?: 'PageFrequentlyAskedQuestionsCollection';
  items: Array<Maybe<Faq>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type PageInstallationCardsCollection = {
  __typename?: 'PageInstallationCardsCollection';
  items: Array<Maybe<Card>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type PageLinkingCollections = {
  __typename?: 'PageLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type PageLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum PageOrder {
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type Query = {
  __typename?: 'Query';
  asset?: Maybe<Asset>;
  assetCollection?: Maybe<AssetCollection>;
  card?: Maybe<Card>;
  cardCollection?: Maybe<CardCollection>;
  cta?: Maybe<Cta>;
  ctaCollection?: Maybe<CtaCollection>;
  entryCollection?: Maybe<EntryCollection>;
  faq?: Maybe<Faq>;
  faqCollection?: Maybe<FaqCollection>;
  hero?: Maybe<Hero>;
  heroCollection?: Maybe<HeroCollection>;
  newsletter?: Maybe<Newsletter>;
  newsletterCollection?: Maybe<NewsletterCollection>;
  page?: Maybe<Page>;
  pageCollection?: Maybe<PageCollection>;
  settings?: Maybe<Settings>;
  settingsCollection?: Maybe<SettingsCollection>;
  tab?: Maybe<Tab>;
  tabCollection?: Maybe<TabCollection>;
  textBlock?: Maybe<TextBlock>;
  textBlockCollection?: Maybe<TextBlockCollection>;
};


export type QueryAssetArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryAssetCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<AssetOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AssetFilter>;
};


export type QueryCardArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryCardCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<CardOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CardFilter>;
};


export type QueryCtaArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryCtaCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<CtaOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CtaFilter>;
};


export type QueryEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<EntryOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<EntryFilter>;
};


export type QueryFaqArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryFaqCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<FaqOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<FaqFilter>;
};


export type QueryHeroArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryHeroCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<HeroOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<HeroFilter>;
};


export type QueryNewsletterArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryNewsletterCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<NewsletterOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<NewsletterFilter>;
};


export type QueryPageArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<PageOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PageFilter>;
};


export type QuerySettingsArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QuerySettingsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<SettingsOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SettingsFilter>;
};


export type QueryTabArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryTabCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<TabOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TabFilter>;
};


export type QueryTextBlockArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryTextBlockCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<TextBlockOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TextBlockFilter>;
};

/** [See type definition](https://app.contentful.com/spaces/84wwkpwxe46m/content_types/settings) */
export type Settings = Entry & {
  __typename?: 'Settings';
  contentfulMetadata: ContentfulMetadata;
  facebookLink?: Maybe<Scalars['String']>;
  footerLinksCollection?: Maybe<SettingsFooterLinksCollection>;
  linkedFrom?: Maybe<SettingsLinkingCollections>;
  logo?: Maybe<Asset>;
  navigationBarLinksCollection?: Maybe<SettingsNavigationBarLinksCollection>;
  sys: Sys;
  twitterLink?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/84wwkpwxe46m/content_types/settings) */
export type SettingsFacebookLinkArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/84wwkpwxe46m/content_types/settings) */
export type SettingsFooterLinksCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


/** [See type definition](https://app.contentful.com/spaces/84wwkpwxe46m/content_types/settings) */
export type SettingsLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/84wwkpwxe46m/content_types/settings) */
export type SettingsLogoArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


/** [See type definition](https://app.contentful.com/spaces/84wwkpwxe46m/content_types/settings) */
export type SettingsNavigationBarLinksCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


/** [See type definition](https://app.contentful.com/spaces/84wwkpwxe46m/content_types/settings) */
export type SettingsTwitterLinkArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type SettingsCollection = {
  __typename?: 'SettingsCollection';
  items: Array<Maybe<Settings>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type SettingsFilter = {
  AND?: InputMaybe<Array<InputMaybe<SettingsFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<SettingsFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  facebookLink?: InputMaybe<Scalars['String']>;
  facebookLink_contains?: InputMaybe<Scalars['String']>;
  facebookLink_exists?: InputMaybe<Scalars['Boolean']>;
  facebookLink_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  facebookLink_not?: InputMaybe<Scalars['String']>;
  facebookLink_not_contains?: InputMaybe<Scalars['String']>;
  facebookLink_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  footerLinksCollection_exists?: InputMaybe<Scalars['Boolean']>;
  logo_exists?: InputMaybe<Scalars['Boolean']>;
  navigationBarLinksCollection_exists?: InputMaybe<Scalars['Boolean']>;
  sys?: InputMaybe<SysFilter>;
  twitterLink?: InputMaybe<Scalars['String']>;
  twitterLink_contains?: InputMaybe<Scalars['String']>;
  twitterLink_exists?: InputMaybe<Scalars['Boolean']>;
  twitterLink_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  twitterLink_not?: InputMaybe<Scalars['String']>;
  twitterLink_not_contains?: InputMaybe<Scalars['String']>;
  twitterLink_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type SettingsFooterLinksCollection = {
  __typename?: 'SettingsFooterLinksCollection';
  items: Array<Maybe<Cta>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type SettingsLinkingCollections = {
  __typename?: 'SettingsLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type SettingsLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export type SettingsNavigationBarLinksCollection = {
  __typename?: 'SettingsNavigationBarLinksCollection';
  items: Array<Maybe<Cta>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export enum SettingsOrder {
  FacebookLinkAsc = 'facebookLink_ASC',
  FacebookLinkDesc = 'facebookLink_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TwitterLinkAsc = 'twitterLink_ASC',
  TwitterLinkDesc = 'twitterLink_DESC'
}

export type Sys = {
  __typename?: 'Sys';
  environmentId: Scalars['String'];
  firstPublishedAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['String'];
  publishedAt?: Maybe<Scalars['DateTime']>;
  publishedVersion?: Maybe<Scalars['Int']>;
  spaceId: Scalars['String'];
};

export type SysFilter = {
  firstPublishedAt?: InputMaybe<Scalars['DateTime']>;
  firstPublishedAt_exists?: InputMaybe<Scalars['Boolean']>;
  firstPublishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  firstPublishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  firstPublishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  firstPublishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  firstPublishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  firstPublishedAt_not?: InputMaybe<Scalars['DateTime']>;
  firstPublishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  id?: InputMaybe<Scalars['String']>;
  id_contains?: InputMaybe<Scalars['String']>;
  id_exists?: InputMaybe<Scalars['Boolean']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  id_not?: InputMaybe<Scalars['String']>;
  id_not_contains?: InputMaybe<Scalars['String']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  publishedAt_exists?: InputMaybe<Scalars['Boolean']>;
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedVersion?: InputMaybe<Scalars['Float']>;
  publishedVersion_exists?: InputMaybe<Scalars['Boolean']>;
  publishedVersion_gt?: InputMaybe<Scalars['Float']>;
  publishedVersion_gte?: InputMaybe<Scalars['Float']>;
  publishedVersion_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  publishedVersion_lt?: InputMaybe<Scalars['Float']>;
  publishedVersion_lte?: InputMaybe<Scalars['Float']>;
  publishedVersion_not?: InputMaybe<Scalars['Float']>;
  publishedVersion_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

/** [See type definition](https://app.contentful.com/spaces/84wwkpwxe46m/content_types/tab) */
export type Tab = Entry & {
  __typename?: 'Tab';
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<TabLinkingCollections>;
  sys: Sys;
  tabContent?: Maybe<Hero>;
  tabTitle?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/84wwkpwxe46m/content_types/tab) */
export type TabLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/84wwkpwxe46m/content_types/tab) */
export type TabTabContentArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


/** [See type definition](https://app.contentful.com/spaces/84wwkpwxe46m/content_types/tab) */
export type TabTabTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type TabCollection = {
  __typename?: 'TabCollection';
  items: Array<Maybe<Tab>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type TabFilter = {
  AND?: InputMaybe<Array<InputMaybe<TabFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<TabFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  sys?: InputMaybe<SysFilter>;
  tabContent?: InputMaybe<CfHeroNestedFilter>;
  tabContent_exists?: InputMaybe<Scalars['Boolean']>;
  tabTitle?: InputMaybe<Scalars['String']>;
  tabTitle_contains?: InputMaybe<Scalars['String']>;
  tabTitle_exists?: InputMaybe<Scalars['Boolean']>;
  tabTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  tabTitle_not?: InputMaybe<Scalars['String']>;
  tabTitle_not_contains?: InputMaybe<Scalars['String']>;
  tabTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type TabLinkingCollections = {
  __typename?: 'TabLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  pageCollection?: Maybe<PageCollection>;
};


export type TabLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type TabLinkingCollectionsPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum TabOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TabTitleAsc = 'tabTitle_ASC',
  TabTitleDesc = 'tabTitle_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/84wwkpwxe46m/content_types/textBlock) */
export type TextBlock = Entry & {
  __typename?: 'TextBlock';
  contentfulMetadata: ContentfulMetadata;
  description?: Maybe<Scalars['String']>;
  linkedFrom?: Maybe<TextBlockLinkingCollections>;
  sys: Sys;
  title?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/84wwkpwxe46m/content_types/textBlock) */
export type TextBlockDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/84wwkpwxe46m/content_types/textBlock) */
export type TextBlockLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/84wwkpwxe46m/content_types/textBlock) */
export type TextBlockTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type TextBlockCollection = {
  __typename?: 'TextBlockCollection';
  items: Array<Maybe<TextBlock>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type TextBlockFilter = {
  AND?: InputMaybe<Array<InputMaybe<TextBlockFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<TextBlockFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description?: InputMaybe<Scalars['String']>;
  description_contains?: InputMaybe<Scalars['String']>;
  description_exists?: InputMaybe<Scalars['Boolean']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  description_not?: InputMaybe<Scalars['String']>;
  description_not_contains?: InputMaybe<Scalars['String']>;
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type TextBlockLinkingCollections = {
  __typename?: 'TextBlockLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  pageCollection?: Maybe<PageCollection>;
};


export type TextBlockLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type TextBlockLinkingCollectionsPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum TextBlockOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export type CfCtaNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfCtaNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfCtaNestedFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  isPrimaryCta?: InputMaybe<Scalars['Boolean']>;
  isPrimaryCta_exists?: InputMaybe<Scalars['Boolean']>;
  isPrimaryCta_not?: InputMaybe<Scalars['Boolean']>;
  label?: InputMaybe<Scalars['String']>;
  label_contains?: InputMaybe<Scalars['String']>;
  label_exists?: InputMaybe<Scalars['Boolean']>;
  label_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  label_not?: InputMaybe<Scalars['String']>;
  label_not_contains?: InputMaybe<Scalars['String']>;
  label_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  link?: InputMaybe<Scalars['String']>;
  link_contains?: InputMaybe<Scalars['String']>;
  link_exists?: InputMaybe<Scalars['Boolean']>;
  link_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  link_not?: InputMaybe<Scalars['String']>;
  link_not_contains?: InputMaybe<Scalars['String']>;
  link_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type CfHeroNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfHeroNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfHeroNestedFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  ctAsCollection_exists?: InputMaybe<Scalars['Boolean']>;
  description?: InputMaybe<Scalars['String']>;
  description_contains?: InputMaybe<Scalars['String']>;
  description_exists?: InputMaybe<Scalars['Boolean']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  description_not?: InputMaybe<Scalars['String']>;
  description_not_contains?: InputMaybe<Scalars['String']>;
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  imageAlignment?: InputMaybe<Scalars['String']>;
  imageAlignment_contains?: InputMaybe<Scalars['String']>;
  imageAlignment_exists?: InputMaybe<Scalars['Boolean']>;
  imageAlignment_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  imageAlignment_not?: InputMaybe<Scalars['String']>;
  imageAlignment_not_contains?: InputMaybe<Scalars['String']>;
  imageAlignment_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  image_exists?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_exists?: InputMaybe<Scalars['Boolean']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name_not?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type CfNewsletterNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfNewsletterNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfNewsletterNestedFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  ctaText?: InputMaybe<Scalars['String']>;
  ctaText_contains?: InputMaybe<Scalars['String']>;
  ctaText_exists?: InputMaybe<Scalars['Boolean']>;
  ctaText_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  ctaText_not?: InputMaybe<Scalars['String']>;
  ctaText_not_contains?: InputMaybe<Scalars['String']>;
  ctaText_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  inputPlaceholder?: InputMaybe<Scalars['String']>;
  inputPlaceholder_contains?: InputMaybe<Scalars['String']>;
  inputPlaceholder_exists?: InputMaybe<Scalars['Boolean']>;
  inputPlaceholder_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  inputPlaceholder_not?: InputMaybe<Scalars['String']>;
  inputPlaceholder_not_contains?: InputMaybe<Scalars['String']>;
  inputPlaceholder_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
  tagline?: InputMaybe<Scalars['String']>;
  tagline_contains?: InputMaybe<Scalars['String']>;
  tagline_exists?: InputMaybe<Scalars['Boolean']>;
  tagline_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  tagline_not?: InputMaybe<Scalars['String']>;
  tagline_not_contains?: InputMaybe<Scalars['String']>;
  tagline_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type CfTextBlockNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfTextBlockNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfTextBlockNestedFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description?: InputMaybe<Scalars['String']>;
  description_contains?: InputMaybe<Scalars['String']>;
  description_exists?: InputMaybe<Scalars['Boolean']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  description_not?: InputMaybe<Scalars['String']>;
  description_not_contains?: InputMaybe<Scalars['String']>;
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type GetDownloadIntroQueryVariables = Exact<{ [key: string]: never; }>;


export type GetDownloadIntroQuery = { __typename?: 'Query', page?: { __typename?: 'Page', downloadIntro?: { __typename?: 'TextBlock', title?: string | null | undefined, description?: string | null | undefined } | null | undefined } | null | undefined };

export type GetFaqsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetFaqsQuery = { __typename?: 'Query', page?: { __typename?: 'Page', faqIntro?: { __typename?: 'TextBlock', title?: string | null | undefined, description?: string | null | undefined } | null | undefined, faqCta?: { __typename?: 'Cta', label?: string | null | undefined, link?: string | null | undefined, isPrimaryCta?: boolean | null | undefined } | null | undefined } | null | undefined };

export type GetFeaturesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetFeaturesQuery = { __typename?: 'Query', page?: { __typename?: 'Page', featuresIntro?: { __typename?: 'TextBlock', title?: string | null | undefined, description?: string | null | undefined } | null | undefined } | null | undefined };

export type GetMainHeroQueryVariables = Exact<{ [key: string]: never; }>;


export type GetMainHeroQuery = { __typename?: 'Query', page?: { __typename?: 'Page', mainHero?: { __typename?: 'Hero', imageAlignment?: string | null | undefined, name?: string | null | undefined, title?: string | null | undefined, description?: string | null | undefined, image?: { __typename?: 'Asset', description?: string | null | undefined, url?: string | null | undefined, width?: number | null | undefined, height?: number | null | undefined } | null | undefined, ctAsCollection?: { __typename?: 'HeroCtAsCollection', items: Array<{ __typename?: 'Cta', label?: string | null | undefined, link?: string | null | undefined, isPrimaryCta?: boolean | null | undefined, sys: { __typename?: 'Sys', id: string } } | null | undefined> } | null | undefined } | null | undefined } | null | undefined };

export type GetNewsletterQueryVariables = Exact<{ [key: string]: never; }>;


export type GetNewsletterQuery = { __typename?: 'Query', page?: { __typename?: 'Page', newsletter?: { __typename?: 'Newsletter', title?: string | null | undefined, tagline?: string | null | undefined, inputPlaceholder?: string | null | undefined, ctaText?: string | null | undefined } | null | undefined } | null | undefined };

export type GetFaqAccordionQueryVariables = Exact<{ [key: string]: never; }>;


export type GetFaqAccordionQuery = { __typename?: 'Query', page?: { __typename?: 'Page', frequentlyAskedQuestionsCollection?: { __typename?: 'PageFrequentlyAskedQuestionsCollection', items: Array<{ __typename?: 'Faq', question?: string | null | undefined, answer?: string | null | undefined, sys: { __typename?: 'Sys', id: string } } | null | undefined> } | null | undefined } | null | undefined };

export type GetFeatureTabsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetFeatureTabsQuery = { __typename?: 'Query', page?: { __typename?: 'Page', featureTabsCollection?: { __typename?: 'PageFeatureTabsCollection', items: Array<{ __typename?: 'Tab', tabTitle?: string | null | undefined, tabContent?: { __typename?: 'Hero', name?: string | null | undefined, title?: string | null | undefined, description?: string | null | undefined, imageAlignment?: string | null | undefined, sys: { __typename?: 'Sys', id: string }, image?: { __typename?: 'Asset', description?: string | null | undefined, url?: string | null | undefined, width?: number | null | undefined, height?: number | null | undefined } | null | undefined, ctAsCollection?: { __typename?: 'HeroCtAsCollection', items: Array<{ __typename?: 'Cta', label?: string | null | undefined, link?: string | null | undefined, isPrimaryCta?: boolean | null | undefined, sys: { __typename?: 'Sys', id: string } } | null | undefined> } | null | undefined } | null | undefined } | null | undefined> } | null | undefined } | null | undefined };

export type GetInstallationCardsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetInstallationCardsQuery = { __typename?: 'Query', page?: { __typename?: 'Page', installationCardsCollection?: { __typename?: 'PageInstallationCardsCollection', items: Array<{ __typename?: 'Card', title?: string | null | undefined, version?: string | null | undefined, sys: { __typename?: 'Sys', id: string }, logo?: { __typename?: 'Asset', title?: string | null | undefined, description?: string | null | undefined, url?: string | null | undefined, width?: number | null | undefined, height?: number | null | undefined } | null | undefined, installLink?: { __typename?: 'Cta', label?: string | null | undefined, link?: string | null | undefined, isPrimaryCta?: boolean | null | undefined } | null | undefined } | null | undefined> } | null | undefined } | null | undefined };


export const GetDownloadIntroDocument = gql`
    query getDownloadIntro {
  page(id: "63qo1mKjZ1QZIfKzoCLPYa") {
    downloadIntro {
      title
      description
    }
  }
}
    `;

/**
 * __useGetDownloadIntroQuery__
 *
 * To run a query within a React component, call `useGetDownloadIntroQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetDownloadIntroQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetDownloadIntroQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetDownloadIntroQuery(baseOptions?: Apollo.QueryHookOptions<GetDownloadIntroQuery, GetDownloadIntroQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetDownloadIntroQuery, GetDownloadIntroQueryVariables>(GetDownloadIntroDocument, options);
      }
export function useGetDownloadIntroLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetDownloadIntroQuery, GetDownloadIntroQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetDownloadIntroQuery, GetDownloadIntroQueryVariables>(GetDownloadIntroDocument, options);
        }
export type GetDownloadIntroQueryHookResult = ReturnType<typeof useGetDownloadIntroQuery>;
export type GetDownloadIntroLazyQueryHookResult = ReturnType<typeof useGetDownloadIntroLazyQuery>;
export type GetDownloadIntroQueryResult = Apollo.QueryResult<GetDownloadIntroQuery, GetDownloadIntroQueryVariables>;
export const GetFaqsDocument = gql`
    query getFaqs {
  page(id: "63qo1mKjZ1QZIfKzoCLPYa") {
    faqIntro {
      title
      description
    }
    faqCta {
      label
      link
      isPrimaryCta
    }
  }
}
    `;

/**
 * __useGetFaqsQuery__
 *
 * To run a query within a React component, call `useGetFaqsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetFaqsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetFaqsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetFaqsQuery(baseOptions?: Apollo.QueryHookOptions<GetFaqsQuery, GetFaqsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetFaqsQuery, GetFaqsQueryVariables>(GetFaqsDocument, options);
      }
export function useGetFaqsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetFaqsQuery, GetFaqsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetFaqsQuery, GetFaqsQueryVariables>(GetFaqsDocument, options);
        }
export type GetFaqsQueryHookResult = ReturnType<typeof useGetFaqsQuery>;
export type GetFaqsLazyQueryHookResult = ReturnType<typeof useGetFaqsLazyQuery>;
export type GetFaqsQueryResult = Apollo.QueryResult<GetFaqsQuery, GetFaqsQueryVariables>;
export const GetFeaturesDocument = gql`
    query getFeatures {
  page(id: "63qo1mKjZ1QZIfKzoCLPYa") {
    featuresIntro {
      title
      description
    }
  }
}
    `;

/**
 * __useGetFeaturesQuery__
 *
 * To run a query within a React component, call `useGetFeaturesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetFeaturesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetFeaturesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetFeaturesQuery(baseOptions?: Apollo.QueryHookOptions<GetFeaturesQuery, GetFeaturesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetFeaturesQuery, GetFeaturesQueryVariables>(GetFeaturesDocument, options);
      }
export function useGetFeaturesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetFeaturesQuery, GetFeaturesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetFeaturesQuery, GetFeaturesQueryVariables>(GetFeaturesDocument, options);
        }
export type GetFeaturesQueryHookResult = ReturnType<typeof useGetFeaturesQuery>;
export type GetFeaturesLazyQueryHookResult = ReturnType<typeof useGetFeaturesLazyQuery>;
export type GetFeaturesQueryResult = Apollo.QueryResult<GetFeaturesQuery, GetFeaturesQueryVariables>;
export const GetMainHeroDocument = gql`
    query getMainHero {
  page(id: "63qo1mKjZ1QZIfKzoCLPYa") {
    mainHero {
      image {
        description
        url
        width
        height
      }
      imageAlignment
      name
      title
      description
      ctAsCollection {
        items {
          sys {
            id
          }
          label
          link
          isPrimaryCta
        }
      }
    }
  }
}
    `;

/**
 * __useGetMainHeroQuery__
 *
 * To run a query within a React component, call `useGetMainHeroQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMainHeroQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMainHeroQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetMainHeroQuery(baseOptions?: Apollo.QueryHookOptions<GetMainHeroQuery, GetMainHeroQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetMainHeroQuery, GetMainHeroQueryVariables>(GetMainHeroDocument, options);
      }
export function useGetMainHeroLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMainHeroQuery, GetMainHeroQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetMainHeroQuery, GetMainHeroQueryVariables>(GetMainHeroDocument, options);
        }
export type GetMainHeroQueryHookResult = ReturnType<typeof useGetMainHeroQuery>;
export type GetMainHeroLazyQueryHookResult = ReturnType<typeof useGetMainHeroLazyQuery>;
export type GetMainHeroQueryResult = Apollo.QueryResult<GetMainHeroQuery, GetMainHeroQueryVariables>;
export const GetNewsletterDocument = gql`
    query getNewsletter {
  page(id: "63qo1mKjZ1QZIfKzoCLPYa") {
    newsletter {
      title
      tagline
      inputPlaceholder
      ctaText
    }
  }
}
    `;

/**
 * __useGetNewsletterQuery__
 *
 * To run a query within a React component, call `useGetNewsletterQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetNewsletterQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetNewsletterQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetNewsletterQuery(baseOptions?: Apollo.QueryHookOptions<GetNewsletterQuery, GetNewsletterQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetNewsletterQuery, GetNewsletterQueryVariables>(GetNewsletterDocument, options);
      }
export function useGetNewsletterLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetNewsletterQuery, GetNewsletterQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetNewsletterQuery, GetNewsletterQueryVariables>(GetNewsletterDocument, options);
        }
export type GetNewsletterQueryHookResult = ReturnType<typeof useGetNewsletterQuery>;
export type GetNewsletterLazyQueryHookResult = ReturnType<typeof useGetNewsletterLazyQuery>;
export type GetNewsletterQueryResult = Apollo.QueryResult<GetNewsletterQuery, GetNewsletterQueryVariables>;
export const GetFaqAccordionDocument = gql`
    query getFaqAccordion {
  page(id: "63qo1mKjZ1QZIfKzoCLPYa") {
    frequentlyAskedQuestionsCollection {
      items {
        sys {
          id
        }
        question
        answer
      }
    }
  }
}
    `;

/**
 * __useGetFaqAccordionQuery__
 *
 * To run a query within a React component, call `useGetFaqAccordionQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetFaqAccordionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetFaqAccordionQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetFaqAccordionQuery(baseOptions?: Apollo.QueryHookOptions<GetFaqAccordionQuery, GetFaqAccordionQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetFaqAccordionQuery, GetFaqAccordionQueryVariables>(GetFaqAccordionDocument, options);
      }
export function useGetFaqAccordionLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetFaqAccordionQuery, GetFaqAccordionQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetFaqAccordionQuery, GetFaqAccordionQueryVariables>(GetFaqAccordionDocument, options);
        }
export type GetFaqAccordionQueryHookResult = ReturnType<typeof useGetFaqAccordionQuery>;
export type GetFaqAccordionLazyQueryHookResult = ReturnType<typeof useGetFaqAccordionLazyQuery>;
export type GetFaqAccordionQueryResult = Apollo.QueryResult<GetFaqAccordionQuery, GetFaqAccordionQueryVariables>;
export const GetFeatureTabsDocument = gql`
    query getFeatureTabs {
  page(id: "63qo1mKjZ1QZIfKzoCLPYa") {
    featureTabsCollection {
      items {
        tabTitle
        tabContent {
          sys {
            id
          }
          image {
            description
            url
            width
            height
          }
          name
          title
          description
          imageAlignment
          ctAsCollection {
            items {
              sys {
                id
              }
              label
              link
              isPrimaryCta
            }
          }
        }
      }
    }
  }
}
    `;

/**
 * __useGetFeatureTabsQuery__
 *
 * To run a query within a React component, call `useGetFeatureTabsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetFeatureTabsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetFeatureTabsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetFeatureTabsQuery(baseOptions?: Apollo.QueryHookOptions<GetFeatureTabsQuery, GetFeatureTabsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetFeatureTabsQuery, GetFeatureTabsQueryVariables>(GetFeatureTabsDocument, options);
      }
export function useGetFeatureTabsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetFeatureTabsQuery, GetFeatureTabsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetFeatureTabsQuery, GetFeatureTabsQueryVariables>(GetFeatureTabsDocument, options);
        }
export type GetFeatureTabsQueryHookResult = ReturnType<typeof useGetFeatureTabsQuery>;
export type GetFeatureTabsLazyQueryHookResult = ReturnType<typeof useGetFeatureTabsLazyQuery>;
export type GetFeatureTabsQueryResult = Apollo.QueryResult<GetFeatureTabsQuery, GetFeatureTabsQueryVariables>;
export const GetInstallationCardsDocument = gql`
    query getInstallationCards {
  page(id: "63qo1mKjZ1QZIfKzoCLPYa") {
    installationCardsCollection {
      items {
        sys {
          id
        }
        logo {
          title
          description
          url
          width
          height
        }
        title
        version
        installLink {
          label
          link
          isPrimaryCta
        }
      }
    }
  }
}
    `;

/**
 * __useGetInstallationCardsQuery__
 *
 * To run a query within a React component, call `useGetInstallationCardsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetInstallationCardsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetInstallationCardsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetInstallationCardsQuery(baseOptions?: Apollo.QueryHookOptions<GetInstallationCardsQuery, GetInstallationCardsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetInstallationCardsQuery, GetInstallationCardsQueryVariables>(GetInstallationCardsDocument, options);
      }
export function useGetInstallationCardsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetInstallationCardsQuery, GetInstallationCardsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetInstallationCardsQuery, GetInstallationCardsQueryVariables>(GetInstallationCardsDocument, options);
        }
export type GetInstallationCardsQueryHookResult = ReturnType<typeof useGetInstallationCardsQuery>;
export type GetInstallationCardsLazyQueryHookResult = ReturnType<typeof useGetInstallationCardsLazyQuery>;
export type GetInstallationCardsQueryResult = Apollo.QueryResult<GetInstallationCardsQuery, GetInstallationCardsQueryVariables>;