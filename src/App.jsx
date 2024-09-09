import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
// import Login from './components/Login';
import MainContainer from './UI/MainContainer';
import Home from './components/Home';
import NotFound from './components/NotFound';

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Routes>
                    <Route path="/" element={<MainContainer />}>
                        <Route index element={<Home />} />
                        <Route path="*" element={<NotFound />} />
                    </Route>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
