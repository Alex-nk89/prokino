import { Route, Routes } from 'react-router-dom';
import { Container } from '@mui/material';
import { Header } from '../layout/header/Header';
import { Home } from '../../pages/home/Home';
import { Film } from '../../pages/film/Film';
import { Search } from '../../pages/search/Search';
import style from './app.module.scss';

function App() {
    return (
        <>
            <Header />

            <Container
                maxWidth='md'
                className={style.container}
                sx={{ paddingTop: '8rem' }}
            >
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/film/:kinopoiskId' element={<Film />} />
                    <Route path='/search' element={<Search />} />
                </Routes>
            </Container>
        </>
    );
}

export default App;
