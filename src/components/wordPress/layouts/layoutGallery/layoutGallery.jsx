import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Carousel, Col, Modal, Row } from 'react-bootstrap';
import Img from 'gatsby-image';

const LayoutGallery = ({ gallery, className }) => {
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);

  const openCarouselModal = (imageIndex) => {
    setCarouselIndex(imageIndex);
    handleShowModal();
  };

  const handleSelect = (selectedIndex, e) => {
    setCarouselIndex(selectedIndex);
  };

  return (
    <>
      <Row className={`justify-content-center ${className}`}>
        {gallery.gallery.map((image, index) => (
          <Col xs={6} md={3} className="mb-3" onClick={() => openCarouselModal(index)} key={index}>
            <Img
              fluid={image.localFile.childImageSharp.fluid}
              alt={image.altText}
            />
          </Col>
        ))}
      </Row>

      <Modal show={showModal} onHide={handleCloseModal} size="lg" centered>
        <div className="position-relative">
          <button onClick={handleCloseModal} className="close position-absolute p-2" style={{ top: 0, right: 0, zIndex: 10 }} aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>

          <Carousel
            interval={null}
            activeIndex={carouselIndex}
            onSelect={handleSelect}
          >
            {gallery.gallery.map((image, index) => (
              <Carousel.Item key={index}>
                <Img
                  fluid={image.localFile.childImageSharp.fluid}
                  alt={image.altText}
                />
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
      </Modal>
    </>
  );
};

LayoutGallery.propTypes = {
  gallery: PropTypes.object.isRequired,
  className: PropTypes.string,
};

LayoutGallery.defaultProps = {
  className: ``,
};

export default LayoutGallery;
