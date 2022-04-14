import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SobreMim from './pages/SobreMim';
import './index.css'
import Formacao from './pages/Formação';
import Hobbies from './pages/Hobbies';
import Experiencia from './pages/Experiência';

function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route element={<SobreMim />} path="/sobre" />
        <Route element={<Formacao />} path="/formacao" />
        <Route element={<Hobbies />} path="/hobbies" />
        <Route element={<Experiencia />} path="/experiencia" />
        <Route element={<SobreMim />} path="/" exact />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
