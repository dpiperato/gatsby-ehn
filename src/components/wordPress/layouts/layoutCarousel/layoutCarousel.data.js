import { graphql } from 'gatsby';

export const pageBuilderColumnCarousel = graphql`
  fragment pageBuilderColumnCarousel on WpPage_Pagebuilder_Sections_Columns_columns_Layout_Carousel {
    fieldGroupName
    carouselType
    slides {
      content
      imageCaption
      image {
        altText
        localFile {
          ...imageFluidLarge
        }
      }
    }
  }
`;
