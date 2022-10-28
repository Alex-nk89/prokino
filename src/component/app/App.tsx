import { Film } from '../../pages/film/Film';
import { Home } from '../../pages/home/Home';
import { Search } from '../../pages/search/Search';
import { AwardsPage } from '../../pages/awards/AwardsPage';
import { Header } from '../layout/header/Header';
import { Container } from '@mui/material';
import { Route, Routes } from 'react-router-dom';

function App() {
    return (
        <>
            <Header />

            <Container
                maxWidth='md'
                // className={style.container}
                sx={{
                    padding: { xs: '0', md: '2rem' },
                    paddingTop: { xs: '5rem', md: '6rem' },
                }}
            >
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/film/:kinopoiskId' element={<Film />} />
                    <Route path='/search' element={<Search />} />
                    <Route
                        path='/awards/:kinopoiskId'
                        element={<AwardsPage />}
                    />
                </Routes>
            </Container>
        </>
    );
}

export default App;
