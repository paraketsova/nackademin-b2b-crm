import React from 'react';
import Logo from './Logo';
import UserDataDetail from './UserDataDetail';
import styled from 'styled-components';
import colors from '../Colors';

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
  return (
    <Container>
      <Logo>B2B<span>customer</span>service</Logo>
      
      <UserDataDetail />
    </Container>
  )
}
