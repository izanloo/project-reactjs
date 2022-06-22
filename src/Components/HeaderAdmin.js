import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import MenuItem from '@mui/material/MenuItem';
import { BiCart, BiMenu } from "react-icons/bi";
import logo from '../Assest/Images/logo.png'
import { Link } from 'react-router-dom';
import { Appbar, LinkHeaderStyle, AvatarStyle, LogoStyle, LinkResponsiveStyle,NeonStyle } from '../Assest/Style/abstracts/Stylecomponent'


const pages = ['کالاها', ' موجودی و قیمت', 'سفارشات','بازگشت به سایت'];

const ResponsiveAppBar = () => {

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <Appbar className='AppBar' position="static" >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', sm: 'flex' } }}>
            <Box
              sx={{ my: 2, color: 'white', display: 'flex' }}
            >
              <LinkHeaderStyle to='/paneladmin/product' style={{ marginTop: '11px' }} ><p style={{ marginTop: '7px' }}>{pages[0]}</p></LinkHeaderStyle>
              <LinkHeaderStyle to='/paneladmin/inventory' style={{ paddingTop: '2px' }} ><p>{pages[1]}</p></LinkHeaderStyle>
              <LinkHeaderStyle to='/paneladmin/orders' style={{ paddingTop: '2px' }} ><p>{pages[2]}</p></LinkHeaderStyle>
              <LinkHeaderStyle to='/' style={{ paddingTop: '2px' }} ><p>{pages[3]}</p></LinkHeaderStyle>
            </Box>

          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'block', sm: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >

              <BiMenu />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', sm: 'none', md: 'none' },
              }}
            >

              
              <MenuItem onClick={handleCloseNavMenu} style={{ display: 'block' }}>
                <Typography textAlign="center"  >
                  <LinkResponsiveStyle to='/paneladmin/product' style={{ textDecoration: 'none' }}  >{pages[0]}</LinkResponsiveStyle>
                </Typography>
                <Typography textAlign="center" >
                  <LinkResponsiveStyle to='/paneladmin/orders' style={{ textDecoration: 'none' }} mt={3} >{pages[1]}</LinkResponsiveStyle>
                </Typography>
                <Typography textAlign="center" >
                  <LinkResponsiveStyle to='/paneladmin/inventory' style={{ textDecoration: 'none' }} mt={3} >{pages[2]}</LinkResponsiveStyle>
                </Typography>
                <Typography textAlign="center" >
                  <LinkResponsiveStyle to='/' style={{ textDecoration: 'none' }} mt={3} >{pages[3]}</LinkResponsiveStyle>
                </Typography>
              </MenuItem>
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Box display={'flex'} style={{ marginTop: '-13px' }} >
              <NeonStyle to='/'> <LogoStyle variant="h6" sx={{ display: { xs: 'none', sm: 'block' } }}>دمنوش کده</LogoStyle></NeonStyle>
              <AvatarStyle to="/"><Avatar className="logo" alt="logo" title="صفحه اصلی" src={logo} /></AvatarStyle>
            </Box>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
            >
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </Appbar>
  );
};
export default ResponsiveAppBar;