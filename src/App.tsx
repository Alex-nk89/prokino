import { Route, Routes } from 'react-router-dom';
import { Container } from '@mui/material';
import { Header } from './component/layout/header/Header';
import { Home } from './pages/home/Home';
import { Film } from './pages/film/Film';

function App() {
    return (
        <>
            <Header />

            <Container maxWidth='md'>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/film/:kinopoiskId' element={<Film />} />
                </Routes>
                <div> test ci/cd 1</div>
            </Container>
        </>
    );
}

export default App;
