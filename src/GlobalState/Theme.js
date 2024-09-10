import { createContext } from "react";

const ThemeContext = createContext({
    theme: localStorage.getItem("PortfolioTheme") ? localStorage.getItem("PortfolioTheme") : "White",
})

export default ThemeContext