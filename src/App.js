import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MenuContainer from './components/Menu/MenuContainer';
import SobreMim from './pages/SobreMim';
import './index.css'
import Formacao from './pages/Formação';
import Hobbies from './pages/Hobbies';
import Experiencia from './pages/Experiência';
import Inicial from './pages/Inicial';

function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route element={<SobreMim />} path="/sobre" />
        <Route element={<Formacao />} path="/formacao" />
        <Route element={<Hobbies />} path="/hobbies" />
        <Route element={<Experiencia />} path="/experiencia" />
        <Route element={<Inicial />} path="/" exact />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
