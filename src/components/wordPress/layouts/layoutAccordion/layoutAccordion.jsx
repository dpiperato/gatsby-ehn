import PropTypes from 'prop-types';
import React from 'react';
import { Accordion } from 'react-bootstrap';

import Wysiwyg from '../../wysiwyg/wysiwyg';
import Styles from './layoutAccordion.styles';

const LayoutAccordion = ({ accordion, className }) => {
  return (
    <Styles className={className}>
      <Accordion defaultActiveKey="0">
        {accordion.groups.map((group, index) => (
          <div className="mb-3" key={index}>
            <Accordion.Toggle as={`h3`} eventKey={`${index}`}>
              {group.headline}
            </Accordion.Toggle>
            <Accordion.Collapse eventKey={`${index}`}>
              <div className={`accordion-content`}>
                <Wysiwyg html={group.content} />
              </div>
            </Accordion.Collapse>
          </div>
        ))}
      </Accordion>
    </Styles>
  );
};

LayoutAccordion.propTypes = {
  accordion: PropTypes.object.isRequired,
  className: PropTypes.string,
};

LayoutAccordion.defaultProps = {
  className: ``,
};

export default LayoutAccordion;
