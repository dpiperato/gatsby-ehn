import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

const LayoutButton = ({
  buttonDefaults,
  buttonSettings,
  stretchedLink,
  className,
}) => (
  <>
    {buttonSettings !== null && (
      <>
        {buttonSettings.linkType === 'internal' && (
          <Link
            to={buttonSettings.internalLink.uri}
            className={
              stretchedLink
                ? `btn btn-success ${className} ${buttonDefaults.htmlClass ? buttonDefaults.htmlClass : ''} ${buttonSettings.htmlClass ? buttonSettings.htmlClass : ''} stretched-link`
                : `btn btn-success ${className} ${buttonDefaults.htmlClass ? buttonDefaults.htmlClass : ''} ${buttonSettings.htmlClass ? buttonSettings.htmlClass : ''}`
            }
          >
            {buttonSettings.buttonText}
          </Link>
        )}

        {buttonSettings.linkType === 'external' && (
          <a
            href={buttonSettings.externalLink}
            className={
              stretchedLink
                ? `btn btn-success ${className} ${buttonDefaults.htmlClass ? buttonDefaults.htmlClass : ''} ${buttonSettings.htmlClass ? buttonSettings.htmlClass : ''} stretched-link`
                : `btn btn-success ${className} ${buttonDefaults.htmlClass ? buttonDefaults.htmlClass : ''} ${buttonSettings.htmlClass ? buttonSettings.htmlClass : ''}`
            }
          >
            {buttonSettings.buttonText}
          </a>
        )}
      </>
    )}

    {buttonSettings === null && (
      <>
        {buttonDefaults.linkType === 'internal' && (
          <Link
            to={buttonDefaults.internalLink.uri}
            className={
              stretchedLink
                ? `btn btn-success ${className} ${buttonDefaults.htmlClass ? buttonDefaults.htmlClass : '' ? buttonDefaults.htmlClass : ''} stretched-link`
                : `btn btn-success ${className} ${buttonDefaults.htmlClass ? buttonDefaults.htmlClass : '' ? buttonDefaults.htmlClass : ''}`
            }
          >
            {buttonDefaults.buttonText}
          </Link>
        )}

        {buttonDefaults.linkType === 'external' && (
          <a
            href={buttonDefaults.externalLink}
            className={
              stretchedLink
                ? `btn btn-success ${className} ${buttonDefaults.htmlClass ? buttonDefaults.htmlClass : ''} stretched-link`
                : `btn btn-success ${className} ${buttonDefaults.htmlClass ? buttonDefaults.htmlClass : ''}`
            }
          >
            {buttonDefaults.buttonText}
          </a>
        )}
      </>
    )}
  </>
);

LayoutButton.propTypes = {
  buttonDefaults: PropTypes.object.isRequired,
  buttonSettings: PropTypes.object,
  stretchedLink: PropTypes.bool,
  className: PropTypes.string,
};

LayoutButton.defaultProps = {
  className: ``,
};

export default LayoutButton;
