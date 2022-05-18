import styled from 'styled-components'
import { Link } from 'react-router-dom'
import AppBar from '@mui/material/AppBar';
import Card from '@mui/material/Card';
import { Box } from '@mui/material';


const Appstyle = styled('div')`
    a{
        text-decoration:none;
    }
`
export { Appstyle }

const Appbar = styled(AppBar)`
    background-color: rgba(0,0,0,.5)  !important;
    transition: background-color .2s ease; 
    color:white !importnat;
    a{
        color:white;
    }
`
export { Appbar }

const Cardstyle = styled(Card)`
    margin:11px;

        img{
            height: initial;
        }
`
export { Cardstyle }

//public style
const Linkstyle = styled(Link)`
    color:black;
    text-decoration: none;

`
export { Linkstyle }

//component login
const Loginstyle = styled(Box)`
background-image: url('./bg.jpg') !important;
background-size: cover;
width: 100%;
height: 100vh;
form{

    position: relative;
    z-index: 1;
    background-color: rgba(0,0,0,.5) ;
    border-radius: 10px;
    max-width: 360px;
    margin: 0 auto 100px;
    padding: 45px;
    text-align: center;
    
    
    input {
    outline: 0;
    background: #f2f2f2;
    width: 100%;
    border: 0;
    border-radius: 5px;
    margin: 0 0 15px;
    padding: 15px;
    box-sizing: border-box;
    font-size: 14px;
    font-family: 'Comfortaa', cursive;
    &:focus {
        background: #dbdbdb;
      }
    }    
    button {
        font-family: 'Comfortaa', cursive;
        text-transform: uppercase;
        outline: 0;
        background: #4b6cb7;
        width: 100%;
        border: 0;
        border-radius: 5px;
        padding: 15px;
        color: #FFFFFF;
        font-size: 14px;
        -webkit-transition: all 0.3 ease;
        transition: all 0.3 ease;
        cursor: pointer;
        margin-bottom: 18px;
        &:active {
            background: #395591;
          }  
    }
    span {
        font-size: 75px;
        color: #4b6cb7;
      }
      a{
        color: white;
        width: 100%;
        display: block;
        text-align: left;
        text-decoration:none;
      }
}
`
export { Loginstyle }


const TextFild = styled('input')`
width: 50px;
height: 22px;
padding: -1px;
margin: 9px;
`

export { TextFild }
