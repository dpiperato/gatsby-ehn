exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  return graphql(`
    {
      allWpLandingPage {
        nodes {
          slug
        }
      }
    }
  `).then((result) => {
    result.data.allWpLandingPage.nodes.forEach((node) => {
      createPage({
        path: `/${node.slug}/`,
        component: path.resolve(
          `./src/templates/wordPress/landingPage/landingPage.jsx`
        ),
        context: {
          slug: node.slug,
        },
      });
    });
  });
};
