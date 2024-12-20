import { useState } from 'react';
import PokemonList from './components/PokemonList.jsx';
import Header from './components/Header.jsx';
import FavoritePokemons from './pages/FavoritePokemons.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router';

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  const router = createBrowserRouter([
    {
      path:"/",
      element:(    
      <>
        <Header setSearchTerm={setSearchTerm}/>
        <section className='section'>
          <PokemonList searchTerm={searchTerm} />
        </section>
      </>
      )
    },
    {
      path:"/favorites",
      element:(
        <>
        <Header setSearchTerm={setSearchTerm}/>
        <FavoritePokemons/>
        </>
      )
    }
  ])

  return (
    <RouterProvider router={router}/>
  );
}

export default App;
