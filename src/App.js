import React, { useState } from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import './App.css';

import MainAppbar from './components/MainAppbar';
import Content from './components/Content';

const darkTheme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#3185FC',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#274690',
      contrastText: '#ffffff',
    },
    error: {
      main: '#e63b2e',
      contrastText: '#ffffff',
    },
    warning: {
      main: '#f3a712',
      contrastText: '#2e343b',
    },
    success: {
      main: '#33673b',
      contrastText: '#ffffff',
    },
    info: {
      main: '#274690',
      contrastText: '#ffffff',
    },
  },
});

const lightTheme = createMuiTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#3185FC',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#274690',
      contrastText: '#ffffff',
    },
    error: {
      main: '#e63b2e',
      contrastText: '#ffffff',
    },
    warning: {
      main: '#f3a712',
      contrastText: '#2e343b',
    },
    success: {
      main: '#33673b',
      contrastText: '#ffffff',
    },
    info: {
      main: '#274690',
      contrastText: '#ffffff',
    },
  },
});

function App() {
  const [theme, setTheme] = useState(darkTheme);

  const toggleTheme = () => {
    if (theme.palette.type === 'dark') setTheme(lightTheme);
    else setTheme(darkTheme);
  }

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Content theme={theme.palette.type} changeTheme={toggleTheme} />
      </ThemeProvider>
    </div>
  );
}

export default App;
