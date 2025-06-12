import PropTypes from 'prop-types';
import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-scroll';

import Wysiwyg from '../../wysiwyg/wysiwyg';
import Img from 'gatsby-image';
import rhythm from '../../../../utils/rhythm';

const StepContent = ({steps}) => (
  <>
    {steps.steps.map((step, index) => (
      <Row className={index < steps.steps.length - 1 ? `align-items-center mb-4` : `align-items-center`} id={`step${index}`} key={index}>
        {step.image && <Col xs={12} md={3} className='mb-2'>
          <Img
            fluid={step.image.localFile.childImageSharp.fluid}
            alt={step.image.altText}
          />
        </Col>}

        <Col>
          <h3>{step.title}</h3>
          <Wysiwyg html={step.content} />
        </Col>
      </Row>
    ))}
  </>
);

const LayoutSteps = ({ steps, className, subnavigation }) => {
  return (
    <div className={className}>
      {subnavigation ?
        <Row>
          <Col xs={12} md={3}>
            <div className="sticky-top p-2 mb-3 bg-light" style={{ top: rhythm(2) }}>
              <ul className="list-unstyled m-0 small step-subnavigation">
                {steps.steps.map((step, index) => (
                  <li className="mb-2" key={index}>
                    <Link
                      to={`step${index}`}
                      spy={true}
                      smooth={true}
                      duration={500}
                      offset={-80}
                    >
                      {step.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </Col>

          <Col><StepContent steps={steps} /></Col>
        </Row> :
        <StepContent steps={steps} />
      }
    </div>
  );
};

LayoutSteps.propTypes = {
  steps: PropTypes.object.isRequired,
  className: PropTypes.string,
  subnavigation: PropTypes.bool,
};

LayoutSteps.defaultProps = {
  className: ``,
  subnavigation: false,
};

export default LayoutSteps;
