// LayoutMobile.js
import React, { useRef } from 'react';
import { Box } from '@mui/material';

const LayoutMobile = ({ layoutRef }) => {
    const layoutContainerRef = useRef(null);
  return (
    <Box
    ref={layoutRef || layoutContainerRef}
      style={{
        width: '100%',
        height: '100%',
        maxWidth: '500px', // Imposta la larghezza massima del layout mobile a 500px
        maxHeight: '888px', // Imposta l'altezza massima del layout mobile in base al rapporto 9:16
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

export default LayoutMobile;
