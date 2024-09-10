import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header';
import styles from './MainContainer.module.css';

function MainContainer() {
    const location = useLocation();
    return (
        <div className={styles.main}>
            {location.pathname !== '/login' && <Header />}
            <Outlet />
        </div>
    );
}

export default MainContainer;
