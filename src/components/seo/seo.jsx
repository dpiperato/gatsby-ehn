import { useStaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import { Helmet } from 'react-helmet';

function Seo({
  description,
  lang,
  meta,
  title,
  image,
  noFollow,
  noIndex,
  ogTitle,
  ogDescription,
  ogImage,
  twitterTitle,
  twitterDescription,
  twitterImage,
}) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            siteUrl
            title
            description
            author
            social {
              twitter
            }
          }
        }
      }
    `
  );

  function decodeEntities(encodedString) {
    const translate_re = /&(nbsp|amp|quot|lt|gt|apos|bull);/g;
    const translate = {
      nbsp: ' ',
      amp: '&',
      quot: '"',
      lt: '<',
      gt: '>',
      apos: "'",
      bull: '•',
    };
    return encodedString
      .replace(translate_re, function (match, entity) {
        return translate[entity];
      })
      .replace(/&#(\d+);/gi, function (match, numStr) {
        let num = parseInt(numStr, 10);
        return String.fromCharCode(num);
      });
  }

  // Site-wide defaults
  const metaTitle = title || site.siteMetadata.title;
  const metaDescription = description || site.siteMetadata.description;
  const metaImage = image || `${site.siteMetadata.siteUrl}/favicon.png`;
  const metaOgTitle = ogTitle || metaTitle;
  const metaOgDescription = ogDescription || metaDescription;
  const metaOgImage = ogImage || metaImage;
  const metaTwitterTitle = twitterTitle || metaOgTitle;
  const metaTwitterDescription = twitterDescription || metaOgDescription;
  const metaTwitterImage = twitterImage || metaOgImage;

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={decodeEntities(metaTitle)}
      meta={[
        {
          name: `title`,
          content: decodeEntities(metaTitle),
        },
        {
          name: `description`,
          content: decodeEntities(metaDescription),
        },
        {
          property: `og:title`,
          content: decodeEntities(metaOgTitle),
        },
        {
          property: `og:description`,
          content: decodeEntities(metaOgDescription),
        },
        {
          property: `og:image`,
          content: metaOgImage,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: decodeEntities(metaTwitterTitle),
        },
        {
          name: `twitter:description`,
          content: decodeEntities(metaTwitterDescription),
        },
        {
          name: `twitter:image`,
          content: metaTwitterImage,
        },
      ].concat(meta)}
    />
  );
}

Seo.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
  image: ``,
  noFollow: false,
  noIndex: false,
  canonical: ``,
};

Seo.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string,
  image: PropTypes.string,
  noFollow: PropTypes.bool,
  noIndex: PropTypes.bool,
  canonical: PropTypes.string,
};

export default Seo;
