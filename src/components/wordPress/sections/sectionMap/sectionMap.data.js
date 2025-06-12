import { graphql } from 'gatsby';

export const pageBuilderSectionMap = graphql`
  fragment pageBuilderSectionMap on WpPage_Pagebuilder_Sections_Map {
    fieldGroupName
    content
    htmlClass
    mapLayout {
      height
      map {
        city
        country
        countryShort
        latitude
        longitude
        placeId
        postCode
        state
        stateShort
        streetAddress
        streetName
        streetNumber
        zoom
      }
    }
    buttonLayout {
      showButton
      overrideButtonSettings
      buttonSettings {
        buttonText
        linkType
        internalLink {
          ... on WpPage {
            uri
          }
          ... on WpPost {
            uri
          }
        }
        externalLink
        htmlClass
      }
    }
  }
`;
