import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Box, Typography, Button, Grid } from '@mui/material';
import { styled } from '@mui/system';
import Navbar from '../SiteComponents/Navbar';
import Footer from '../SiteComponents/Footer';

const HeroSection = styled(Box)({
  marginTop: '64px',
  textAlign: 'left',
  backgroundColor: '#000',
  color: '#B5BA1B',
  padding: '4rem 0',
  width: '100%',
});

const HomeContainer = styled(Box)({
  backgroundColor: '#000',
});

const HeroTitle = styled(Typography)({
  marginBottom: '1rem',
  marginLeft: '1rem',
  fontSize: '2.5rem',
  fontFamily: 'Montserrat',
  fontWeight: 'bold',
  textAlign: 'left',
});

const HeroSubtitle = styled(Typography)({
  marginBottom: '4rem',
  marginLeft: '1rem',
  fontFamily: 'Montserrat',
  textAlign: 'left',
});

const HeroButton = styled(Button)({
  marginRight: '1rem',
  fontFamily: 'Montserrat',
  backgroundColor: '#000',
  color: '#B5BA1B',
  '&:hover': {
    backgroundColor: '#B5BA1B',
    color: '#000',
  },
});

const AnimatedSpan = styled('span')`
  opacity: ${({ show }) => (show ? 1 : 0)};
  transition: opacity 0.5s ease-in-out;
  font-weight: bold;
  font-size: 1.5rem;
`;

function Home() {
  const [showAnimatedSpan, setShowAnimatedSpan] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAnimatedSpan(true);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <HomeContainer>
      <Navbar />
      <HeroSection>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <div className="hero-content">
              <HeroTitle variant="h2" gutterBottom>
                Pronti a semplificare la progettazione della vostra prossima WebApp?
              </HeroTitle>
              <HeroSubtitle variant="body1">
                Spero proprio di si. <br />
                <AnimatedSpan show={showAnimatedSpan}>Benvenuti in DragWeb!</AnimatedSpan>
              </HeroSubtitle>
            </div>
          </Grid>
          <Grid item xs={6}>
            <div></div>
          </Grid>
          <Grid item xs={12}>
          <Link to="/whiteboard">Test Lavagna</Link>
            <HeroButton variant="contained" color="primary" className="hero-button">
            <Link to="/login">Accedi o registrati per cominciare subito la tua esperienza!</Link>
            </HeroButton>
            <HeroButton variant="contained" color="primary" className="hero-button">
              Clicca qui per scoprire tutte le funzionalità!
            </HeroButton>
          </Grid>
        </Grid>
      </HeroSection>
      <Footer />
      </HomeContainer>
  );
}

export default Home;
