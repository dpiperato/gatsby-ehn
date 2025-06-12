import * as utilities from '../styles/modules/utilities.module.scss';

/*
 * Replacement for typography.js rhythm function
 */
function rhythm(multiplier) {
  let spacer = utilities.spacer;
  spacer = parseFloat(spacer.split('r')[0]);

  // Todo: write proper casting and int/float + math logic for fractions
  /* eslint-disable no-eval */
  return `${eval(multiplier) * spacer}rem`;
  /* eslint-enable no-eval */
}

export default rhythm;
