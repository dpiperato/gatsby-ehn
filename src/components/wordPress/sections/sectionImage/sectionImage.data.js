import { graphql } from 'gatsby';

export const pageBuilderSectionImage = graphql`
  fragment pageBuilderSectionImage on WpPage_Pagebuilder_Sections_Image {
    fieldGroupName
    content
    htmlClass
    image {
      altText
      localFile {
        ...imageFluidLarge
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
