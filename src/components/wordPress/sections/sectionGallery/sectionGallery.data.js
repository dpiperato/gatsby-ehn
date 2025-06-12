import { graphql } from 'gatsby';

export const pageBuilderSectionGallery = graphql`
  fragment pageBuilderSectionGallery on WpPage_Pagebuilder_Sections_Gallery {
    fieldGroupName
    content
    htmlClass
      galleryLayout {
          gallery {
              altText
              localFile {
                  ...imageFluidLarge
              }
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
