import React, { useState } from 'react';
import { Box, Typography, TextField, Button } from '@mui/material';

function RegisterForm() {
  const [registerData, setRegisterData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleRegisterChange = (event) => {
    const { name, value } = event.target;
    setRegisterData({ ...registerData, [name]: value });
  };

  const handleRegisterSubmit = async (event) => {
    event.preventDefault();
    
    try {
      const response = await fetch('https://localhost:44380/api/Users/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(registerData),
      });
  
      if (!response.ok) {
        throw new Error('Errore durante la registrazione');
      }
  
      setRegisterData({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
      });
  
      alert('Registrazione completata con successo!');
    } catch (error) {
      console.error('Errore durante la registrazione:', error.message);
      alert('Si è verificato un errore durante la registrazione. Riprova più tardi.');
    }
  };
  

  return (
    <Box
      sx={{
        border: '2px solid #B5BA1B',
        padding: '1rem',
        width: '50%',
        margin: '0 auto',
        marginTop: '100px',
      }}
    >
      <Typography variant="h5" gutterBottom sx={{ color: '#B5BA1B' }}>
        Registrati
      </Typography>
      <form onSubmit={handleRegisterSubmit}>
        <TextField
          fullWidth
          margin="normal"
          label="Nome"
          name="firstName"
          value={registerData.firstName}
          onChange={handleRegisterChange}
          required
          sx={{
            '& .MuiInputBase-input': { color: '#B5BA1B' },
            '& .MuiOutlinedInput-root': { borderColor: '#B5BA1B' },
          }}
        />
        <TextField
          fullWidth
          margin="normal"
          label="Cognome"
          name="lastName"
          value={registerData.lastName}
          onChange={handleRegisterChange}
          required
          sx={{
            '& .MuiInputBase-input': { color: '#B5BA1B' },
            '& .MuiOutlinedInput-root': { borderColor: '#B5BA1B' },
          }}
        />
        <TextField
          fullWidth
          margin="normal"
          label="Email"
          type="email"
          name="email"
          value={registerData.email}
          onChange={handleRegisterChange}
          required
          sx={{
            '& .MuiInputBase-input': { color: '#B5BA1B' },
            '& .MuiOutlinedInput-root': { borderColor: '#B5BA1B' },
          }}
        />
        <TextField
          fullWidth
          margin="normal"
          label="Password"
          type="password"
          name="password"
          value={registerData.password}
          onChange={handleRegisterChange}
          required
          sx={{
            '& .MuiInputBase-input': { color: '#B5BA1B' },
            '& .MuiOutlinedInput-root': { borderColor: '#B5BA1B' },
          }}
        />
        <TextField
          fullWidth
          margin="normal"
          label="Conferma Password"
          type="password"
          name="confirmPassword"
          value={registerData.confirmPassword}
          onChange={handleRegisterChange}
          required
          sx={{
            '& .MuiInputBase-input': { color: '#B5BA1B' },
            '& .MuiOutlinedInput-root': { borderColor: '#B5BA1B' },
          }}
        />
        <Button variant="contained" color="primary" type="submit">
          Registrati
        </Button>
      </form>
    </Box>
  );
}

export default RegisterForm;
