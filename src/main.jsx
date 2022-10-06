import React from 'react';
import ReactDOM from 'react-dom/client';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import App from './App';
import './index.css';

// Create MUI theme:
const theme = createTheme({
  palette: {
    primary: {
      main: '#2C3C4F',
    },
    secondary: {
      main: '#F2994A',
    },
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
);
