import * as breakpoints from '../styles/modules/breakpoints.module.scss';

/*
 * Responsive breakpoints and media queries
 */
const responsive = {
  // Breakpoints
  mobile: `(min-width: ${breakpoints.xs})`,
  phablet: `(min-width: ${breakpoints.sm})`,
  tablet: `(min-width: ${breakpoints.md})`,
  desktop: `(min-width: ${breakpoints.lg})`,
  hd: `(min-width: ${breakpoints.xl})`,

  // Media queries
  get Mobile() {
    return `@media ${this.mobile}`;
  },
  get Phablet() {
    return `@media ${this.phablet}`;
  },
  get Tablet() {
    return `@media ${this.tablet}`;
  },
  get Desktop() {
    return `@media ${this.desktop}`;
  },
  get Hd() {
    return `@media ${this.hd}`;
  },
};

export default responsive;
