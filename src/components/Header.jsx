import React from 'react';
import Logo from './Logo';
import UserProfile from './UserProfile';
import styled from 'styled-components';
import colors from '../Colors';
import UserContext from '../UserContext';

const Container = styled.header`
  background: ${colors.earieBlack};
  color: ${colors.floralWhite};
  display: flex;
  justify-content: space-between;
  padding: 0.7rem 1.2rem;
  align-items: center;
  height: 90px;
`

export default function Header() {
  const user = {
    firstName: localStorage.getItem("firstName"),
    lastName: localStorage.getItem("lastName"),
    email: localStorage.getItem("email"),
  };

  return (
    <UserContext.Provider value={user}>
      <Container>
        <Logo>B2B<span>customer</span>service</Logo>
        
        <UserProfile />
      </Container>
    </UserContext.Provider>
  )
}
