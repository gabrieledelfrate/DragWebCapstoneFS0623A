// LoginSample.js

import React, { useState } from 'react';
import { Box, Typography, TextField, Button } from '@mui/material';
import { useDrag } from 'react-dnd';
import { DragItemTypes } from '../constants/DragItemTypes';

function LoginSample() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [{ isDragging }, drag] = useDrag({
    type: DragItemTypes.COMPONENT,
    item: { componentName: 'LoginSample' },
    canDrag: () => !formData.email && !formData.password, // Controllo per impedire il trascinamento durante la compilazione del form
    collect: monitor => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // gestione login
    console.log(formData);
    // reset modulo
    setFormData({
      email: '',
      password: '',
    });
  };

  return (
    <Box ref={drag} style={{ opacity: isDragging ? 0.5 : 1, cursor: 'move' , position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: '1000' }}>
      <Typography variant="h5" gutterBottom>
        Login
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          margin="normal"
          label="Email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <TextField
          fullWidth
          margin="normal"
          label="Password"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <Button variant="contained" color="primary" type="submit">
          Login
        </Button>
      </form>
    </Box>
  );
}

export default LoginSample;
