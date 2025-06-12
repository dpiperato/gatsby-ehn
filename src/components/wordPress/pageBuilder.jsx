import React from 'react';
import SectionJumbotron from './sections/sectionJumbotron/sectionJumbotron';
import SectionAccordion from './sections/sectionAccordion/sectionAccordion';
import SectionCarousel from './sections/sectionCarousel/sectionCarousel';
import SectionColumns from './sections/sectionColumns/sectionColumns';
import SectionContent from './sections/sectionContent/sectionContent';
import SectionEmbed from './sections/sectionEmbed/sectionEmbed';
import SectionImage from './sections/sectionImage/sectionImage';
import SectionMap from './sections/sectionMap/sectionMap';
import PropTypes from 'prop-types';
import SectionGallery from './sections/sectionGallery/sectionGallery';
import SectionSteps from './sections/sectionSteps/sectionSteps';

export default function PageBuilder({ content, className }) {
  const buttonDefaults = content.buttonSettings;

  return (
    <div className={className}>
      <SectionJumbotron
        sectionContent={content.header}
        buttonDefaults={buttonDefaults}
      />

      {content.sections.map((section, index) => (
        <React.Fragment key={index}>
          {/* Accordion */}
          {section.fieldGroupName ===
          'Page_Pagebuilder_Sections_Accordion' && (
            <SectionAccordion
              sectionContent={section}
              buttonDefaults={buttonDefaults}
            />
          )}

          {/* Carousel */}
          {section.fieldGroupName ===
          'Page_Pagebuilder_Sections_Carousel' && (
            <SectionCarousel
              sectionContent={section}
              buttonDefaults={buttonDefaults}
            />
          )}

          {/* Columns */}
          {section.fieldGroupName ===
          'Page_Pagebuilder_Sections_Columns' && (
            <SectionColumns
              sectionContent={section}
              buttonDefaults={buttonDefaults}
            />
          )}

          {/* Content */}
          {section.fieldGroupName ===
          'Page_Pagebuilder_Sections_Content' && (
            <SectionContent
              sectionContent={section}
              buttonDefaults={buttonDefaults}
            />
          )}

          {/* Embed */}
          {section.fieldGroupName ===
          'Page_Pagebuilder_Sections_Embed' && (
            <SectionEmbed
              sectionContent={section}
              buttonDefaults={buttonDefaults}
            />
          )}

          {/* Gallery */}
          {section.fieldGroupName ===
          'Page_Pagebuilder_Sections_Gallery' && (
            <SectionGallery
              sectionContent={section}
              buttonDefaults={buttonDefaults}
            />
          )}

          {/* Image */}
          {section.fieldGroupName ===
          'Page_Pagebuilder_Sections_Image' && (
            <SectionImage
              sectionContent={section}
              buttonDefaults={buttonDefaults}
            />
          )}

          {/* Jumbotron */}
          {section.fieldGroupName ===
          'Page_Pagebuilder_Sections_Jumbotron' && (
            <SectionJumbotron
              sectionContent={section}
              buttonDefaults={buttonDefaults}
            />
          )}

          {/* Map */}
          {section.fieldGroupName ===
          'Page_Pagebuilder_Sections_Map' && (
            <SectionMap sectionContent={section} />
          )}

          {/* Steps */}
          {section.fieldGroupName ===
          'Page_Pagebuilder_Sections_Steps' && (
            <SectionSteps
              sectionContent={section}
              buttonDefaults={buttonDefaults}
            />
          )}
        </React.Fragment>
      ))}
    </div>
  );
}

PageBuilder.propTypes = {
  content: PropTypes.object.isRequired,
  className: PropTypes.string,
};