import type { Schema, Attribute } from '@strapi/strapi';

export interface ComponentsApiDevelopers extends Schema.Component {
  collectionName: 'components_components_api_developers';
  info: {
    displayName: 'ApiDevelopers';
    description: '';
  };
  attributes: {
    categories: Attribute.Relation<
      'components.api-developers',
      'oneToMany',
      'api::category.category'
    >;
  };
}

export interface ComponentsApiUse extends Schema.Component {
  collectionName: 'components_components_api_uses';
  info: {
    displayName: 'ApiUse';
  };
  attributes: {
    title: Attribute.String;
    useContent: Attribute.Component<'components.use-content', true>;
  };
}

export interface ComponentsCards extends Schema.Component {
  collectionName: 'components_components_cards';
  info: {
    displayName: 'cards';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    button: Attribute.String;
    categories: Attribute.Relation<
      'components.cards',
      'oneToMany',
      'api::category.category'
    >;
    image: Attribute.Media<'images'>;
  };
}

export interface ComponentsHome extends Schema.Component {
  collectionName: 'components_components_homes';
  info: {
    displayName: 'Home';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    image: Attribute.Media<'images'>;
  };
}

export interface ComponentsPartnerLogo extends Schema.Component {
  collectionName: 'components_components_partner_logos';
  info: {
    displayName: 'partnerLogo';
  };
  attributes: {
    logo: Attribute.Media<'images'>;
  };
}

export interface ComponentsUseContent extends Schema.Component {
  collectionName: 'components_components_use_contents';
  info: {
    displayName: 'useContent';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'components.api-developers': ComponentsApiDevelopers;
      'components.api-use': ComponentsApiUse;
      'components.cards': ComponentsCards;
      'components.home': ComponentsHome;
      'components.partner-logo': ComponentsPartnerLogo;
      'components.use-content': ComponentsUseContent;
    }
  }
}
