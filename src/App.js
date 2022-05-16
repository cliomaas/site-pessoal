import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SobreMim from './pages/SobreMim';
import './index.css'
import Formacao from './pages/Formação';
import Hobbies from './pages/Hobbies';
import Experiencia from './pages/Experiência';
import Inicio from './pages/Inicio';
import Login from './pages/Login';
import CadastroDadosPessoais from './pages/Cadastro/CadastroDadosPessoais';



function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route element={<SobreMim />} path="/sobre" />
        <Route element={<Formacao />} path="/formacao" />
        <Route element={<Hobbies />} path="/hobbies" />
        <Route element={<Experiencia />} path="/experiencia" />
        <Route element={<Inicio />} path="/" exact />
        <Route element={<Login />} path="/login" exact />
        <Route element={<CadastroDadosPessoais />} path="/cadastro" exact />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
