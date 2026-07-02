import React, { createContext, useContext, useEffect } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
    theme: Theme;
    toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// El sitio funciona unicamente en modo oscuro: el tema queda fijo y no hay toggle.
export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const theme: Theme = 'dark';

    useEffect(() => {
        document.body.classList.add('dark');
        localStorage.removeItem('theme');
    }, []);

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme: () => { } }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (context === undefined) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};
