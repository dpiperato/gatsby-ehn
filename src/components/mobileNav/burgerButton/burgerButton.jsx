import PropTypes from 'prop-types';
import React from 'react';

import Styles from './burgerButton.styles';

// Based on: https://css-tricks.com/hamburger-menu-with-a-side-of-react-hooks-and-styled-components/
const BurgerButton = ({ open, setOpen }) => {
  return (
    <Styles
      open={open}
      onClick={() => setOpen(!open)}
      aria-label={`Toggle mobile menu`}
    >
      <div />
      <div />
      <div />
    </Styles>
  );
};

BurgerButton.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
};

export default BurgerButton;
