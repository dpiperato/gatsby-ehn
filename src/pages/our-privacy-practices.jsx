import { graphql } from 'gatsby';
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Wysiwyg from '../components/wordPress/wysiwyg/wysiwyg';

import Layout from '../components/layout/layout';
import SeoPress from '../components/wordPress/seoPress/seoPress';

const OurPrivacyPracticesPage = ({ data }) => (
  <Layout>
    <SeoPress
      seo={data.wpPage.seo}
      title={data.wpPage.seo?.title || data.wpPage.title}
      uri={`${data.wpPage.uri}`}
    />
    <header className={`header-plain`}>
      <div>
        <h1>Our Privacy Practices</h1>
      </div>
    </header>
    <section className={`pb-5`}>
      <Container>
        <Row className={`justify-content-center`}>
          <Col xs={11} md={10} lg={8}>
            <Wysiwyg html={data.wpPage.content} />
          </Col>
        </Row>
      </Container>
    </section>
  </Layout>
);

export const query = graphql`
  query {
    wpPage(databaseId: {eq: 273 }) {
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
      content
    }
  }
`;

export default OurPrivacyPracticesPage;
