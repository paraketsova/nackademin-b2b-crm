import React from 'react';
import HeaderStyled from './HeaderStyled'
import Logo from './Logo';
import LogOut from './LogOut';
import UserDataDetail from './UserDataDetail';

export default function Header() {
  return (
    <div>
      <HeaderStyled>
        <Logo>B2B<span>customer</span>service</Logo>
        <LogOut />
        <UserDataDetail />
      </HeaderStyled>
      
    </div>
  )
}
