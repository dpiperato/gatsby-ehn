import Img from 'gatsby-image';
import PropTypes from 'prop-types';
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import LayoutAccordion from '../../layouts/layoutAccordion/layoutAccordion';
import LayoutCard from '../../layouts/layoutCard/layoutCard';
import LayoutCarousel from '../../layouts/layoutCarousel/layoutCarousel';
import LayoutMap from '../../layouts/layoutMap/layoutMap';
import Wysiwyg from '../../wysiwyg/wysiwyg';
import Styles from './sectionColumns.styles';

const SectionColumns = ({ sectionContent, buttonDefaults, className }) => {
  return (
    <Styles className={`my-5 ${className} ${sectionContent.htmlClass}`}>
      <Container className={`text-center my-4 my-md-5`}>
        {sectionContent.content && (
          <div className={`section-content`}>
            <Wysiwyg html={sectionContent.content} />
          </div>
        )}

        <Row className={`justify-content-center`}>
          {sectionContent.columns.map((column, index) => (
            <Col
              xs={column.breakpoints.extraSmall}
              sm={column.breakpoints.small}
              md={column.breakpoints.medium}
              lg={column.breakpoints.large}
              xl={column.breakpoints.extraLarge}
              className={`col`}
              key={index}
            >
              {/* Accordion */}
              {column.layout[0].fieldGroupName ===
                'Page_Pagebuilder_Sections_Columns_columns_Layout_Accordion' && (
                <LayoutAccordion accordion={column.layout[0]} />
              )}

              {/* Card */}
              {column.layout[0].fieldGroupName ===
                'Page_Pagebuilder_Sections_Columns_columns_Layout_Card' && (
                <LayoutCard
                  card={column.layout[0]}
                  buttonDefaults={buttonDefaults}
                />
              )}

              {/* Carousel */}
              {column.layout[0].fieldGroupName ===
                'Page_Pagebuilder_Sections_Columns_columns_Layout_Carousel' && (
                <LayoutCarousel carousel={column.layout[0]} />
              )}

              {/* Content */}
              {column.layout[0].fieldGroupName ===
                'Page_Pagebuilder_Sections_Columns_columns_Layout_Content' && (
                <Wysiwyg html={column.layout[0].content} />
              )}

              {/* Embed */}
              {column.layout[0].fieldGroupName ===
                'Page_Pagebuilder_Sections_Columns_columns_Layout_Embed' && (
                <div
                  className={`embed-responsive embed-responsive-16by9`}
                  dangerouslySetInnerHTML={{ __html: column.layout[0].embed }}
                />
              )}

              {/* Image */}
              {column.layout[0].fieldGroupName ===
                'Page_Pagebuilder_Sections_Columns_columns_Layout_Image' && (
                <Img
                  fluid={column.layout[0].image.localFile.childImageSharp.fluid}
                  alt={column.layout[0].image.altText}
                />
              )}

              {/* Map */}
              {column.layout[0].fieldGroupName ===
                'Page_Pagebuilder_Sections_Columns_columns_Layout_Map' && (
                <LayoutMap map={column.layout[0]} />
              )}
            </Col>
          ))}
        </Row>
      </Container>
    </Styles>
  );
};

SectionColumns.propTypes = {
  sectionContent: PropTypes.object.isRequired,
  buttonDefaults: PropTypes.object.isRequired,
  className: PropTypes.string,
};

SectionColumns.defaultProps = {
  className: ``,
};

export default SectionColumns;
