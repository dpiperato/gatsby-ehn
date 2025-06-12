import { graphql } from 'gatsby';

export const pageBuilderSectionEmbed = graphql`
  fragment pageBuilderSectionEmbed on WpPage_Pagebuilder_Sections_Embed {
    fieldGroupName
    content
    embed
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
