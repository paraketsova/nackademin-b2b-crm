import styled from 'styled-components'
import colors from '../Colors'

const ButtonStyled = styled.button `
    border-radius: 15px;
    width: 5rem;
    height: 4rem;
    padding: 5px 10px;
    border: none;
    font-weight: 500;
    background-color: ${colors.jet};
    margin: 0.7rem;
    transition: .3s;
    font-size: .9rem;
    color: ${colors.earieBlack};
    text-decoration: none;
    
    &:hover, &:focus {
        background-color: ${colors.carrotOrange};
        color: ${colors.floralWhite};
        transform: scale(1.1);
        outline: none;
    }
`
export default ButtonStyled;