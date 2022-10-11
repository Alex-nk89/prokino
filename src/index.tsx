import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { CssBaseline } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import App from './App';

import './index.scss';
import reportWebVitals from './reportWebVitals';

const queryClient = new QueryClient();

const theme = createTheme({
    typography: {
        fontFamily: ['SF UI Text', '-apple-system', 'Roboto', 'Arial'].join(
            ','
        ),
    },
});

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <CssBaseline />
                <QueryClientProvider client={queryClient}>
                    <App />
                </QueryClientProvider>
            </BrowserRouter>
        </ThemeProvider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
