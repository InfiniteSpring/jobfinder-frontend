'use client';

import { useEffect, useState } from "react";

import { MdInvertColors } from "react-icons/md";


const themes = ["light", "warm", "cool", "dark", "neon", "profe", "grayGreen"];

export default function ThemeSwitcher() {
  const [theme, setTheme] = useState("grayGreen");
  const [isSelectThemeOpen, setIsSelectThemeOpen] = useState(false);    

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("theme") || "professional";
      setTheme(savedTheme);
      document.documentElement.setAttribute("data-theme", savedTheme);
    }
  }, []);

  const changeTheme = (newTheme: string) => {
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
    setIsSelectThemeOpen(false);
  };

  const handleMouseEnterOnSelectTheme = (newTheme: string) => {
    document.documentElement.setAttribute("data-theme", newTheme);
  };
  const handleMouseLeaveOnSelectTheme = () => {
    document.documentElement.setAttribute("data-theme", theme);
  };

  return (
    <div className="p-0">
      {
      isSelectThemeOpen ? <div>
        <div className="fixed z-50 inset-0 bg-black backdrop-blur-lg opacity-60" onClick={() => setIsSelectThemeOpen(!isSelectThemeOpen)}></div>
        <div className="fixed z-50 flex justify-center items-center p-[1vh]
        bg-accentBackground text-foreground rounded-lg top-[10vh] left-1/2 -translate-x-1/2
        shadow-2xl gap-[2vw]">
            {themes.map((t) => (
                <button key={t} value={t}
                className="border-none w-[3vh] h-[3vh] rounded-full"
                style={{ backgroundColor: "hsl(var(--primary))" }}
                onMouseEnter={() => handleMouseEnterOnSelectTheme(t)}
                onMouseLeave={() => handleMouseLeaveOnSelectTheme()}
                onClick={() => changeTheme(t)}>
                </button>
            ))}
        </div></div> : <button className="text-primary font-bold flex" 
            onClick={() => setIsSelectThemeOpen(!isSelectThemeOpen)}>
            <MdInvertColors className="w-[3.2vh] h-[3.2vh]" />
        </button>
      }
    </div>
  );
}