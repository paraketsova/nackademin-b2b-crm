import React, { useContext } from 'react';
import ButtonLogout from './ButtonLogout';
import styled from 'styled-components';
import colors from '../Colors';
import UserContext from '../UserContext';

const Container = styled.div`
  display: block;
  color: ${colors.carrotOrange};
  padding-right: 3rem;

  p {
    font-size: 0.7rem;
  }
`

export default function UserProfile() {
  const user = useContext(UserContext);

  return (
    <Container>
      👤 {user.firstName} {user.lastName} 
      <p> {user.email} </p>
      <ButtonLogout />
    </Container>
  )
}
