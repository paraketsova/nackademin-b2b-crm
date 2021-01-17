import styled, { css } from 'styled-components'
import colors from '../Colors'

const Button = styled.button`
  cursor: pointer;
  border-radius: 10px;
  padding: 15px 15px;
  border: none;
  font-weight: 500;
  transition: .3s;
  background-color: ${colors.carrotOrange};
  font-size: 0.9rem;
  color: white;
  text-decoration: none;
  
  &:hover, &:focus {
    color: ${colors.floralWhite};
    transform: scale(1.1);
    outline: none;
  }

  ${props => props.small && css`
    background-color: ${colors.greenBlueCrayola};
    width: auto;
    height: auto;
    border-radius: 5px;
    padding: 5px 10px;
    margin-right: 1rem;
  `}

  ${props => props.danger && css`
    background-color: ${colors.flame};
  `}
`
export default Button;