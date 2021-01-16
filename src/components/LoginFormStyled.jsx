import styled from 'styled-components';
import colors from '../Colors';

// Main wrapper for pages with list 'card' in the middle.
const LoginFormStyled = styled.div `
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translateY(-50%) translateX(-50%);
  width: 30rem;
  border-radius: 3px;
  background-color: #272E38;
  line-height: 1.4;
  font-size: 0.8em;
  
  font-family: arial, helvetica, sans-serif;
  box-sizing: border-box;
  overflow: hidden;
  .denied & {
    animation: shake 0.35s normal forwards ease-in-out;
  }

  header {
    background-color: #202731;
    color: #C5C6C8;
    display: block;
    padding: 1.5em;
    text-align: center;
    color: ${colors.floralWhite};
  }

  div {
    position: relative;
    display: block;
    margin: 2em auto;
    border-bottom: 1px solid ${colors.carrotOrange};;
    border-radius: 3px;
    width: 20rem;
    padding-left: 20px;

    input {
      width: 100%;
      color: ${colors.floralWhite};
      font-size: 0.4rem
      line-height: 2;
      background-color: transparent;
      border: none;
      padding: .6em .5em;
      outline: 0;
      &::-webkit-input-placeholder, &::-moz-placeholder, &:-ms-input-placeholder {
        color: #9EA2AB;
      }
    }

    &:before {
      font-family: FontAwesome;
      position: absolute;
      display: inline-block;
      top: 9px;
      left: 8px;
      font-size: 10px;
      color: #FC7148;
    }
    &:nth-child(1):before {
      content: "👤";
    }
    &:nth-child(2):before {
      content: "🔒";
    }
  }

  button {
    outline: 0;
    font-size: 1em;
    font-weight: bold;
    letter-spacing: 0.1em;
    background-color: ${colors.carrotOrange};
    color: ${colors.floralWhite};
    border: none;
    border-radius: 3px;
    width: 200px;
    padding: 1.2em 0;
    margin: 4em auto;
    display: block;
    border-top: 2px solid transparent;
    border-bottom: 2px solid transparent;
    transition: .3s;
    vertical-align: middle;

  &:hover, &:focus {
    background-color: ${colors.carrotOrange};
    
    transform: scale(1.1);
    outline: none;
  }


  
  


  `
export default LoginFormStyled;