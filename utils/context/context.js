import { createContext, useState } from 'react'

export const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('light')
    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light')
    }
 
    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            { children }
        </ThemeContext.Provider>
    )
}

export const ActivePageContext = createContext()

export const ActivePageProvider = ({ children }) => {
    const [activePage, setActivePage] = useState({page: 'specialities'})
 
    return (
        <ActivePageContext.Provider value={{ activePage, setActivePage }}>
            { children }
        </ActivePageContext.Provider>
    )
}