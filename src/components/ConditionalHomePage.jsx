import React from 'react';
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';

export default function ConditionalHomePage() {
  const token = localStorage.getItem("token");
  
  return (
    <div>
        {token ? (
          <HomePage />
        ) : (
          <LoginPage />
        )}
    </div>
  )
}
