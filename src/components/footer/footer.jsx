import { useStaticQuery, graphql, Link } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import Wysiwyg from '../wordPress/wysiwyg/wysiwyg';
import Styles from './footer.styles';

export default function Footer() {
  const data = useStaticQuery(graphql`
    query FooterQuery {
      jointCommisionLogo: file(
        relativePath: { eq: "certifications/seal-tjc.jpg" }
      ) {
        ...imageFluidMedium
      }
      carfLogo: file(relativePath: { eq: "certifications/carf.png" }) {
        ...imageFluidMedium
      }
      wp {
        globalContent {
          globalButtons {
            buttonSettings {
              buttonText
              linkType
              internalLink {
                ... on WpPost {
                  uri
                }
                ... on WpPage {
                  uri
                }
              }
              externalLink
              htmlClass
            }
          }
          globalContact {
            phone
            address
            email
            mapLayout {
              map {
                latitude
                longitude
                zoom
              }
            }
          }
          globalIntegrations {
            fullstory
          }
        }
      }
    }
  `);
  return (
    <Styles className="bg-light py-5">
      <Container>
        <Row className={`text-center justify-content-center`}>
          <Col xs={11}>
            <h4 className={`d-block text-center mb-3`}>Contact Us</h4>

            <Row className={`justify-content-center`}>
              <Col xs={12} md={6}>
                <Wysiwyg html={data.wp.globalContent.globalContact.address} />
              </Col>
            </Row>

            <a
              href={`tel:${data.wp.globalContent.globalContact.phone}`}
              className={`btn btn-success btn-call mt-3`}
            >
              Call {data.wp.globalContent.globalContact.phone}
            </a>
          </Col>
        </Row>

        <hr className={`my-4`} />

        <Row>
          <Col>
            <ul className={`nav text-center justify-content-center`}>
              <li className={`nav-item`}>
                <Link to={`/`} className={`nav-link`}>
                  Home
                </Link>
              </li>
              <li>
                <Link to={`/about-us/`} className={`nav-link`}>
                  About Us
                </Link>
              </li>
              <li>
                <Link to={`/addiction-treatment/`} className={`nav-link`}>
                  Addiction Treatment
                </Link>
              </li>
              <li>
                <Link to={`/drug-rehab/`} className={`nav-link`}>
                  Drug Rehab
                </Link>
              </li>
              <li>
                <Link to={`/drug-detox/`} className={`nav-link`}>
                  Drug Detox
                </Link>
              </li>
              <li>
                <Link to={`/mat-treatment/`} className={`nav-link`}>
                  MAT Treatment
                </Link>
              </li>
              <li>
                <Link to={`/our-process/`} className={`nav-link`}>
                  Our Process
                </Link>
              </li>
              <li>
                <Link to={`/friends-and-family/`} className={`nav-link`}>
                  Friends and Family
                </Link>
              </li>
              <li>
                <Link to={`/our-location/`} className={`nav-link`}>
                  Our Location
                </Link>
              </li>
              <li>
                <Link to={`/our-location/kearny`} className={`nav-link`}>
                  Kearny New Jersey
                </Link>
              </li>
              <li>
                <Link to={`/press/`} className={`nav-link`}>
                  Press
                </Link>
              </li>
              <li>
                <Link to={`/our-privacy-practices/`} className={`nav-link`}>
                  Our Privacy Practices
                </Link>
              </li>
              <li>
                <Link to={`/online-privacy-policy/`} className={`nav-link`}>
                  Online Privacy Policy
                </Link>
              </li>
            </ul>
          </Col>
        </Row>

        <hr className={`my-4`} />

        <h4 className={`d-block text-center mb-3`}>Certified By</h4>
        <Row className={`text-center justify-content-center`}>
          <Col xs={6} md={3}>
            <Img
              fluid={data.jointCommisionLogo.childImageSharp.fluid}
              alt={`alt text`}
              className={`d-inline-block w-50 mx-auto`}
              maxWidth={`200px`}
            />
            <h5 className={`mt-3`}>
              <small>The Joint Commission</small>
            </h5>
          </Col>
          <Col
            xs={6}
            md={3}
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <div id={`legitscripts`} className="m-auto" />
            <h5 className={`mt-3`}>
              <small>LegitScript</small>
            </h5>
          </Col>
        </Row>

        <div className="my-5">
          <iframe
            src={`https://sotellus.com/iframe/endeavor-house-north/`}
            title={`Endeavor House Reviews`}
            id={`stuifw01`}
            scrolling={`yes`}
            width={`100%`}
            height={`500`}
            frameBorder={`0`}
            style={{ border: 0 }}
          />
        </div>

        <div className="my-5">
          <iframe
            src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1871719505884!2d-74.15125038433979!3d40.75790784274217!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2546a9665d769%3A0x740bb418103d39d0!2sEndeavor%20House%20North!5e0!3m2!1sen!2sus!4v1618244607132!5m2!1sen!2sus`}
            title={`Endeavor House Map`}
            width={`100%`}
            height={`450`}
            frameBorder={`0`}
            style={{ border: 0 }}
            allowFullScreen={``}
            aria-hidden={false}
          />
        </div>

        <p className={`text-muted text-center mb-0`}>
          <small>
            A{' '}
            <a
              href={`https://www.sprouthealthgroup.com/`}
              target={`_blank`}
              className={`text-success`}
              style={{ fontWeight: 500 }}
            >
              Sprout Health Group
            </a>{' '}
            Location
          </small>
        </p>
      </Container>
    </Styles>
  );
}
