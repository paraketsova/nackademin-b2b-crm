import styled, { css } from 'styled-components'
import colors from '../Colors'

const Button = styled.button`
  cursor: pointer;
  border-radius: 20px;
  width: 6rem;
  height: 3.5rem;
  padding: 5px 10px;
  border: none;
  font-weight: 500;
  transition: .3s;
  background-color: ${colors.greenBlueCrayola};
  font-size: 0.9rem;
  color: white;
  text-decoration: none;
  margin-bottom: 1.5rem;
  
  &:hover, &:focus {
    background-color: ${colors.carrotOrange};
    color: ${colors.floralWhite};
    transform: scale(1.1);
    outline: none;
  }

  ${props => props.small && css`
    width: auto;
    height: auto;
    border-radius: 5px;
    margin-right: 1rem;
  `}

  ${props => props.danger && css`
    background-color: ${colors.flame};
  `}
`
export default Button;