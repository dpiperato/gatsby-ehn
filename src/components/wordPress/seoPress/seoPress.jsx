import { useStaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

import Seo from '../../seo/seo';

const SeoPress = ({ seo, title, uri, featuredImage, noFollow, noIndex }) => {
  const { site } = useStaticQuery(
    graphql`
        query {
            site {
                siteMetadata {
                    siteUrl
                }
            }
        }
    `
  );

  return (
    <Seo
      title={seo?.title || title}
      description={seo.metaDesc}
      image={
        featuredImage
          ? `${site.siteMetadata.siteUrl}/${featuredImage}`
          : undefined
      }
      ogUrl={`${site.siteMetadata.siteUrl}/${uri}`}
      ogTitle={seo?.opengraphTitle || seo?.title || title}
      ogDescription={seo?.opengraphDescription || seo.metaDesc}
      ogImage={
        seo.opengraphImage?.localFile.publicURL || featuredImage
          ? `${site.siteMetadata.siteUrl}/${featuredImage}`
          : undefined
      }
      twitterTitle={
        seo?.twitterTitle || seo?.opengraphTitle || seo?.title || title
      }
      twitterDescription={
        seo?.twitterDescription || seo?.opengraphDescription || seo.metaDesc
      }
      twitterImage={
        seo.twitterImage?.localFile.publicURL ||
        seo.opengraphImage?.localFile.publicURL ||
        featuredImage
          ? `${site.siteMetadata.siteUrl}/${featuredImage}`
          : undefined
      }
      noIndex={noIndex || seo.noFollow}
      noFollow={noFollow || seo.noIndex}
      canonical={`${site.siteMetadata.siteUrl}/${uri}/`}
    />
  );
};

SeoPress.defaultProps = {
  noFollow: false,
  noIndex: false,
};

SeoPress.propTypes = {
  seo: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  uri: PropTypes.string.isRequired,
  featuredImage: PropTypes.string,
  noFollow: PropTypes.bool,
  noIndex: PropTypes.bool,
};

export default SeoPress;
