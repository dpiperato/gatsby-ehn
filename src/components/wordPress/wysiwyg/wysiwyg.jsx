import PropTypes from 'prop-types';
import React from 'react';

import Styles from './wysiwyg.styles';

const Wysiwyg = ({ html, className }) => (
  <Styles
    className={`wysiwyg ${className}`}
    dangerouslySetInnerHTML={{ __html: html }}
  />
);

Wysiwyg.propTypes = {
  html: PropTypes.node.isRequired,
  className: PropTypes.string,
};

Wysiwyg.defaultProps = {
  className: ``,
};

export default Wysiwyg;
