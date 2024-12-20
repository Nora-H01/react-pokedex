import Nav from './Nav'
import SearchPokemon from './SearchPokemon' 

function Header({setSearchTerm}){
    return (
        <header>
        <Nav/>
        <SearchPokemon setSearchTerm={setSearchTerm} />
      </header>
    )
}

export default Header