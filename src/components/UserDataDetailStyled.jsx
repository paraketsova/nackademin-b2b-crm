import styled from 'styled-components';
import colors from '../Colors';

const UserDataDetailStyled = styled.div`


display: block;
color: ${colors.carrotOrange};
padding-right: 3rem;

p {
  font-size: 0.7rem;
}

button {
  border-radius: 0.5rem;
  padding: 0.5rem ;
  border: none;
  font-weight: 300;
  color: ${colors.floralWhite};
  background-color: ${colors.greenBlueCrayola};
  margin: 0.3rem;
  transition: .3s;
  vertical-align: middle;

  &:hover, &:focus {
    background-color: ${colors.carrotOrange};
    
    transform: scale(1.1);
    outline: none;
  }

`

export default UserDataDetailStyled;