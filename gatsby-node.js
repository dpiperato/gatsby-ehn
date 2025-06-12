/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require(`path`);

/**
 * Create various post type pages
 *
 * See: https://github.com/gatsbyjs/gatsby-source-wordpress-experimental/blob/master/docs/tutorials/building-a-new-site-wordpress-and-gatsby.md
 */

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  const { createRedirect } = actions;

  createRedirect({ fromPath: "/our-location", toPath: "/", isPermanent: true });

  return graphql(`
    {
      allWpPressRelease {
        nodes {
          slug
        }
      }
    }
  `).then((result) => {
    result.data.allWpPressRelease.nodes.forEach((node) => {
      createPage({
        path: `/press/${node.slug}/`,
        component: path.resolve(
          `./src/templates/wordPress/pressRelease/pressRelease.jsx`
        ),
        context: {
          slug: node.slug,
        },
      });
    });
  });
};