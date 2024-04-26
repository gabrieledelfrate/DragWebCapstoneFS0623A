import React from 'react';
import { AppBar, Toolbar, IconButton, Button } from '@mui/material';
import { styled } from '@mui/system'; 
import { Link } from 'react-router-dom';

const NavbarWrapper = styled(AppBar)({
  backgroundColor: '#B5BA1B', 
  width: '100%',
});

const LogoWrapper = styled('div')({
  marginRight: '8px',
  borderRadius: '50%',
  backgroundColor: 'white',
});

const LogoImage = styled('img')({
  width: '5rem',
  height: '5rem',
  borderRadius: '50%',
});

const TitleLink = styled(Link)({
  flexGrow: 1,
  color: 'black',
  textDecoration: 'none',
  fontWeight: 'bold',
  fontFamily: 'Montserrat',
});

const ButtonLink = styled(Button)({
  color: 'black',
  marginRight: '8px',
  fontFamily: 'Montserrat',
});

function Navbar() {
  return (
    <NavbarWrapper position="fixed">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="logo" component={Link} to="/">
          <LogoWrapper>
          <LogoImage src="LogoDragWeb.png" alt="Logo" />
          </LogoWrapper>
        </IconButton>
        <TitleLink to="/">DragWeb</TitleLink>
        <ButtonLink component={Link} to="/login">Login</ButtonLink>
        <ButtonLink component={Link} to="/faq">Help</ButtonLink>
      </Toolbar>
    </NavbarWrapper>
  );
}

export default Navbar;