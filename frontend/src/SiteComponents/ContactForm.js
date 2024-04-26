import React, { useState } from 'react';
import { Box, Typography, TextField, Button } from '@mui/material';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Logica per inviare l'email all'amministratore
    console.log(formData);
    // Resetta il modulo dopo l'invio
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <Box
      sx={{
        border: '2px solid #B5BA1B',
        padding: '1rem',
        width: '50%', // Imposta la larghezza del form al 50% della pagina
        margin: '0 auto', // Centra il form nella pagina
        marginTop: '100px', // Aggiunge uno spazio sopra il form per evitare di coprire la navbar
      }}
    >
      <Typography variant="h5" gutterBottom sx={{ color: '#B5BA1B' }}>
        Contattami
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          margin="normal"
          label="Nome"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          sx={{
            '& .MuiInputBase-input': { color: '#B5BA1B' },
            '& .MuiOutlinedInput-root': { borderColor: '#B5BA1B' }, // Imposta il colore del bordo dell'input
          }}
        />
        <TextField
          fullWidth
          margin="normal"
          label="Email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          sx={{
            '& .MuiInputBase-input': { color: '#B5BA1B' },
            '& .MuiOutlinedInput-root': { borderColor: '#B5BA1B' }, // Imposta il colore del bordo dell'input
          }}
        />
        <TextField
          fullWidth
          margin="normal"
          label="Messaggio"
          multiline
          rows={4}
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          sx={{
            '& .MuiInputBase-input': { color: '#B5BA1B' },
            '& .MuiOutlinedInput-root': { borderColor: '#B5BA1B' }, // Imposta il colore del bordo dell'input
          }}
        />
        <Button variant="contained" color="primary" type="submit" sx={{ bgcolor: '#B5BA1B', color: '#000' }}>
          Invia
        </Button>
      </form>
    </Box>
  );
}

export default ContactForm;
