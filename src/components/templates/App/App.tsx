import { AwardsView, FilmView, SearchView, HomeView } from '../../pages';
import { Header } from '../layout/Header/Header';
import { Container } from '@mui/material';
import { Route, Routes } from 'react-router-dom';

function App() {
    return (
        <>
            <Header />

            <Container
                maxWidth='md'
                sx={{
                    padding: { xs: '0', md: '2rem' },
                    paddingTop: { xs: '5rem', sm: '6rem', md: '6rem' },
                }}
            >
                <Routes>
                    <Route path='/' element={<HomeView />} />
                    <Route path='/film/:kinopoiskId' element={<FilmView />} />
                    <Route path='/search' element={<SearchView />} />
                    <Route
                        path='/awards/:kinopoiskId'
                        element={<AwardsView />}
                    />
                </Routes>
            </Container>
        </>
    );
}

export default App;
