import styled from 'styled-components';
import colors from '../Colors';

const HeaderStyled = styled.header`
  background: ${colors.earieBlack};
  color: ${colors.floralWhite};
  display: flex;
  justify-content: space-between;
  padding: 0.7rem 1.2rem;
  align-items: center;
  height: 90px;
`

export default HeaderStyled;