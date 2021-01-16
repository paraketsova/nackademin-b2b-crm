import styled from 'styled-components';

// Main wrapper for pages with list 'card' in the middle.
const ContainerStyled = styled.div `
  height: 20rem;
  width: 30rem;
  display: inline-flex;
  margin:  3rem 25rem;
  justify-content: space-around;
  align-items: center;
  border: solid;
  padding: 0 0;
  
  

  & > div {
    max-height: 80vh;
    width: 50vw;
    overflow: scroll;
    overflow-x: hidden;
  }
  `
export default ContainerStyled;