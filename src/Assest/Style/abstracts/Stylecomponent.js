import styled from 'styled-components'
import { Link } from 'react-router-dom'
import AppBar from '@mui/material/AppBar';
import Card from '@mui/material/Card';
import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';



const Appstyle = styled('div')`
    a{
        text-decoration:none;
    }
   font-family: 'Iranian Sans', sans-serif !important
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


const ModalStyle = styled('div')`
   
form {
	margin:10% auto 0 auto;
	padding:30px;
	width:400px;
	height:auto;
	overflow:hidden;
	background:white;
	border-radius:10px;
}

form label {
	font-size:14px;
	color:darkgray;
	cursor:pointer;
}

form label,
form input {
	float:left;
	clear:both;
}

form input {
	margin:15px 0;
	padding:15px 10px;
	width:100%;
	outline:none;
	border:1px solid #bbb;
	border-radius:20px;
	display:inline-block;
	-webkit-box-sizing:border-box;
	   -moz-box-sizing:border-box;
	        box-sizing:border-box;
    -webkit-transition:0.2s ease all;
	   -moz-transition:0.2s ease all;
	    -ms-transition:0.2s ease all;
	     -o-transition:0.2s ease all;
	        transition:0.2s ease all;
}

form input[type=text]:focus,
form input[type="password"]:focus {
	border-color:cornflowerblue;
}

input[type=submit] {
	padding:15px 50px;
	width:auto;
	background:#1abc9c;
	border:none;
	color:white;
	cursor:pointer;
	display:inline-block;
	float:right;
	clear:right;
	-webkit-transition:0.2s ease all;
	   -moz-transition:0.2s ease all;
	    -ms-transition:0.2s ease all;
	     -o-transition:0.2s ease all;
	        transition:0.2s ease all;
}

input[type=submit]:hover {
	opacity:0.8;
}

input[type="submit"]:active {
	opacity:0.4;
}


`
export { ModalStyle }





const CarouselStyle = styled(Box)`
div{
    
  height: 20pc;
  width: 100%;
  border-radius: 10px;
  background-size: cover;
  .img1{
    background: url("https://i.pinimg.com/originals/b6/88/45/b68845a212688ba060337267ba240746.jpg");

  }
}
  
  
`
export { CarouselStyle }

const TitleStyle = styled(Typography)`
margin-right: 41px !important;
margin-bottom: 10px !important;
margin-top: 32px !important;
`
export { TitleStyle }


const PaymentStyle = styled('div')`
   /*
 * COLORS
*/
$black: rgba(0,0,0,1);
$white: rgba(255,255,255,1);

$red-1: rgba(255,53,53,1);
$red-2: rgba(255,130,130,1);
$red-3: rgba(255,162,162,1);
$red-4: rgba(255,179,179,1);

$green-1: rgba(78,196,94,1);
$green-2: lighten($green-1, 10);
$green-3: lighten($green-1, 20);
$green-4: rgba(190,240,200,1);



.wrapper{
	animation: wrapperAni 230ms ease-in 200ms forwards;
	background: $white;
	border: 1px solid rgba($black, .15);
	border-radius: 4px;
	box-shadow: 0 2px 4px rgba($black, .1);
	display: inline-block;
	height: 400px;
	margin: 0 20px;
	opacity: 0;
	position: relative;
	vertical-align: top;
	width: 300px;
}

.headerWrapper{
	height: 200px;
	overflow: hidden;
	position: relative;
	width: 100%;
}

.header{
	animation: headerAni 230ms ease-in 430ms forwards;
	border-radius: 0;
	height: 700px;
	left: -200px;
	opacity: 0;
	position: absolute;
	top: -500px;
	width: 700px;
	
	.sign{
		animation: signAni 430ms ease-in 660ms forwards;
		border-radius: 50%;
		bottom: 50px;
		display: block;
		height: 100px;
		left: calc(50% - 50px);
		opacity: 0;
		position: absolute;
		width: 100px;
	}
}

h1,
p{
	margin: 0;
}

