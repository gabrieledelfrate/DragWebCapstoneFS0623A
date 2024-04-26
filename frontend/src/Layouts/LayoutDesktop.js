// LayoutDesktop.js
import React, { useRef } from 'react';
import { Box } from '@mui/material';

const LayoutDesktop = ({ layoutRef }) => {
    const layoutContainerRef = useRef(null);
  return (
    <Box
      ref={layoutRef ? layoutRef : layoutContainerRef}
      style={{
        width: '100%',
        height: '100%',
        maxWidth: '100%', //100% della larghezza del viewport
        maxHeight: 'calc(100vh - 100px)', // Imposta l'altezza massima del layout desktop in base all'altezza del viewport meno 100px per altri elementi
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
        pointerEvents="none" //
      >
        <div style={{ width: '10px', height: '10px', backgroundColor: 'red', borderRadius: '50%' }} />
      </Box>
    </Box>
  );
};

export default LayoutDesktop;
