import React from 'react';
import { Box, Typography, Link } from '@mui/material';
import { styled } from '@mui/system';

const FooterContainer = styled(Box)({
  backgroundColor: '#000',
  color: '#fff',
  padding: '2rem',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  position: 'fixed',
  bottom: 0,
  width: '100%',
});

const LeftLink = styled(Link)({
  color: '#fff',
  marginRight: '2rem',
  textDecoration: 'none',
  '&:hover': {
    color: '#B5BA1B',
  },
});

const RightText = styled(Typography)({
  color: '#fff',
  marginRight: '4rem',
});

const Footer = () => {
  return (
    <FooterContainer>
      <LeftLink href="/contact">Vuoi comunicarmi qualcosa? Contattami!</LeftLink>
      <RightText>DragWeb 2024 - Tutti i diritti riservati</RightText>
    </FooterContainer>
  );
};

export default Footer;
