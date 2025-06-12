import styled from '@emotion/styled';

import rhythm from '../../../../utils/rhythm';

const Styles = styled.div((props) => ({
  width: '100%',
  height: `${props.height}vh`,

  svg: {
    height: rhythm(1),
    width: rhythm(1),
    transform: `translate(-${rhythm(1 / 2)}, -${rhythm(1 / 2)})`,
  },
}));

export default Styles;
