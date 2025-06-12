/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

const postscribe = require('postscribe');

exports.onRouteUpdate = () => {
  postscribe(
    '#legitscripts',
    "<script src='https://static.legitscript.com/seals/4142830.js'></script>"
  );
};
