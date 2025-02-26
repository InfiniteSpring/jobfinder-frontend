'use client';

import { useState } from "react";

import { RiMenu3Fill } from "react-icons/ri";
import { IoCloseOutline } from "react-icons/io5";
import { RxAvatar } from "react-icons/rx";
import { BsChatLeft } from "react-icons/bs";
import { IoSettingsOutline } from "react-icons/io5";
import { CiLogout } from "react-icons/ci";
import { GrTask } from "react-icons/gr";
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";
import { MdOutlineSecurity } from "react-icons/md";
import { PiQuestionLight, PiCookieLight } from "react-icons/pi";
import { SiTelegram } from "react-icons/si";
import { MdOutlineAlternateEmail } from "react-icons/md";    
import { BsWhatsapp } from "react-icons/bs";


export default function BurgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  // const handleMenuChangeState = (): void => {
  //   setIsOpen(!isOpen);
  //   document.body.classList.toggle("overflow-hidden");
  // }

  return (
    <div className="relative">
        <button onClick={() => setIsOpen(!isOpen)}
        className="header__burger-menu p-2 rounded
        pr-0">
            <RiMenu3Fill className="w-8 h-8" />
        </button>

      {isOpen && (
        <div>
        <div className="fixed inset-0 bg-black opacity-80" onClick={() => setIsOpen(!isOpen)}></div>
        <div className="fixed right-0 z-40 w-screen inset-shadow-black
        bg-mainBackground text-foreground p-10 rounded-2xl
        max-w-lg
        top-1/2 -translate-y-1/2">
          <div className="close flex justify-between">
            <div>
              <div className="avatar flex w-full h-16">
                <button className="h-16 w-md p-0 m-0 flex items-center text-2xl font-bold">
                    <RxAvatar className="w-16 h-16 mr-3 text-primary" />
                      Матвей Мурашко
                </button>
            </div>
          </div>
            <button className="pr-0" onClick={() => setIsOpen(!isOpen)}>
                <IoCloseOutline className="w-10 h-10 text-primary" />
            </button>
          </div>
          <div className="middle-links mt-20">
            <div className="upper">
                <button onClick={() => console.log('handle profile click')} className="profile flex mt-10">
                    <RxAvatar className="w-8 h-8 text-primary" />
                    <div className="ml-3 text-2xl font-bold">Профиль</div>
                </button>
                <button onClick={() => console.log('handle chat click')} className="chat flex mt-10">
                    <BsChatLeft className="w-8 h-8 text-primary" />
                    <div className="ml-0 text-2xl font-bold">Чаты</div>
                </button>
                <button onClick={() => console.log('handle settings click')} className="settings flex mt-10">
                    <IoSettingsOutline className="w-8 h-8 text-primary" />
                    <div className="ml-3 text-2xl font-bold">Настройки</div>
                </button>
                <button onClick={() => console.log('handle logout click')} className="logout flex mt-10">
                    <CiLogout className="w-8 h-8 text-primary" />
                    <div className="ml-3 text-2xl font-bold truncate">Выйти из аккаунта</div>
                </button>
            </div>
            <div className="line content-'' w-full h-px my-10 bg-primary"></div>
            <div className="downer">
                <button onClick={() => console.log('handle orders click')} className="orders flex mt-10">
                    <GrTask className="w-8 h-8 text-primary" />
                    <div className="ml-3 text-2xl font-bold">Заказы</div>
                </button>
                <button onClick={() => console.log('handle terms of use click')} className="terms flex mt-10">
                    <HiOutlineClipboardDocumentList className="w-8 h-8 text-primary" />
                    <div className="ml-3 text-2xl font-bold truncate">Условия использования</div>
                </button>
                <button onClick={() => console.log('handle privacy policy click')} className="cookies flex mt-10">
                    <MdOutlineSecurity className="w-8 h-8 text-primary" />
                    <div className="ml-3 text-2xl font-bold truncate">Политика конфиденциальности</div>
                </button>
                <button onClick={() => console.log('handle cookie click')} className="cookie flex mt-10">
                    <PiCookieLight className="w-8 h-8 text-primary" />
                    <div className="ml-3 text-2xl font-bold">Куки</div>
                </button>
                <button onClick={() => console.log('handle support click')} className="support flex mt-10">
                    <PiQuestionLight className="w-8 h-8 text-primary" />
                    <div className="ml-3 text-2xl font-bold">Поддержка</div>
                </button>
            </div>
          </div>
          <div className="contact-links flex justify-center mt-20 w-full mx-auto">
            <button onClick={() => console.log('handle watsap click')} className="contacts flex mt-5 align-center justify-center">
                <BsWhatsapp className="w-8 h-8 text-primary" />
                <div className="ml-3 text-xl"></div>
            </button>
            <button onClick={() => console.log('handle telegram click')} className="contacts flex mt-5 align-center justify-center ml-5">
                <SiTelegram className="w-8 h-8 text-primary" />
                <div className="ml-3 text-xl"></div>
            </button>
            <button onClick={() => console.log('handle email click')} className="contacts flex mt-5 align-center justify-center ml-5">
                <MdOutlineAlternateEmail className="w-8 h-8 text-primary" />
                <div className="ml-3 text-xl"></div>
            </button>
          </div>
        </div>
        </div>
      )}
    </div>
  );
}