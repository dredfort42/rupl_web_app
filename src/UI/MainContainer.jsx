import { Outlet } from 'react-router-dom';
import Header from './Header';

function MainContainer() {
    return (
        <>
            <Header />
            <Outlet />
        </>
    );
}

export default MainContainer;
