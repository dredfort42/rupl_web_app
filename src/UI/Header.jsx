import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';

function Header() {
    return (
        <div className={styles.header}>
            <h1>
                <NavLink to=".">Logo</NavLink>
            </h1>
            <nav>
                <NavLink to="./login">Login</NavLink>
                <NavLink to="./signup">Signup</NavLink>
            </nav>
        </div>
    );
}

export default Header;
