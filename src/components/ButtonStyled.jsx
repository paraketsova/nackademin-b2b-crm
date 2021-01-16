import styled from 'styled-components'
import colors from '../Colors'

const ButtonStyled = styled.button `
    border-radius: 20px;
    width: 6rem;
    height: 4rem;
    padding: 5px 10px;
    border: none;
    font-weight: 500;
    background-color: ${colors.greenBlueCrayola};
    transition: .3s;
    font-size: 0.9rem;
    color: white;
    text-decoration: none;
    
    &:hover, &:focus {
        background-color: ${colors.carrotOrange};
        color: ${colors.floralWhite};
        transform: scale(1.1);
        outline: none;
    }
`
export default ButtonStyled;