import styled from 'styled-components';
import Button from '@material-ui/core/Button';

export const LogoContainer = styled.div `

    margin: 0 auto;
    display: flex;
    width: 16vw;
    height: 11vh;
    max-width: 1    6vw;
    max-height: 12vh;
    background-color: #fff;
    -webkit-border-bottom-right-radius: 45px;
    -webkit-border-bottom-left-radius: 45px;
    -moz-border-radius-bottomright: 45px;
    -moz-border-radius-bottomleft: 45px;
    border-bottom-right-radius: 45px;
    border-bottom-left-radius: 45px;
`

export const Logo = styled.div `

    margin: auto;
    width: 3vw;
    height: 6vh;
    background-color: #5F41B6;
    -webkit-border-radius: 11px;
    -moz-border-radius: 11px;
    border-radius: 11px;
    display: flex;
    justify-content: center;

    p{
        font-family: 'Montserrat', sans-serif;
        font-weight: 800;
        color: #FFEE00;
        text-shadow: #FFEE00 0px 0px;
        font-size: 150%;
        text-align: center;
    }

`
export const MenuBar = styled.div `

    width: 100vw;
    height: 8vh;
    display: flex;
    flex-direction: row;
`

export const MenuLinks = styled.nav`

    color: #fff;

    ul{
        margin-left: 9vw;
        margin-top: 4vh;
    }


    li{
        text-decoration: none;
        list-style-type: none;
        display: inline;
        margin-left: 3.5vw;
        font-family: 'Montserrat', sans-serif;
        font-weight: 300;
        font-size: 70%;
    }

    a:hover {
        text-decoration: underline;
    }
`

export const MainText = styled.div `

    display: flex;
    flex-direction: column;
    min-height: 26vh;
    justify-content: center;
    padding: 2vh;

    h1{
        margin: 0 auto;
        text-align: center;
        font-size: 200%;
        font-weight: bold;
        margin-top: 8vh;
    }

    p{
        margin: 0 auto;
        text-align: center;
        max-width: 40%;
        padding-top: 1.5vh;
        font-size: 75%;
    }
`

export const ObjectsContainer = styled.div `

    width: 65vw;
    margin: 0 auto;
    margin-bottom: 2vh;

    svg{
        width: 90%;
    }
`

export const ButtonsContainer = styled.div`

    width: 30vw;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-self: center;
    margin-top: 2vh;
`

export const SignUpButton = styled(Button) `

    &&{
        background-color: transparent;
        color: #fff;
        width: 13vw;
        border: thin solid white;
        -webkit-border-radius: 45px;
        -moz-border-radius: 45px;
        border-radius: 45px;
    }

    &&.MuiButton-root{
        text-transform: capitalize;
        line-height: 1.5;
        font-family: 'Montserrat', sans-serif;
        }
`

export const LoginButton = styled(Button)`

    &&{
        background-color: white;
        color: #4621AD;
        width: 13vw;
        border: thin solid white;
        -webkit-border-radius: 45px;
        -moz-border-radius: 45px;
        border-radius: 45px;
    }

    &&.MuiButton-root{
        text-transform: capitalize;
        font-family: 'Montserrat', sans-serif;
        line-height: 1.5;
    }

    &&:focus{
        background-color: white;
        color: #4621AD;
    }

`