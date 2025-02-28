'use client';

import { useState } from "react";

import { RiMenu3Fill } from "react-icons/ri";
import { IoCloseOutline } from "react-icons/io5";
import { RxAvatar } from "react-icons/rx";
import { BsChatLeft } from "react-icons/bs";
// import { IoSettingsOutline } from "react-icons/io5";
import { CiLogout } from "react-icons/ci";
import { GrTask } from "react-icons/gr";
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";
import { MdOutlineSecurity } from "react-icons/md";
import { PiQuestionLight, PiCookieLight } from "react-icons/pi";
import { SiTelegram } from "react-icons/si";
import { MdOutlineAlternateEmail } from "react-icons/md";    
import { BsWhatsapp } from "react-icons/bs";
import { IoPeople } from "react-icons/io5";



export default function BurgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  // const handleMenuChangeState = (): void => {
  //   setIsOpen(!isOpen);
  //   document.body.classList.toggle("overflow-hidden");
  // }

  return (
    <div className="relative">
        <button onClick={() => setIsOpen(!isOpen)}
        className="header__burger-menu p-0 rounded
        pr-0 flex">
            <RiMenu3Fill className="w-[3vh] h-[3vh]" />
        </button>

      {isOpen && (
        <div>
        <div className="fixed inset-0 bg-black opacity-60" onClick={() => setIsOpen(!isOpen)}></div>
        <div className="fixed right-0 z-40 w-screen inset-shadow-black
        bg-mainBackground text-foreground p-[3vh] rounded-[2vh]
        max-w-xl max-h-screen
        top-1/2 -translate-y-1/2">
          <div className="close flex justify-between">
            <div>
              <div className="avatar flex w-full h-[5vh]">
                <button className="h-[5vh] w-md p-0 m-0 flex items-center text-[2vh] font-bold">
                    <RxAvatar className="w-[5vh] h-[5vh] mr-[1vw] text-primary" />
                      Матвей Мурашко
                </button>
            </div>
          </div>
            <button className="pr-0" onClick={() => setIsOpen(!isOpen)}>
                <IoCloseOutline className="w-[3vh] h-[3vh] text-primary" />
            </button>
          </div>
          <div className="middle-links mt-20">
            <div className="upper">
                <button onClick={() => console.log('handle profile click')} className="profile flex mt-[3vh]">
                    <RxAvatar className="w-[2.7vh] h-[2.7vh] text-primary" />
                    <div className="ml-3 text-[2vh] font-bold">Профиль</div>
                </button>
                <button onClick={() => console.log('handle orders click')} className="orders flex mt-[3vh]">
                    <GrTask className="w-[2.7vh] h-[2.7vh] text-primary" />
                    <div className="ml-3 text-[2vh] font-bold">Заказы</div>
                </button>
                <button onClick={() => console.log('handle chat click')} className="chat flex mt-[3vh]">
                    <BsChatLeft className="w-[2.7vh] h-[2.7vh] text-primary" />
                    <div className="ml-0 text-[2vh] font-bold">Чаты</div>
                </button>
                {/* <button onClick={() => console.log('handle settings click')} className="settings flex mt-[3vh]">
                    <IoSettingsOutline className="w-[2.7vh] h-[2.7vh] text-primary" />
                    <div className="ml-3 text-[2vh] font-bold">Настройки</div>
                </button> */}
                <button onClick={() => console.log('handle logout click')} className="logout flex mt-[3vh]">
                    <CiLogout className="w-[2.7vh] h-[2.7vh] text-primary" />
                    <div className="ml-3 text-[2vh] font-bold truncate">Выйти из аккаунта</div>
                </button>
            </div>
            <div className="line content-'' w-full h-px my-[3vh] bg-primary"></div>
            <div className="downer">
                <button onClick={() => console.log('handle about click')} className="about flex mt-[3vh]">
                    <IoPeople className="w-[2.7vh] h-[2.7vh] text-primary" />
                    <div className="ml-3 text-[2vh] font-bold">О нас</div>
                </button>
                <button onClick={() => console.log('handle terms of use click')} className="terms flex mt-[3vh]">
                    <HiOutlineClipboardDocumentList className="w-[2.7vh] h-[2.7vh] text-primary" />
                    <div className="ml-3 text-[2vh] font-bold truncate">Условия использования</div>
                </button>
                <button onClick={() => console.log('handle privacy policy click')} className="cookies flex mt-[3vh]">
                    <MdOutlineSecurity className="w-[2.7vh] h-[2.7vh] text-primary" />
                    <div className="ml-3 text-[2vh] font-bold truncate">Конфиденциальность</div>
                </button>
                <button onClick={() => console.log('handle cookie click')} className="cookie flex mt-[3vh]">
                    <PiCookieLight className="w-[2.7vh] h-[2.7vh] text-primary" />
                    <div className="ml-3 text-[2vh] font-bold">Куки</div>
                </button>
                <button onClick={() => console.log('handle support click')} className="support flex mt-[3vh]">
                    <PiQuestionLight className="w-[2.7vh] h-[2.7vh] text-primary" />
                    <div className="ml-3 text-[2vh] font-bold">Поддержка</div>
                </button>
            </div>
          </div>
          <div className="contact-links flex justify-center mt-20 w-full mx-auto">
            <button onClick={() => console.log('handle watsap click')} className="contacts flex mt-5 align-center justify-center">
                <BsWhatsapp className="w-[2.7vh] h-[2.7vh] text-primary" />
                <div className="ml-3 text-xl"></div>
            </button>
            <button onClick={() => console.log('handle telegram click')} className="contacts flex mt-5 align-center justify-center ml-5">
                <SiTelegram className="w-[2.7vh] h-[2.7vh] text-primary" />
                <div className="ml-3 text-xl"></div>
            </button>
            <button onClick={() => console.log('handle email click')} className="contacts flex mt-5 align-center justify-center ml-5">
                <MdOutlineAlternateEmail className="w-[2.7vh] h-[2.7vh] text-primary" />
                <div className="ml-3 text-xl"></div>
            </button>
          </div>
        </div>
        </div>
      )}
    </div>
  );
}