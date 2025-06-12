import PropTypes from 'prop-types';
import React from 'react';
import { Col } from 'react-bootstrap';

const ContentCol = ({ children }) => {
  return (
    <Col xs={11} sm={9} md={7} lg={6} xl={5}>
      {children}
    </Col>
  );
};

ContentCol.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ContentCol;
