'use client';

import { useEffect, useState } from "react";

import { FiSun, FiMoon } from "react-icons/fi";


// const themes = ["light", "dark", "profe", "grayGreen"];

export default function ThemeSwitcher() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("theme") || "dark";
      localStorage.setItem("theme", savedTheme);
      setTheme(savedTheme);
      document.documentElement.setAttribute("data-theme", savedTheme);
    }
  }, []);

  const changeTheme = (currentTheme: string) => {
    if(currentTheme === "light"){
      setTheme("grayGreen");
      localStorage.setItem("theme", "grayGreen");
      document.documentElement.setAttribute("data-theme", "grayGreen");
    } else {
      setTheme("light");
      localStorage.setItem("theme", "light");
      document.documentElement.setAttribute("data-theme", "light");
    }
    console.log('currentTheme', currentTheme);
  };
  
  return (
    <div className="themeController flex items-center ml-[2vw]">
      <button onClick={() => changeTheme(theme)}>
        {theme === "light" ? <FiSun className="w-[2.5vh] h-[2.5vh]" /> : <FiMoon className="w-[2.5vh] h-[2.5vh]" />}
      </button>
    </div>
  );
}