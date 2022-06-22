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
	position: fixed !important;
	z-index: 1 !important;
	padding-top: -11px !important;
	font-family: 'Iranian Sans', sans-serif !important;
	padding-left: 13px;

    a{
        color:white;

    }
`
export { Appbar }
const LinkHeaderStyle = styled(Link)`
padding-left: 25px;
display:flex;
`
export { LinkHeaderStyle }
const LinkResponsiveStyle = styled(Link)`
font-family: 'Iranian Sans', sans-serif !important;
padding-left: 25px;
display:flex;
margin-top:5px;
`
export { LinkResponsiveStyle }
const LogoStyle = styled(Typography)`
	font-family: 'Iranian Sans', sans-serif !important;
	padding-left: 13px;
	padding-top: 10px;

    a{
        color:white;
    }
`
export { LogoStyle }

const AvatarStyle = styled(Link)`

div{
	width: 63px !important;
	height: 50px !important;
}
img{
	width: 80% !important;
	height: 81% !important;

}
`
export { AvatarStyle }

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







const TitleStyle = styled(Typography)`
margin-right: 41px !important;
margin-bottom: 10px !important;
margin-top: 32px !important;
`
export { TitleStyle }



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



const FooterStyle = styled(Box)`
margin-top: 47px;
a {
	color: #fff;
	text-decoration: none;
  }
  
  
  
  .footer {
	  background-color: #004658;
	  color: #fff;
  }
  .footer-wave-svg {
	  background-color: transparent;
	  display: block;
	  height: 30px;
	  position: relative;
	  top: -1px;
	  width: 100%;
  }
  .footer-wave-path {
	  fill: #fffff2;
  }
  
  .footer-content {
	  margin-left: auto;
	  margin-right: auto;
	  max-width: 1230px;
	  padding: 40px 15px 450px;
	  position: relative;
	  text-align:center;
  }
  .us{
	text-align: justify !important;
	line-height: 1.78;
  }
  
  .footer-content-column {
	  box-sizing: border-box;
	  float: left;
	  padding-left: 15px;
	  padding-right: 15px;
	  width: 100%;
	  color: #fff;
  }
  
  .footer-content-column ul li a {
	color: #fff;
	text-decoration: none;
  }
  
  .footer-logo-link {
	  display: inline-block;
  }
  .footer-logo {
	height:50px;
}
  .footer-menu {
	  margin-top: 30px;
  }
  
  .footer-menu-name {
	  color: #fffff2;
	  font-size: 15px;
	  font-weight: 900;
	  letter-spacing: .1em;
	  line-height: 18px;
	  margin-bottom: 0;
	  margin-top: 0;
	  text-transform: uppercase;
  }
  .footer-menu-list {
	  list-style: none;
	  margin-bottom: 0;
	  margin-top: 10px;
	  padding-left: 0;
  }
  .footer-menu-list li {
	  margin-top: 5px;
  }
  
  .footer-call-to-action-description {
	  color: #fffff2;
	  margin-top: 10px;
	  margin-bottom: 20px;
  }
  .footer-call-to-action-button:hover {
	  background-color: #fffff2;
	  color: #00bef0;
  }
  .button:last-of-type {
	  margin-right: 0;
  }
  .footer-call-to-action-button {
	  background-color: #027b9a;
	  border-radius: 21px;
	  color: #fffff2;
	  display: inline-block;
	  font-size: 11px;
	  font-weight: 900;
	  letter-spacing: .1em;
	  line-height: 18px;
	  padding: 12px 30px;
	  margin: 0 10px 10px 0;
	  text-decoration: none;
	  text-transform: uppercase;
	  transition: background-color .2s;
	  cursor: pointer;
	  position: relative;
  }
  .footer-call-to-action {
	  margin-top: 30px;
  }
  .footer-call-to-action-title {
	  color: #fffff2;
	  font-size: 14px;
	  font-weight: 900;
	  letter-spacing: .1em;
	  line-height: 18px;
	  margin-bottom: 0;
	  margin-top: 0;
	  text-transform: uppercase;
  }
  .footer-call-to-action-link-wrapper {
	  margin-bottom: 0;
	  margin-top: 10px;
	  color: #fff;
	  text-decoration: none;
  }
  .footer-call-to-action-link-wrapper a {
	  color: #fff;
	  text-decoration: none;
  }
  
  
  
  
  
  .footer-social-links {
	  bottom: 0;
	  height: 54px;
	  position: absolute;
	  right: 0;
	  width: 236px;
  }
  
  .footer-social-amoeba-svg {
	  height: 54px;
	  left: 0;
	  display: block;
	  position: absolute;
	  top: 0;
	  width: 236px;
  }
  
  .footer-social-amoeba-path {
	  fill: #027b9a;
  }
  
  .footer-social-link.linkedin {
	  height: 26px;
	  left: 3px;
	  top: 11px;
	  width: 27px;
  }
  
  .footer-social-link {
	  display: block;
	  padding: 10px;
	  position: absolute;
  }
  
  .hidden-link-text {
	  position: absolute;
	  clip: rect(1px 1px 1px 1px);
	  clip: rect(1px,1px,1px,1px);
	  -webkit-clip-path: inset(0px 0px 99.9% 99.9%);
	  clip-path: inset(0px 0px 99.9% 99.9%);
	  overflow: hidden;
	  height: 1px;
	  width: 1px;
	  padding: 0;
	  border: 0;
	  top: 50%;
  }
  
  .footer-social-icon-svg {
	  display: block;
  }
  
  .footer-social-icon-path {
	  fill: #fffff2;
	  transition: fill .2s;
  }
  
  .footer-social-link.twitter {
	  height: 28px;
	  left: 62px;
	  top: 3px;
	  width: 31px;
	  }
  
  .footer-social-link.youtube {
	  height: 24px;
	  left: 123px;
	  top: 12px;
	  width: 26px;
	  }
  
  .footer-social-link.github {
	  height: 34px;
	  left: 172px;
	  top: 7px;
	  width: 36px;
	  }
  
  .footer-copyright {
	  background-color: #027b9a;
	  color: #fff;
	  padding: 15px 30px;
	text-align: center;
  }
  
  .footer-copyright-wrapper {
	  margin-left: auto;
	  margin-right: auto;
	  max-width: 1200px;
  }
  
  .footer-copyright-text {
	color: #fff;
	  font-size: 13px;
	  font-weight: 400;
	  line-height: 18px;
	  margin-bottom: 0;
	  margin-top: 0;
  }
  
  .footer-copyright-link {
	  color: #fff;
	  text-decoration: none;
  }
  
  
  
  
  
  
  
  /* Media Query For different screens */
  @media (min-width:320px) and (max-width:479px)  { /* smartphones, portrait iPhone, portrait 480x320 phones (Android) */
	.footer-content {
	  margin-left: auto;
	  margin-right: auto;
	  max-width: 1230px;
	  padding: 40px 15px 806px;
	  position: relative;
	}
	.footer-logo {
		margin-top: 33px;
	}

  }
  @media (min-width:480px) and (max-width:599px)  { /* smartphones, Android phones, landscape iPhone */
	.footer-content {
	  margin-left: auto;
	  margin-right: auto;
	  max-width: 1230px;
	  padding: 40px 15px 753px;
	  position: relative;

	  
	}
	
	.footer-logo {
		margin-top: 33px;
	}
  }
  @media (min-width:600px) and (max-width: 800px)  { /* portrait tablets, portrait iPad, e-readers (Nook/Kindle), landscape 800x480 phones (Android) */
	.footer-content {
	  margin-left: auto;
	  margin-right: auto;
	  max-width: 1230px;
	  padding: 40px 15px 721px;
	  position: relative;
	}
	.footer-logo {
		margin-top: 33px;
	}
  }
  @media (min-width:801px)  { /* tablet, landscape iPad, lo-res laptops ands desktops */
  
  }
  @media (min-width:1025px) { /* big landscape tablets, laptops, and desktops */
  
  }
  @media (max-width:750px) { 
	.us{
		padding-left: 37px;
	}
  
  }
  
  
  
  
  @media (min-width: 760px) {
	.footer-content {
		margin-left: auto;
		margin-right: auto;
		max-width: 1230px;
		padding: 40px 15px 450px;
		position: relative;
	}
  
	.footer-wave-svg {
		height: 50px;
	}
  
	.footer-content-column {
		// width: 24.99%;
		width: 32.99%;
	}
  }
  @media (min-width: 568px) {
	/* .footer-content-column {
		width: 49.99%;
	} */
  }
  
	`
export { FooterStyle }
const CarouselStyle = styled('div')`
    position:relative;
	h3{
		position: absolute;
		right: 8px;
		bottom: 68px;
		color: white;
	}
    span{
		bottom: 12px;
		position: absolute;
		right: 0px;
		display: inline-block;
	}
	button{
		border: none;
		background: #004658;
		color: white;
		fontSize: 22px;
		padding: 5px 10px;
		borderRadius: 10px;
		margin: 0 10px;
		border-radius: 19px;
		cursor: pointer;
	}
