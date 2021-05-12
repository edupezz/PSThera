import { createGlobalStyle } from "styled-components";

import backgroundIMG from './assets/1.png'

export const GlobalStyled = createGlobalStyle`

html{
    font-size: 1em;
}

body {
    margin: 0;
    padding: 0;
    outline: 0;
    width: 100%;
    color: white;
    font-family: 'Montserrat', sans-serif;
}

a, a:active, :focus{
    color: #fff;
    text-decoration: none;
}

li {
  list-style-type: none;
}
`