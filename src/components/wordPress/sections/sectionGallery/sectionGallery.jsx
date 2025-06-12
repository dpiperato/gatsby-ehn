import PropTypes from 'prop-types';
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import LayoutButton from '../../layouts/layoutButton/layoutButton';
import Wysiwyg from '../../wysiwyg/wysiwyg';
import Styles from './sectionGallery.styles';
import LayoutGallery from '../../layouts/layoutGallery/layoutGallery';

const SectionGallery = ({ sectionContent, buttonDefaults, className }) => {
  return (
    <Styles className={`my-5 ${className} ${sectionContent.htmlClass}`}>
      <Container className={`my-4 my-md-5`}>
        {sectionContent.content && (
          <Row className={`justify-content-center mb-4`}>
            <Col xs={12} md={8}>
              <Wysiwyg html={sectionContent.content} />
            </Col>
          </Row>
        )}

        <Row className={`justify-content-center`}>
          <Col xs={12} md={8}>
            <LayoutGallery gallery={sectionContent.galleryLayout} />
          </Col>
        </Row>

        {sectionContent.buttonLayout.showButton && (
          <div className={`section-button`}>
            <LayoutButton
              buttonSettings={
                sectionContent.buttonLayout.overrideButtonSettings !== null
                  ? sectionContent.buttonLayout.buttonSettings
                  : null
              }
              buttonDefaults={buttonDefaults}
            />
          </div>
        )}
      </Container>
    </Styles>
  );
};

SectionGallery.propTypes = {
  sectionContent: PropTypes.object.isRequired,
  buttonDefaults: PropTypes.object.isRequired,
  className: PropTypes.string,
};

SectionGallery.defaultProps = {
  className: ``,
};

export default SectionGallery;
