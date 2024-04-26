// LayoutTablet.js
import React, { useRef } from 'react';
import { Box } from '@mui/material';

const LayoutTablet = ({ layoutRef }) => {
    const layoutContainerRef = useRef(null);
  return (
    <Box
    ref={layoutRef || layoutContainerRef}
      style={{
        width: '100%',
        height: '100%',
        maxWidth: '959px', // Imposta la larghezza massima del layout tablet a 959px
        maxHeight: '540px', // Imposta l'altezza massima del layout tablet in base al rapporto 16:9
        backgroundColor: 'white',
        border: '1px solid black',
      }}
    >
      {/* Punto di ancoraggio per il trascinamento dei componenti */}
      <Box
        position="absolute"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"
        pointerEvents="none" // Impedisce che il punto di ancoraggio interferisca con il trascinamento dei componenti
      >
        <div style={{ width: '10px', height: '10px', backgroundColor: 'red', borderRadius: '50%' }} />
      </Box>
    </Box>
  );
};

export default LayoutTablet;