h1{
	color: rgba($black, .8);
	font-size: 30px;
	font-weight: 700;
	margin-bottom: 10px;
	padding-top: 50px;
}

p{
	color: rgba($black, .7);
	padding: 0 40px;
	font-size: 18px;
	line-height: 1.4em;
}

button{
	background: $white;
	border: 1px solid rgba($black, .15);
	border-radius: 20px;
	bottom: -20px;
	box-shadow: 0 2px 4px rgba($black, .1);
	color: rgba($black, .7);
	cursor: pointer;
	font-family: inherit;
	font-size: 16px;
	font-weight: 600;
	height: 40px;
	left: calc(50% - 85px);
	outline: none;
	position: absolute;
	transition: all 170ms ease-in;
	width: 170px;
}

/*
 * COLOR SPECIFIC
*/
.red{
	.header{
		background-color: $red-4;
	}

	.sign{
		background-color: $red-1;
		box-shadow: 0 0 0 15px $red-2, 0 0 0 30px $red-3;

		&:before,
		&:after{
			background: $white;
			border-radius: 2px;
			content: "";
			display: block;
			height: 40px;
			left: calc(50% - 2px);
			position: absolute;
			top: calc(50% - 20px);
			width: 5px;
		}

		&:before{
			transform: rotate(45deg);
		}

		&:after{
			transform: rotate(-45deg);
		}
	}
	
	button{
		&:hover{
			border-color: $red-1;
		}

		&:focus{
			background-color: $red-4;
			border-color: $red-1;
		}
	}
}

.green{
	.header{
		background-color: $green-4;
	}

	.sign{
		background-color: $green-1;
		box-shadow: 0 0 0 15px $green-2, 0 0 0 30px $green-3;

		&:before,
		&:after{
			background: $white;
			border-radius: 2px;
			content: "";
			display: block;
			height: 40px;
			left: calc(50% - 2px);
			position: absolute;
			top: calc(50% - 20px);
			width: 5px;
		}

		&:before{
			left: calc(50% + 5px);
			transform: rotate(45deg);
			top: calc(50% - 20px);
		}

		&:after{
			height: 20px;
			left: calc(50% - 15px);
			transform: rotate(-45deg);
			top: calc(50% - 5px);
		}
	}
	
	button{
		&:hover{
			border-color: $green-1;
		}

		&:focus{
			background-color: $green-4;
			border-color: $green-1;
		}
	}
}

/*
 * ANIMATIONS
*/
@keyframes wrapperAni{
	0%{
		opacity: 0;
		transform: scale(.95) translateY(40px);
	}
	100%{
		opacity: 1;
		transform: scale(1) translateY(0);
	}
}

@keyframes headerAni{
	0%{
		border-radius: 0;
		opacity: 0;
		transform: translateY(-100px);
	}
	100%{
		border-radius: 50%;
		opacity: 1;
		transform: translateY(0);
	}
}

@keyframes signAni{
	0%{
		opacity: 0;
		transform: scale(.3) rotate(180deg);
	}
	60%{ transform: scale(1.3); }
	80%{ transform: scale(.9); }
	100%{
		opacity: 1;
		transform: scale(1) rotate(0);
	}
}

/*
 * EMBED STYLING
*/
@media (max-width: 800px){
	html,
	body{
		height: 600px;
		overflow: hidden;
		width: 800px;
	}
}
`
export { PaymentStyle }
const SidebarStyle = styled('div')`
  
    position: absolute;
padding: 10px;
    margin-top: 5%;
    display: grid;
    text-decoration: none;
.sidebaritem{   
    margin: 20px;
    text-decoration: none;
}
.sidebaritem:hover {
background-color: rgb(247, 235, 173);
border-radius: 5px;
width: 70%;
height: 50%;

}
`
export { SidebarStyle }

const CategoryStyle = styled('div')`
  
.category{
	margin-right: 10%;

}

`
export { CategoryStyle }

const FormStyle = styled('div')`
    display:'block';
`
export { FormStyle }
