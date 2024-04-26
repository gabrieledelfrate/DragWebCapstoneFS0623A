// LoginPage.js
import React from 'react';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/system';
import Navbar from '../SiteComponents/Navbar';
import Footer from '../SiteComponents/Footer';
import LoginForm from '../SiteComponents/LoginForm';
import RegistrationForm from '../SiteComponents/RegistrationForm';

const LoginPageContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: 'calc(100vh - 64px)',
});

const LoginPage = () => {
  const [isRegistering, setIsRegistering] = React.useState(false);

  return (
    <Box>
      <Navbar />
      <LoginPageContainer>
        <Typography variant="h4" gutterBottom style={{ color: '#B5BA1B' }}>
          {isRegistering ? 'Registrazione' : 'Accedi'}
        </Typography>
        {isRegistering ? <RegistrationForm /> : <LoginForm />}
        <Typography variant="body2" style={{ marginTop: '1rem' }}>
          {isRegistering ? 'Hai già un account?' : 'Non hai un account?'}{' '}
          <span
            style={{ color: '#B5BA1B', textDecoration: 'underline', cursor: 'pointer' }}
            onClick={() => setIsRegistering(!isRegistering)}
          >
            {isRegistering ? 'Accedi qui' : 'Registrati qui'}
          </span>
        </Typography>
      </LoginPageContainer>
      <Footer />
    </Box>
  );
};

export default LoginPage;
