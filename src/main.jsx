import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './assets/styles/styles.scss';
import Home from './pages/Home.jsx';
import PokemonProfile from './pages/PokemonProfile.jsx';
import { BrowserRouter, Route, Routes } from 'react-router';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/pokemons/:pokemon' element={<PokemonProfile />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