@media (min-width:320px) and (max-width:479px)  { 
	img{
		height:28vh;
	}
	h3{
		bottom: 34px;
		font-size: 12px;
	}
}
@media (min-width:480px) and (max-width:599px)  { 
	img{
		height:48vh;
	}
}
@media (min-width:600px) and (max-width: 800px)  { 
	img{
		height:60vh;
	}
}
@media (min-width:800px) { 
	img{
		height:90vh;
	}
}
`
export { CarouselStyle }

const NeonStyle = styled(Link)`
    h6{
		animation: neon 3s infinite;
	}
	@keyframes neon{
		0%, 39%, 41%, 59%, 61%, 100%{
			text-shadow:
			white 0 0 12px,
			#b3d414 0 0 24px,
			#b3d414 0 0 36px;
		}
		40%,60%{
			text-shadow:none;
		}
	}
`
export { NeonStyle }

const HomeStyle = styled(Box)`

text-align:center !important;
text-align: -moz-center !important;
`
export { HomeStyle }

const MOdalOrderStyle = styled(Box)`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	width: 50%;
	background-color: white;
	boxShadow: 24px;
	padding: 40px;
`
export { MOdalOrderStyle }

const DescriptionStyle = styled(Box)`

height: 375px;
background-color: #b7edfb;
border-radius: 5px;
padding: 24px;
line-height: 29px;
`
export { DescriptionStyle }
