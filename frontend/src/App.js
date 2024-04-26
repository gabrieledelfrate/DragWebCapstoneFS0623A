import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Home from './Pages/Home';
import ContactPage from './Pages/ContactPage';
import WhiteboardPage from './Pages/WhiteboardPage';
import LoginPage from './Pages/LoginPage';
function App() {
  return (    
    <div>
      <DndProvider backend={HTML5Backend}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/whiteboard" element={<WhiteboardPage />} />
          <Route path="/login" element={<LoginPage />} /> // Aggiungi la route per la LoginPage
        </Routes>
      </BrowserRouter>
    </DndProvider>
    </div>
  );
}

export default App;
