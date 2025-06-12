import Img from 'gatsby-image';
import PropTypes from 'prop-types';
import React from 'react';
import { Carousel } from 'react-bootstrap';

import Wysiwyg from '../../wysiwyg/wysiwyg';
import Styles from './layoutCarousel.styles';

const LayoutCarousel = ({ carousel, className }) => {
  return (
    <Styles className={className}>
      <Carousel interval={null}>
        {carousel.slides.map((slide, index) => (
          <Carousel.Item key={index}>
            {carousel.carouselType === 'image' && (
              <>
                <Img
                  fluid={slide.image.localFile.childImageSharp.fluid}
                  alt={slide.image.altText}
                  className={`d-block w-100`}
                />
                {slide.imageCaption && (
                  <Carousel.Caption>
                    <Wysiwyg html={slide.imageCaption} />
                  </Carousel.Caption>
                )}
              </>
            )}

            {carousel.carouselType === 'content' && (
              <Wysiwyg html={slide.content} />
            )}
          </Carousel.Item>
        ))}
      </Carousel>
    </Styles>
  );
};

LayoutCarousel.propTypes = {
  carousel: PropTypes.object.isRequired,
  className: PropTypes.string,
};

LayoutCarousel.defaultProps = {
  className: ``,
};

export default LayoutCarousel;
