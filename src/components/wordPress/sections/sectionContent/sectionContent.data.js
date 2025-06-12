import { graphql } from 'gatsby';

export const pageBuilderSectionContent = graphql`
  fragment pageBuilderSectionContent on WpPage_Pagebuilder_Sections_Content {
    fieldGroupName
    content
    htmlClass
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
