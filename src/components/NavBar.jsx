import { Link, NavLink } from 'react-router-dom';
import CartWidget from './CartWidget';

function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" to="/">
                Mercadito
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <NavLink className="nav-link" to={`/products/Paletas`}>
                            Paletas
                        </NavLink>
                    </li>
                    <li className="nav-item active">
                        <NavLink className="nav-link" to={`/products/Pelotas`}>
                            Pelotas
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link disabled" href="#cart"><CartWidget/></a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar
