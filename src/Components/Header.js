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


const pages = ['مدیریت', 'سبدخرید'];

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
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
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
              <MenuItem onClick={handleCloseNavMenu} style={{display:'block'}}>
                <Typography textAlign="center"  >
                  <Link to='/login'  >{pages[0]}</Link>
                </Typography>
                <Typography textAlign="center" >
                  <Link to='/cart'  ><BiCart />{pages[1]}</Link>
                </Typography>

              </MenuItem>
            </Menu>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', sm: 'flex' } }}>
            <Box
              sx={{ my: 2, color: 'white', display: 'block' }}
            >
              <Link to='/login' style={{ paddingLeft: 13 }} >{pages[0]}</Link>
              <Link to='/cart' style={{ paddingLeft: 13 }} ><BiCart />{pages[1]}</Link>

            </Box>

          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Box display={'flex'} >
              <Typography variant="h6" style={{ paddingRight: 13 }} sx={{ display: { xs: 'none', sm: 'block' } }}>دمنوش های گیاهی</Typography>
              <Link to="/"><Avatar className="logo" alt="logo" title="صفحه اصلی" src={logo} /></Link>
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
            // onClose={handleCloseUserMenu}
            >

            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
