import styled from 'styled-components';
import colors from '../Colors';

const ListItemStyled = styled.div`
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

    form {
      display: flex;
      flex-direction: column;
      width: 30rem;
      align-content: space-around;
      justify-content: space-around;

      div {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 2.0rem;

        input {
          width: 15rem;
          height: 1.5rem;
        }
      }
    }

    
    button {
      border-radius: 0.5rem;
      padding: 0.3rem 0.5rem;
      border: none;
      color: ${colors.floralWhite};
      background-color: ${colors.greenBlueCrayola};
      margin: 0.5rem 0.2rem;
      transition: .3s;
      vertical-align: middle;
      font-size: 1rem;

      &:hover, &:focus {
        background-color: ${colors.carrotOrange};
        
        transform: scale(1.1);
        outline: none;
        }
  }
`

export default ListItemStyled;