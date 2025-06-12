import { graphql } from 'gatsby';

export const pageBuilderSectionCarousel = graphql`
  fragment pageBuilderSectionCarousel on WpPage_Pagebuilder_Sections_Carousel {
    fieldGroupName
    content
    htmlClass
    carouselLayout {
      carouselType
      slides {
        image {
          altText
          localFile {
            ...imageFluidLarge
          }
        }
        imageCaption
        content
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
