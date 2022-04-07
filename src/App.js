import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MenuContainer from './components/Menu/MenuContainer';
import SobreMim from './pages/SobreMim';


function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route element={<SobreMim />} path="/sobre" />
        <Route element={<MenuContainer />} path="/" exact />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
