import { useContext, useEffect } from "react";
import "./App.scss";
import { ThemeContext } from "./context/ThemeContext";
import { DARK_THEME, LIGHT_THEME } from "./constants/themeConstants";
import { Routes, Route } from "react-router-dom";
import BaseLayout from "./layout/BaseLayout";
import { Dashboard, PageNotFound } from "./screens";
import MoonIcon from "./assets/icons/moon.svg";
import SunIcon from "./assets/icons/sun.svg";

function App() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  console.log(theme);

  useEffect(() => {
    if (theme === DARK_THEME) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    } 
  }, [theme]);

  return (
    <>
      <Routes>
        <Route element={<BaseLayout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>

      <button type="button" className="theme-toggle-btn" onClick={toggleTheme}>
        <img
          className="theme-icon"
          src={theme === LIGHT_THEME ? SunIcon : MoonIcon}
        />
      </button>
    </>
  );
}

export default App;
