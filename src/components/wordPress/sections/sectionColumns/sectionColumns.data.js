import { graphql } from 'gatsby';

export const pageBuilderSectionColumns = graphql`
  fragment pageBuilderSectionColumns on WpPage_Pagebuilder_Sections_Columns {
    fieldGroupName
    content
    htmlClass
    columns {
      fieldGroupName
      breakpoints {
        extraSmall
        small
        medium
        large
        extraLarge
      }
      layout {
        ... on WpPage_Pagebuilder_Sections_Columns_columns_Layout_Accordion {
          ...pageBuilderColumnAccordion
        }
        ... on WpPage_Pagebuilder_Sections_Columns_columns_Layout_Card {
          ...pageBuilderColumnCard
        }
        ... on WpPage_Pagebuilder_Sections_Columns_columns_Layout_Carousel {
          ...pageBuilderColumnCarousel
        }
        ... on WpPage_Pagebuilder_Sections_Columns_columns_Layout_Content {
          fieldGroupName
          content
        }
        ... on WpPage_Pagebuilder_Sections_Columns_columns_Layout_Embed {
          fieldGroupName
          embed
        }
        ... on WpPage_Pagebuilder_Sections_Columns_columns_Layout_Image {
          fieldGroupName
          image {
            altText
            localFile {
              ...imageFluidLarge
            }
          }
        }
        ... on WpPage_Pagebuilder_Sections_Columns_columns_Layout_Map {
          ...pageBuilderColumnMap
        }
      }
    }
  }
`;
