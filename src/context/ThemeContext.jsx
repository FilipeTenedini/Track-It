import { createContext, useState, useMemo } from "react";
import themes from "../style/Themes";

export const ThemeContext = createContext();

export default function ThemeProv( { children } ) {
    const [theme, setTheme] = useState('light');

    const currentTheme = useMemo( () => {
      return themes[theme];
    }, [theme])
  
    function handleToggleTheme() {
      setTheme(prevState => prevState === "light" ? "dark" : "light")
    }
    
    return (
        <ThemeContext.Provider value={{theme, currentTheme, handleToggleTheme}}>
                {children}
        </ThemeContext.Provider>
    );
}