import styled from 'styled-components';
import colors from '../Colors';

const HeaderStyled = styled.header`
  background: ${colors.earieBlack};
  color: ${colors.floralWhite};
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 1.2rem;
  height: 10vh;
  align-items: center;
  
  button {
    border-radius: 3px;
    padding: 2px 5px 1px 5px;
    border: none;
    font-weight: 300;
    background-color: ${colors.greenBlueCrayola};
    margin: 0.3rem;
    transition: .3s;
    vertical-align: middle;

    &:hover, &:focus {
      background-color: ${colors.carrotOrange};
      color: ${colors.floralWhite};
      transform: scale(1.1);
      outline: none;
    }
  }
`

export default HeaderStyled;