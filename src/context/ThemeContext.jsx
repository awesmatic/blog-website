"use client";

import { createContext, useState } from "react";

export const ThemeContext = createContext();

const getFromLocalStorage = () => {
    if (typeof window != "undefined") {
        return localStorage.getItem("theme") || "light";
    }

}

export const ThemeContextProvider = ({ children }) => {

    const [theme, setTheme] = useState(() => {
        return getFromLocalStorage();
    });
    const toggle = () => {
        setTheme(prevState => prevState === 'light' ? 'dark' : 'light');
    }
    return <ThemeContext.Provider value={{ theme, toggle }}>{children}</ThemeContext.Provider>
}