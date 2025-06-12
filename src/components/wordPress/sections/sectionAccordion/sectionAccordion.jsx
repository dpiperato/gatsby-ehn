import PropTypes from 'prop-types';
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import LayoutAccordion from '../../layouts/layoutAccordion/layoutAccordion';
import LayoutButton from '../../layouts/layoutButton/layoutButton';
import Wysiwyg from '../../wysiwyg/wysiwyg';
import Styles from './sectionAccordion.styles';

const SectionAccordion = ({ sectionContent, buttonDefaults, className }) => {
  return (
    <Styles className={`my-5 ${className} ${sectionContent.htmlClass}`}>
      <Container className={`text-center my-4 my-md-5`}>
        {sectionContent.content && (
          <Row className={`section-content justify-content-center`}>
            <Col xs={12} md={8}>
              <Wysiwyg html={sectionContent.content} />
            </Col>
          </Row>
        )}

        <Row className={`justify-content-center`}>
          <Col xs={12} md={8}>
            <LayoutAccordion accordion={sectionContent.accordionLayout} />
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

SectionAccordion.propTypes = {
  sectionContent: PropTypes.object.isRequired,
  buttonDefaults: PropTypes.object.isRequired,
  className: PropTypes.string,
};

SectionAccordion.defaultProps = {
  className: ``,
};

export default SectionAccordion;
