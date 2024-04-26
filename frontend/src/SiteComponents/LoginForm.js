import React, { useState } from 'react';
import { Box, Typography, TextField, Button, FormControlLabel, Checkbox } from '@mui/material';

function LoginForm() {
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);

  const handleLoginChange = (event) => {
    const { name, value } = event.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleLoginSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('https://localhost:44380/api/Users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginData),
      });

      if (!response.ok) {
        throw new Error('Errore durante il login');
      }

      alert('Login effettuato con successo!');
    } catch (error) {
      console.error('Errore durante il login:', error.message);
      alert('Si è verificato un errore durante il login. Riprova più tardi.');
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
        Accedi
      </Typography>
      <form onSubmit={handleLoginSubmit}>
        <TextField
          fullWidth
          margin="normal"
          label="Email"
          name="email"
          value={loginData.email}
          onChange={handleLoginChange}
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
          type={showPassword ? 'text' : 'password'}
          name="password"
          value={loginData.password}
          onChange={handleLoginChange}
          required
          sx={{
            '& .MuiInputBase-input': { color: '#B5BA1B' },
            '& .MuiOutlinedInput-root': { borderColor: '#B5BA1B' },
          }}
        />
        <FormControlLabel
          control={<Checkbox checked={showPassword} onChange={handleShowPassword} />}
          label="Mostra Password"
          sx={{ color: '#B5BA1B' }}
        />
        <Button variant="contained" color="primary" type="submit">
          Accedi
        </Button>
      </form>
    </Box>
  );
}

export default LoginForm;
