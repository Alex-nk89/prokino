import { Route, Routes } from 'react-router-dom';
import { Container } from '@mui/material';
import { Header } from './component/layout/header/Header';
import { Home } from './pages/home/Home';

function App() {
    return (
        <>
            <Header />

            <Container maxWidth='md'>
                <Routes>
                    <Route path='/' element={<Home />} />
                </Routes>
            </Container>
        </>
    );
}

export default App;
