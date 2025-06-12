import React from 'react';
import { Link, graphql } from 'gatsby';
import { Container, Row, Col } from 'react-bootstrap';

import Layout from '../components/layout/layout';
import Seo from '../components/seo/seo';

const PressPage = ({ data }) => {

  return (
    <Layout>
      <Seo
        title="Press Releases - Endeavor House North"
        description="Press Releases - Endeavor House North"
      />

      <header className={`header-plain`}>
        <div>
          <h1>Press</h1>
        </div>
      </header>

      <Container>
        <Row className={`row-eq-height`}>
          {data.allWpPressRelease.nodes.map((pressRelease, index) => (
            <Col
              xs={12}
              md={4}
              key={index}
              className={'mb-4'}
            >
              <article className={`post-card`}>
                <div>
                  <h4 className={'mb-3'}>{pressRelease.title}</h4>
                  <Link className={`stretched-link`} to={`/press/${pressRelease.slug}/`}>Learn More</Link>
                </div>
              </article>
            </Col>
          ))}
        </Row>
      </Container>
    </Layout>
  );
};

export const query = graphql`
  query {
    allWpPressRelease {
      nodes {
        title
        slug
        content
        uri
        seo {
          title
          metaDesc
          opengraphTitle
          opengraphDescription
        }
      }
    }
  }
`;

export default PressPage;