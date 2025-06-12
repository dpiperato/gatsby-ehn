import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import { Col, Container, Row } from 'react-bootstrap';
import Wysiwyg from '../wordPress/wysiwyg/wysiwyg';
import * as Globals from '../../../globals';

export default function CallBanner() {
  const data = useStaticQuery(graphql`
    query CallBannerQuery {
      wp {
        globalContent {
          globalCallBanner {
            banner {
              background {
                backgroundType
                backgroundImage {
                  localFile {
                    ...imageFluidLarge
                  }
                }
              }
              content
            }
          }
          globalContact {
            phone
          }
        }
      }
    }
  `);

  let backgroundFluidImageStack = [
    data.wp.globalContent.globalCallBanner.banner.background.backgroundImage.localFile
      .childImageSharp.fluid,
    Globals.backgroundOverlay,
  ].reverse();

  return (
    <BackgroundImage
      fluid={backgroundFluidImageStack}
      className="section-background jumbotron banner-call"
    >
      <Container
        className={`py-6 text-center`}
        style={{ zIndex: 1, position: 'relative' }}
      >
        <Row className={`justify-content-center`}>
          <Col xs={11} md={10} className={`text-white`}>
            <Wysiwyg html={data.wp.globalContent.globalCallBanner.banner.content} />

            <a
              href={`tel:${data.wp.globalContent.globalContact.phone}`}
              className={`btn btn-success btn-lg btn-call mt-3`}
            >
              Call {data.wp.globalContent.globalContact.phone}
            </a>
          </Col>
        </Row>
      </Container>
    </BackgroundImage>
  );
}