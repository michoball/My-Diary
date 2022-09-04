import { ThemeProvider } from "styled-components";
import { createContext, useState } from "react";
import { lightTheme, darkTheme } from "./themeColor";
import { useEffect } from "react";

export const ThemeContext = createContext({
  isDarkTheme: Boolean,
  themeToggler: () => {},
});

export const ToggleThemeProvider = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const theme = isDarkTheme ? darkTheme : lightTheme;

  useEffect(() => {
    const storedTheme = localStorage.getItem("Theme");
    if (storedTheme === "dark") {
      setIsDarkTheme(true);
    } else {
      setIsDarkTheme(false);
    }
  }, []);

  const themeToggler = () => {
    setIsDarkTheme(!isDarkTheme);
    localStorage.setItem("Theme", !isDarkTheme ? "dark" : "light");
  };
  const value = {
    isDarkTheme,
    themeToggler,
  };
  return (
    <ThemeContext.Provider value={value}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};
