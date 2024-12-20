import { Link } from 'react-router';

function Nav() {
    return (
        <nav className="nav">
            <ul className="nav__list">
                <li className="nav__list__item">
                    <Link to="/" className='nav__list__link'>Home</Link>                   
                </li>
                <li>
                    <Link to="/favorites" className='nav__list__link'>Favorite Pokemons</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Nav