import React from 'react';
import ButtonLogout from './ButtonLogout';
import styled from 'styled-components';
import colors from '../Colors';

const Container = styled.div`
  display: block;
  color: ${colors.carrotOrange};
  padding-right: 3rem;

  p {
    font-size: 0.7rem;
  }
`

export default function UserProfile() {
  const userFirstName = localStorage.getItem("firstName");
  const userLastName = localStorage.getItem("lastName");
  const userEmail = localStorage.getItem("email");

  return (
    <Container>
      👤 {userFirstName} {userLastName} 
      <p> {userEmail} </p>
      <ButtonLogout />
    </Container>
  )
}
