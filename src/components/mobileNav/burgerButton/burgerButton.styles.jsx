import styled from '@emotion/styled';

import * as colors from '../../../styles/modules/colors.module.scss';
import * as utilities from '../../../styles/modules/utilities.module.scss';
import rhythm from '../../../utils/rhythm';

const Styles = styled.button((props) => ({
  position: 'fixed',
  top: rhythm(1 / 2),
  right: rhythm(1 / 2),
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-around',
  width: rhythm(1),
  height: rhythm(1),
  background: 'transparent',
  border: 'none',
  cursor: 'pointer',
  padding: 0,
  zIndex: '1022',

  '&:focus': {
    outline: 'none',
  },

  div: {
    width: rhythm(1),
    height: rhythm(1 / 9),
    background: props.open ? colors.white : colors.primary,
    transition: utilities.transition,
    position: 'relative',
    transformOrigin: '1px',

    '&:nth-of-type(1)': {
      transform: props.open ? 'rotate(45deg)' : 'rotate(0)',
    },
    '&:nth-of-type(2)': {
      transform: props.open ? `translateX(${rhythm(1)})` : 'translateX(0)',
      opacity: props.open ? 0 : 1,
    },
    '&:nth-of-type(3)': {
      transform: props.open ? 'rotate(-45deg)' : 'rotate(0)',
    },
  },
}));

export default Styles;
