import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header';

function MainContainer() {
    const location = useLocation();
    return (
        <>
            {location.pathname !== '/login' && <Header />}
            <Outlet />
        </>
    );
}

export default MainContainer;
