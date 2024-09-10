import { NavLink, useLocation } from 'react-router-dom';
import styles from './Header.module.css';

function Header() {
    const location = useLocation();
    return (
        <div className={styles.header}>
            {location.pathname !== '/' && (
                <h1>
                    <NavLink to=".">rupl</NavLink>
                </h1>
            )}
            {/* <h1>
                <NavLink to=".">Logo</NavLink>
            </h1> */}
            <nav>
                <NavLink to="./login">Login</NavLink>
                <NavLink to="./signup" className={styles.filled}>
                    Signup
                </NavLink>
            </nav>
        </div>
    );
}

export default Header;
