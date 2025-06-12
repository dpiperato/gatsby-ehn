import PropTypes from 'prop-types';
import React from 'react';
import { Container } from 'react-bootstrap';

import LayoutButton from '../../layouts/layoutButton/layoutButton';
import LayoutCarousel from '../../layouts/layoutCarousel/layoutCarousel';
import Wysiwyg from '../../wysiwyg/wysiwyg';
import Styles from './sectionCarousel.styles';

const SectionCarousel = ({ sectionContent, buttonDefaults, className }) => {
  return (
    <Styles className={`my-5 ${className} ${sectionContent.htmlClass}`}>
      <Container>
        {sectionContent.content && (
          <div className={`section-content`}>
            <Wysiwyg html={sectionContent.content} />
          </div>
        )}

        <LayoutCarousel carousel={sectionContent.carouselLayout} />

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

SectionCarousel.propTypes = {
  sectionContent: PropTypes.object.isRequired,
  buttonDefaults: PropTypes.object.isRequired,
  className: PropTypes.string,
};

SectionCarousel.defaultProps = {
  className: ``,
};

export default SectionCarousel;
