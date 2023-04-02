import { useContext } from 'react';
import AuthProvider from './context/AuthContext';
import ConcludedsProvider from './context/ConcludedsContext';
import { ThemeProvider } from 'styled-components';
import { ThemeContext } from "./context/ThemeContext";
import MyRoutes from './MyRoutes';

export default function App() {
  const { currentTheme } = useContext(ThemeContext);
  
  return (
    <AuthProvider>
      <ConcludedsProvider>
          <ThemeProvider theme={currentTheme}>
            <MyRoutes />
          </ThemeProvider>
      </ConcludedsProvider>
    </AuthProvider>
  );
}
