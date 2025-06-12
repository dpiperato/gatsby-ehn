import Img from 'gatsby-image';
import PropTypes from 'prop-types';
import React from 'react';
import { Card } from 'react-bootstrap';

import LayoutButton from '../layoutButton/layoutButton';

const LayoutCard = ({ card, buttonDefaults, className }) => {
  return (
    <Card className={className}>
      {card.image && (
        <Img
          fluid={card.image.localFile.childImageSharp.fluid}
          alt={card.image.altText}
          className={`card-img-top`}
        />
      )}
      <Card.Body>
        {card.title && <Card.Title>{card.title}</Card.Title>}
        {card.text && <Card.Text>{card.text}</Card.Text>}

        {card.buttonLayout.showButton && (
          <LayoutButton
            buttonSettings={
              card.buttonLayout.overrideButtonSettings &&
              card.buttonLayout.buttonSettings
            }
            buttonDefaults={buttonDefaults}
            stretchedLink={true}
          />
        )}
      </Card.Body>
    </Card>
  );
};

LayoutCard.propTypes = {
  card: PropTypes.object.isRequired,
  buttonDefaults: PropTypes.object.isRequired,
  className: PropTypes.string,
};

LayoutCard.defaultProps = {
  className: ``,
};

export default LayoutCard;
