import { graphql } from 'gatsby';

export const pageBuilderColumnCard = graphql`
  fragment pageBuilderColumnCard on WpPage_Pagebuilder_Sections_Columns_columns_Layout_Card {
    fieldGroupName
    title
    text
    image {
      altText
      localFile {
        ...imageFluidSmall
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
