import React, { useReducer, useState, useRef, useEffect } from 'react';
import { Box, Drawer, List, ListItem, ListItemButton, ListItemText, ListItemIcon, IconButton, Button } from '@mui/material'; // Aggiungi Button da Material-UI
import { styled } from '@mui/system';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import TemplateIcon from '@mui/icons-material/Description';
import LayoutIcon from '@mui/icons-material/ViewModule';
import ComponentIcon from '@mui/icons-material/Apps';
import TextIcon from '@mui/icons-material/TextFields';
import DrawIcon from '@mui/icons-material/Brush';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { DragItemTypes } from '../constants/DragItemTypes';
import { useDrag } from 'react-dnd';
import LoginSample from '../BoardComponents/LoginSample';
import { initialState, actionTypes, reducer } from '../store/reducer';
import LayoutMobile from '../Layouts/LayoutMobile';
import LayoutTablet from '../Layouts/LayoutTablet';
import LayoutDesktop from '../Layouts/LayoutDesktop';

// lavagna
const Canvas = styled(Box)({
  backgroundColor: 'white',
  width: '100vw',
  height: '100vh',
  position: 'relative',
  overflow: 'hidden', // Imposta overflow su hidden per nascondere l'overlay quando la sidebar è chiusa
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

// overlay per oscurare la lavagna quando la sidebar è aperta
const Overlay = styled(Box)({
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  width: '100vw',
  height: '100vh',
  position: 'absolute',
  top: 0,
  left: 0,
  zIndex: 2, // Assicura che l'overlay sia sopra la sidebar ma dietro la lavagna
});

// sidebar
const Sidebar = styled(Drawer)({
  '& .MuiDrawer-paper': {
    width: '200px',
  },
});

const componentsList = [
  { name: 'Login Sample', component: LoginSample },
  // altri componenti per la lavagna
];

function WhiteboardPage() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [showComponents, setShowComponents] = useState(false); // Nuovo stato per visualizzare i componenti
  const [zoomLevel, setZoomLevel] = useState(1); // Aggiungi stato per memorizzare il livello di zoom
  const [selectedLayout, setSelectedLayout] = useState(null); // Nuovo stato per memorizzare il layout selezionato
  const [selectedLayoutRef, setSelectedLayoutRef] = useState(null);
  const sidebarRef = useRef(null);


  useEffect(() => {
    function handleClickOutside(event) {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setIsSidebarOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleToolSelection = (tool) => {
    dispatch({ type: actionTypes.SET_SELECTED_TOOL, payload: tool });
    setIsSidebarOpen(!isSidebarOpen);
    setShowComponents(tool === 'Components');
  };

  const handleComponentSelection = (component) => {
    dispatch({ type: actionTypes.SET_SELECTED_COMPONENT, payload: component });
    setIsSidebarOpen(false);
  };

  const handleLayoutSelection = (layoutRef) => {
    console.log("Selected layout ref:", layoutRef);
    setSelectedLayoutRef(layoutRef);
    setIsSidebarOpen(false); // Chiudi la barra laterale dopo la selezione del layout
  };

  const handleDrop = (item, monitor) => {
    const dropResult = monitor.getDropResult();
    const layoutRect = selectedLayoutRef && selectedLayoutRef.current.getBoundingClientRect();
// Ottieni il rettangolo del layout selezionato

    if (dropResult && layoutRect && isDropInLayout(dropResult.x, dropResult.y, layoutRect)) {
      const { componentName } = item;
      const newPosition = calculatePosition(dropResult.x, dropResult.y, layoutRect);
      const newComponent = { name: componentName, position: newPosition };
      dispatch({ type: actionTypes.ADD_COMPONENT, payload: newComponent });
    }
  };

  const isDropInLayout = (x, y, layoutRect) => {
    return x >= layoutRect.left && x <= layoutRect.right && y >= layoutRect.top && y <= layoutRect.bottom;
  };

  const calculatePosition = (x, y, layoutRect) => {
    const relativeX = x - layoutRect.left;
    const relativeY = y - layoutRect.top;
    return { x: relativeX, y: relativeY };
  };

  // Funzioni per regolare lo zoom
  const handleZoomIn = () => {
    setZoomLevel(prevZoomLevel => prevZoomLevel + 0.1);
  };

  const handleZoomOut = () => {
    setZoomLevel(prevZoomLevel => prevZoomLevel - 0.1);
  };

  return (
    <Box>
      <IconButton onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
        {isSidebarOpen ? <CloseIcon /> : <MenuIcon />}
      </IconButton>
      <Sidebar anchor="left" open={isSidebarOpen} ref={sidebarRef}>
        <List>
          {/* sidebar */}
          <ListItem disablePadding>
            <ListItemButton onClick={() => handleToolSelection('Select')}>
              <ListItemIcon>
                <CheckCircleIcon />
              </ListItemIcon>
              <ListItemText primary="Seleziona" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={() => handleToolSelection('Templates')}>
              <ListItemIcon>
                <TemplateIcon />
              </ListItemIcon>
              <ListItemText primary="Templates" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={() => handleToolSelection('Layouts')}>
              <ListItemIcon>
                <LayoutIcon />
              </ListItemIcon>
              <ListItemText primary="Layouts" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={() => handleToolSelection('Components')}>
              <ListItemIcon>
                <ComponentIcon />
              </ListItemIcon>
              <ListItemText primary="Components" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={() => handleToolSelection('Text')}>
              <ListItemIcon>
                <TextIcon />
              </ListItemIcon>
              <ListItemText primary="Testo" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={() => handleToolSelection('Draw')}>
              <ListItemIcon>
                <DrawIcon />
              </ListItemIcon>
              <ListItemText primary="Disegna" />
            </ListItemButton>
          </ListItem>
        </List>
        {/* componente selezionato nella barra laterale */}
        {showComponents && ( // Mostra i componenti solo quando showComponents è true
          <List>
            {/* componenti selezionabili */}
            {componentsList.map((component, index) => (
              <ListItem disablePadding key={index}>
                <ListItemButton onClick={() => handleComponentSelection(component.component)}>
                  <ListItemText primary={component.name} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        )}
        {/* Aggiungi i layout selezionabili */}
        <List>
          <ListItem disablePadding>
            <ListItemButton onClick={() => handleLayoutSelection(LayoutMobile)}>
              <ListItemText primary="Layout Mobile" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={() => handleLayoutSelection(LayoutTablet)}>
              <ListItemText primary="Layout Tablet" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={() => handleLayoutSelection(LayoutDesktop)}>
              <ListItemText primary="Layout Desktop" />
            </ListItemButton>
          </ListItem>
        </List>
      </Sidebar>
      <Canvas onDrop={handleDrop} style={{ width: '100vw', height: '90vh', transform: `scale(${zoomLevel})` }}>
        {/* Renderizza il layout selezionato */}
        {state.selectedLayout && selectedLayoutRef && React.createElement(state.selectedLayout, { layoutRef: selectedLayoutRef })}

        {/* Renderizza il componente selezionato */}
        {state.selectedComponent && React.createElement(state.selectedComponent, {})}
        {isSidebarOpen && <Overlay />}
      </Canvas>


      {/* Aggiungi bottoni per regolare lo zoom */}
      <Box position="fixed" bottom={20} right={20}>
        <Button variant="contained" onClick={handleZoomIn}>Zoom In</Button>
        <Button variant="contained" onClick={handleZoomOut}>Zoom Out</Button>
      </Box>
    </Box>
  );
}

export default WhiteboardPage;
