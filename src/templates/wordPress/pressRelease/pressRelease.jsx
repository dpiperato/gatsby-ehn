import { graphql } from 'gatsby';
import React from 'react';

import Layout from '../../../components/layout/layout';
import Seo from '../../../components/seo/seo';
import Wysiwyg from '../../../components/wordPress/wysiwyg/wysiwyg';
import { Col, Container, Row } from 'react-bootstrap';

const PressRelease = ({ data }) => (
  <Layout>
    <Seo
        title={data.allWpPressRelease.nodes[0].seo.title || data.allWpPressRelease.nodes[0].title}
        description={data.allWpPressRelease.nodes[0].seo.metaDesc}
      />

    <Container>
        <Row className="justify-content-center py-5">
            <Col xs={12} md={10}>
                <h1 className="mb-4">{data.allWpPressRelease.nodes[0].title}</h1>
                <Wysiwyg html={data.allWpPressRelease.nodes[0].content}/>
            </Col>
        </Row>
    </Container>
  </Layout>
);

export const query = graphql`
    query($slug: String!) {
        allWpPressRelease(filter: { slug: { eq: $slug } }) {
            nodes {
                title
                content
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
            }
        }
    }
`;

export default PressRelease;
