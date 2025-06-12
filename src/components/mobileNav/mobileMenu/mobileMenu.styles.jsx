import styled from '@emotion/styled';

import * as colors from '../../../styles/modules/colors.module.scss';
import * as utilities from '../../../styles/modules/utilities.module.scss';
import rhythm from '../../../utils/rhythm';

const Styles = styled.nav((props) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignContent: 'center',
  textAlign: 'center',
  background: colors.primary,
  height: '100vh',
  minWidth: '85vw',
  padding: rhythm(1),
  position: 'fixed',
  top: 0,
  right: 0,
  zIndex: 1021,
  transition: utilities.transition,
  transform: props.open ? 'translateX(0)' : 'translateX(100%)',

  ul: {
    display: 'flex',
    flexDirection: 'column',
  },

  a: {
    color: colors.white,
    fontSize: rhythm(1),
    padding: rhythm(1 / 2),
    display: 'block',
  },
}));

export default Styles;
