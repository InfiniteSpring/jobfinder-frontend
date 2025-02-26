import React from 'react';
import { RxAvatar } from "react-icons/rx";
import BurgerMenu from '../client/BurgerMenu';
import ThemeSwitcher from '../client/ThemeSwitcher';


const Header = () => {
  return (
    <header className="fixed flex z-30 h-16 w-screen justify-between items-center 
    px-10 bg-mainBackground text-foreground overflow-hidden">
      <div className="header__left">
        <h1 className="text-3xl font-bold tracking-wider">JobListing</h1>
      </div>
      <div className="header__right flex items-center space-x-4">
        <ThemeSwitcher />
        <div className="avatar"><RxAvatar className="w-8 h-8" /></div>
        <BurgerMenu />
      </div>
    </header>
  );
};

export default Header;

