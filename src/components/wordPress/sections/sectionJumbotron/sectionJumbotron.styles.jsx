import styled from '@emotion/styled';

import rhythm from '../../../../utils/rhythm';

const Styles = styled.section({
  position: 'relative',
  overflow: 'hidden',
  minHeight: '50vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',

  '.container': {
    paddingTop: rhythm(4),
    paddingBottom: rhythm(4),
  },
});

export default Styles;
