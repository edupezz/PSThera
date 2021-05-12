import React from 'react';

import { GlobalStyled } from './GlobalStyle';

import styled from 'styled-components';

import useWindowSize from './hooks/WindowSize';
import MobileHeader from './components/MobileHeader';
import backgroundIMG from './assets/1.png';
import objects from './assets/objects';

import {
  ObjectsContainer,
  ButtonsContainer,
  LogoContainer,
  SignUpButton,
  LoginButton,
  MenuLinks,
  MainText,
  MenuBar,
  Logo
} from './styles'

const AppContainer = styled.main `

  width: 100vw;
  height: 100vh;
  background-image: url(${backgroundIMG});
  background-size: cover;
  background-origin: border-box;
  background-position: 0% 0%;
  background-repeat: no-repeat;
`

const AppContainerColorMask = styled.div `

  width: 100vw;
  height: 100vh;
  background-color: #4621AD;
  opacity: 0.83;
  display: flex;
  flex-direction: column;
`

function App() {

  const size = useWindowSize();
  const screen = size.width;
  console.log(size)

  return (
    <>
      <GlobalStyled />
      {screen <= 500 ? <MobileHeader screen={screen} /> : ""} 
        <AppContainer>
          <AppContainerColorMask>
            {screen <= 500 ?
              "" : 
              <LogoContainer>
                <Logo>
                  <p>L</p>
                </Logo>
              </LogoContainer>
            }
            <MenuBar>
              <MenuLinks>
                <ul>
                  <li><a href="#">HOME</a></li>
                  <li><a href="#">ARTICLES</a></li>
                  <li><a href="#">AUDIO</a></li>
                </ul>
              </MenuLinks>
            </MenuBar>
            <MainText>
              <h1>Join us today</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </MainText>
            <ObjectsContainer>
              {objects}
            </ObjectsContainer>
            <ButtonsContainer>
              <SignUpButton>Sign Up</SignUpButton>
              <LoginButton>Login</LoginButton>
            </ButtonsContainer>
          </AppContainerColorMask>
        </AppContainer>
    </>
  );
}

export default App;