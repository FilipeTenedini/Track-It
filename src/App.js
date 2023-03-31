import { useState, useMemo } from 'react';
import { ThemeProvider } from 'styled-components';
import AuthProvider from './context/AuthContext';
import ConcludedsProvider from './context/ConcludedsContext';
import MyRoutes from './MyRoutes';
import themes from "./style/Themes/";

export default function App() {
  const [theme, setTheme] = useState('light');

  const currentTheme = useMemo( () => {
    return themes[theme];
  }, [theme])

  function handleToggleTheme() {
    setTheme(prevState => prevState === "light" ? "dark" : "light")
  }
  
  return (
    <ConcludedsProvider>
      <AuthProvider>
        <ThemeProvider theme={currentTheme}>
          <MyRoutes />
        </ThemeProvider>
      </AuthProvider>
    </ConcludedsProvider>
  );
}
