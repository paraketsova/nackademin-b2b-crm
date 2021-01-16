import styled from 'styled-components'
import colors from '../Colors'

const ButtonSmallStyled = styled.button `
  border-radius: 0.5rem;
  padding: 0.3rem 0.5rem;
  border: none;
  color: ${colors.floralWhite};
  background-color: ${colors.greenBlueCrayola};
  margin: 0.3rem;
  transition: .3s;
  vertical-align: middle;

  &:hover, &:focus {
    background-color: ${colors.carrotOrange};
    
    transform: scale(1.1);
    outline: none;
`
export default ButtonSmallStyled;