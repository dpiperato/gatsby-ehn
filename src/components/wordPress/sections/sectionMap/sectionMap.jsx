import PropTypes from 'prop-types';
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import LayoutMap from '../../layouts/layoutMap/layoutMap';
import Wysiwyg from '../../wysiwyg/wysiwyg';
import Styles from './sectionMap.styles';

const SectionMap = ({ sectionContent, className }) => {
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
            <LayoutMap map={sectionContent.mapLayout} />
          </Col>
        </Row>
      </Container>
    </Styles>
  );
};

SectionMap.propTypes = {
  sectionContent: PropTypes.object.isRequired,
  className: PropTypes.string,
};

SectionMap.defaultProps = {
  className: ``,
};

export default SectionMap;
