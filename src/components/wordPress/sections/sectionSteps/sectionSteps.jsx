import PropTypes from 'prop-types';
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import LayoutButton from '../../layouts/layoutButton/layoutButton';
import Wysiwyg from '../../wysiwyg/wysiwyg';
import Styles from './sectionSteps.styles';
import LayoutSteps from '../../layouts/layoutSteps/layoutSteps';

const SectionSteps = ({ sectionContent, buttonDefaults, className }) => {
  console.log(sectionContent.subnavigation)
  return (
    <Styles className={`my-5 ${className} ${sectionContent.htmlClass}`}>
      <Container className={`my-4 my-md-5`}>
        {sectionContent.content && (
          <Row className={`section-content justify-content-center`}>
            <Col xs={12} md={8}>
              <Wysiwyg html={sectionContent.content} />
            </Col>
          </Row>
        )}

        <Row className={`justify-content-center`}>
          <Col>
            <LayoutSteps steps={sectionContent.stepsLayout} subnavigation={sectionContent.subnavigation} />
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

SectionSteps.propTypes = {
  sectionContent: PropTypes.object.isRequired,
  buttonDefaults: PropTypes.object.isRequired,
  className: PropTypes.string,
};

SectionSteps.defaultProps = {
  className: ``,
};

export default SectionSteps;
