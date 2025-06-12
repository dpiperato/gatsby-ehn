import BackgroundImage from 'gatsby-background-image';
import PropTypes from 'prop-types';
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import * as Globals from '../../../../../globals';
import LayoutButton from '../../layouts/layoutButton/layoutButton';
import Wysiwyg from '../../wysiwyg/wysiwyg';
import Styles from './sectionJumbotron.styles';

const SectionHeroContent = ({ sectionContent, buttonDefaults, whiteText }) => {
  return (
    <Container style={{ zIndex: 1, position: 'relative' }} className={`text-center`}>
      <Row className={`justify-content-center`}>
        <Col xs={11} md={8} className={whiteText && `text-white`}>
          <Wysiwyg html={sectionContent.content} />

          {sectionContent.buttonLayout.showButton && (
            <LayoutButton
              className={`mt-3`}
              buttonSettings={
                sectionContent.buttonLayout.overrideButtonSettings !== null
                  ? sectionContent.buttonLayout.buttonSettings
                  : null
              }
              buttonDefaults={buttonDefaults}
            />
          )}
        </Col>
      </Row>
    </Container>
  );
};

const SectionJumbotron = ({ sectionContent, buttonDefaults, className }) => {
  let backgroundFluidImageStack = [
    sectionContent.background.backgroundImage?.localFile.childImageSharp.fluid,
    Globals.backgroundOverlay,
  ].reverse();

  return (
    <Styles className={`jumbotron ${className} ${sectionContent.htmlClass}`}>
      {sectionContent.background.backgroundType === 'image' && (
        <BackgroundImage
          fluid={backgroundFluidImageStack}
          className={`section-background`}
        >
          <SectionHeroContent
            sectionContent={sectionContent}
            buttonDefaults={buttonDefaults}
            whiteText={true}
          />
        </BackgroundImage>
      )}

      {sectionContent.background.backgroundType === 'video' && (
        <>
          <SectionHeroContent
            sectionContent={sectionContent}
            buttonDefaults={buttonDefaults}
            whiteText={true}
          />

          <div
            className={`video-overlay`}
            style={{ background: Globals.backgroundOverlay }}
          />
          <div
            className={`video-background`}
            dangerouslySetInnerHTML={{
              __html: `
          <video
            autoPlay
            loop
            muted
            playsInline
            poster=${sectionContent.background.backgroundVideoCover.localFile.publicURL}
          >
            <source
              src=${sectionContent.background.backgroundVideo.localFile.publicURL}
              type="video/mp4"
            />
          </video>
        `,
            }}
          />
        </>
      )}

      {sectionContent.background.backgroundType === 'none' && (
        <SectionHeroContent
          sectionContent={sectionContent}
          buttonDefaults={buttonDefaults}
        />
      )}
    </Styles>
  );
};

SectionJumbotron.propTypes = {
  sectionContent: PropTypes.object.isRequired,
  buttonDefaults: PropTypes.object.isRequired,
  className: PropTypes.string,
};

SectionJumbotron.defaultProps = {
  className: ``,
};

export default SectionJumbotron;
