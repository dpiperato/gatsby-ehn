import { graphql } from 'gatsby';
import React from 'react';

import Layout from '../components/layout/layout';
import PageBuilder from '../components/wordPress/pageBuilder';
import SeoPress from '../components/wordPress/seoPress/seoPress';

const CovidNineteenResponsePage = ({ data }) => (
  <Layout>
    <SeoPress
      seo={data.wpPage.seo}
      title={data.wpPage.seo?.title || data.wpPage.title}
      uri={`${data.wpPage.uri}`}
    />
    <PageBuilder content={data.wpPage.pageBuilder} className="page-covid-19-response"/>
  </Layout>
);

export const query = graphql`
  query {
    wpPage(databaseId: {eq: 279 }) {
      title
      uri
      seo {
        title
        metaDesc
        canonical
        opengraphUrl
        opengraphTitle
        opengraphDescription
        opengraphImage {
          localFile {
            publicURL
          }
        }
        twitterTitle
        twitterDescription
        twitterImage {
          localFile {
            publicURL
          }
        }
      }
      pageBuilder {
        header {
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
        sections {
          ... on WpPage_Pagebuilder_Sections_Accordion {
            ...pageBuilderSectionAccordion
          }
          ... on WpPage_Pagebuilder_Sections_Carousel {
            ...pageBuilderSectionCarousel
          }
          ... on WpPage_Pagebuilder_Sections_Content {
            ...pageBuilderSectionContent
          }
          ... on WpPage_Pagebuilder_Sections_Embed {
            ...pageBuilderSectionEmbed
          }
          ... on WpPage_Pagebuilder_Sections_Image {
            ...pageBuilderSectionImage
          }
          ... on WpPage_Pagebuilder_Sections_Jumbotron {
            ...pageBuilderSectionJumbotron
          }
          ... on WpPage_Pagebuilder_Sections_Map {
            ...pageBuilderSectionMap
          }
          ... on WpPage_Pagebuilder_Sections_Columns {
            ...pageBuilderSectionColumns
          }
          ... on WpPage_Pagebuilder_Sections_Gallery {
            ...pageBuilderSectionGallery
          }
          ... on WpPage_Pagebuilder_Sections_Steps {
            ...pageBuilderSectionSteps
          }
        }
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
  }
`;

export default CovidNineteenResponsePage;
