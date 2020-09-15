import React, { useState } from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import 'App.css';

import Main from 'views/Main';
import usePhrases from 'hooks/usePhrases';

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

  const { phrases, setLanguage, language } = usePhrases();

  const handleChangeLanguage = (lang) => {
    setLanguage(lang);
  };

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Main
          theme={theme.palette.type}
          changeTheme={toggleTheme}
          phrases={phrases}
          language={language}
          changeLanguage={handleChangeLanguage}
        />
      </ThemeProvider>
    </div>
  );
}

export default App;
