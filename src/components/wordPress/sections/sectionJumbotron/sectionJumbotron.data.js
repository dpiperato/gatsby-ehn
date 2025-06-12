import { graphql } from 'gatsby';

export const pageBuilderSectionJumbotron = graphql`
  fragment pageBuilderSectionJumbotron on WpPage_Pagebuilder_Sections_Jumbotron {
    fieldGroupName
    content
    htmlClass
    background {
      backgroundType
      backgroundImage {
        localFile {
          ...imageFluidLarge
        }
      }
      backgroundVideo {
        localFile {
          publicURL
        }
      }
      backgroundVideoCover {
        localFile {
          publicURL
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
