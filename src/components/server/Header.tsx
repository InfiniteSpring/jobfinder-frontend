import React from 'react';
import { RxAvatar } from "react-icons/rx";
import BurgerMenu from '../client/BurgerMenu';
import ThemeSwitcher from '../client/ThemeSwitcher';
import NotificationHeaderComponent from '../client/NotificationHeaderComponent';


const Header = () => {
  return (
    <header className="fixed flex z-20 h-[5vh] w-screen justify-between items-center 
    px-[2vw] bg-mainBackground text-foreground overflow-hidden">
      <div className="header__left flex">
        <h1 className="text-[2.5vh] font-bold tracking-wider">WorkBoard</h1>
        <div className='headerIntroText hidden items-end ml-[2vw] text-gray-500
        text-[1.7vh] truncate'>
          №1 Платформа для поиска работадателей и клиентов в Беларуси
        </div>
        <ThemeSwitcher />
      </div>
      <div className="header__right flex items-center space-x-[2vw]">
        <NotificationHeaderComponent />
        <div className="avatar"><RxAvatar className="w-[3vh] h-[3vh]" /></div>
        <BurgerMenu />
      </div>
    </header>
  );
};

export default Header;

