// Based on: https://www.gatsbyjs.com/docs/adding-search-with-algolia/
const recordsQuery = `{
  allWpCollab {
    edges {
      node {
        id
        slug
        title
        seo {
          metaDesc
          metaTitle
        }
        featuredImage {
          node {
            localFile {
              publicURL
            }
          }
        }
        artists {
          nodes {
            name
          }
        }
      }
    }
  }
  allShopifyProduct {
    edges {
      node {
        handle
        description
        title
        vendor
        images {
          localFile {
            publicURL
          }
        }
      }
    }
  }
}`;

const collabToAlgoliaRecord = ({ node }) => {
  return {
    objectID: node.id,
    title: node.title,
    description: node.seo.metaDesc,
    artists: node.artists.nodes.map((n) => n.name),
    vendor: null,
    images: [node.featuredImage.node.localFile.publicURL],
    slug: node.slug,
    type: 'collab',
  };
};

const productToAlgoliaRecord = ({ node }) => {
  return {
    objectID: node.id,
    title: node.title,
    description: node.description,
    artists: [],
    vendor: node.vendor,
    images: node.images.map((i) => i.localFile.publicURL),
    slug: node.handle,
    type: 'product',
  };
};

const queries = [
  {
    query: recordsQuery,
    transformer: ({ data }) => {
      const records = [];
      records.push(...data.allWpCollab.edges.map(collabToAlgoliaRecord));
      records.push(...data.allShopifyProduct.edges.map(productToAlgoliaRecord));

      return records;
    }, // optional
    indexName: 'resources',
    enablePartialUpdates: true,
    matchFields: [
      'title',
      'description',
      'images',
      'vendor',
      'artists',
      'slug',
      'type',
    ],
    settings: {
      searchableAttributes: ['title', 'vendor', 'description', 'artists'],
      attributesForFaceting: [],
    }, // overrides main index name, optional
  },
];

module.exports = queries;
