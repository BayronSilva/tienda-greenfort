import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css';

const NavBar = () => {
    return (
        <header>
            <h1>Greenfort</h1>

            <nav>
                <ul>
                    <li>Capsulas</li>
                    <li>Cremas</li>
                    <li>Gotas</li>
                </ul>
            </nav>
            <CartWidget/>
        </header>
    )
}

export default NavBar