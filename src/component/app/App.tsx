import { FilmPage } from '../../pages/film/FilmPage';
import { Home } from '../../pages/home/Home';
import { Search } from '../../pages/search/Search';
import { Header } from '../layout/header/Header';
import style from './app.module.scss';
import { Container } from '@mui/material';
import { Route, Routes } from 'react-router-dom';

function App() {
    return (
        <>
            <Header />

            <Container
                maxWidth='md'
                className={style.container}
                sx={{ paddingTop: { xs: '6rem', md: '8rem' } }}
            >
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/film/:kinopoiskId' element={<FilmPage />} />
                    <Route path='/search' element={<Search />} />
                </Routes>
            </Container>
        </>
    );
}

export default App;
