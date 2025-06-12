import { graphql } from 'gatsby';

export const pageBuilderSectionAccordion = graphql`
  fragment pageBuilderSectionAccordion on WpPage_Pagebuilder_Sections_Accordion {
    fieldGroupName
    content
    htmlClass
    accordionLayout {
      groups {
        content
        headline
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
