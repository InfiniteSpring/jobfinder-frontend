import React from 'react';
import { RxAvatar } from "react-icons/rx";
import BurgerMenu from '../client/BurgerMenu';
import ThemeSwitcher from '../client/ThemeSwitcher';


const Header = () => {
  return (
    <header className="fixed flex z-30 h-[5vh] w-screen justify-between items-center 
    px-[2vw] bg-mainBackground text-foreground overflow-hidden">
      <div className="header__left">
        <h1 className="text-[2.5vh] font-bold tracking-wider">Grapp</h1>
      </div>
      <div className="header__right flex items-center space-x-4">
        <ThemeSwitcher />
        <div className="avatar"><RxAvatar className="w-[2.5vh] h-[2.5vh]" /></div>
        <BurgerMenu />
      </div>
    </header>
  );
};

export default Header;

