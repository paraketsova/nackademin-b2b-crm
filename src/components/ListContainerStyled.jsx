import styled from 'styled-components';
import colors from '../Colors';

const ListContainerStyled = styled.div`
  display: flex;
  padding-bottom: 3rem;

  > section {
    width: 20vw; 
    align-content: center;
    justify-content: center;
    align-items: center;
    padding: 1rem;
  }

  > div {
    text-decoration: none;
    width: 50vw;    
    text-decoration: none;
    align-content: center;
    justify-content: center;

    h1 {
      color: ${colors.earieBlack};
      margin-top: 1rem;
      padding: 0.5rem;
    }

    a {
      text-decoration: none;
      color: ${colors.blackCoral};
      font-size: 1.2rem;
      padding: 0.5rem;
      display: block;

      :hover {
        background-color: ${colors.lightGrey};
        color: ${colors.carrotOrange};
        font-weight: bold;
      }
    }
  }
`

export default ListContainerStyled;