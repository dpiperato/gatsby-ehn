import { graphql } from 'gatsby';

export const pageBuilderSectionSteps = graphql`
  fragment pageBuilderSectionSteps on WpPage_Pagebuilder_Sections_Steps {
    fieldGroupName
    content
    htmlClass
    subnavigation
    stepsLayout {
        steps {
            title
            content
            image {
                altText
                localFile {
                    ...imageFluidSmall
                }
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
