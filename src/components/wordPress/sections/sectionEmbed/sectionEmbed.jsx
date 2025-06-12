import PropTypes from 'prop-types';
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import LayoutButton from '../../layouts/layoutButton/layoutButton';
import Wysiwyg from '../../wysiwyg/wysiwyg';
import Styles from './sectionEmbed.styles';

const SectionEmbed = ({ sectionContent, buttonDefaults, className }) => {
  return (
    <Styles className={`my-5 ${className} ${sectionContent.htmlClass}`}>
      <Container>
        {sectionContent.content && (
          <div className={`section-content`}>
            <Wysiwyg html={sectionContent.content} />
          </div>
        )}

        <Row className={`justify-content-center`}>
          <Col xs={8}>
            <div
              className={`embed-responsive embed-responsive-16by9`}
              dangerouslySetInnerHTML={{ __html: sectionContent.embed }}
            />
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

SectionEmbed.propTypes = {
  sectionContent: PropTypes.object.isRequired,
  buttonDefaults: PropTypes.object.isRequired,
  className: PropTypes.string,
};

SectionEmbed.defaultProps = {
  className: ``,
};

export default SectionEmbed;
