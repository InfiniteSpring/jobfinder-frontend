"use client";

import { useState, useEffect } from "react";

import AllFiltersMenu from "./AllFiltersMenu";

import { IoIosSearch } from "react-icons/io";
import { IoCloseOutline } from "react-icons/io5";
import { GiSettingsKnobs } from "react-icons/gi";
import { IoIosArrowDown } from "react-icons/io";



export default function Filters() {
    const [isListMap, setIsListMap] = useState(false);
    const [isCustomersEmployees, setIsCustomersEmployees] = useState(false);
    const [isSearchInput, setIsSearchInput] = useState(false);
    const [searchInputValue, setSearchInputValue] = useState("");
    const [isAllFiltersMenuOpen, setIsAllFiltersMenuOpen] = useState(false);

    useEffect(() => {
        console.log(searchInputValue)
    }, [searchInputValue])

    const handleListMapSwitch = () => {
        setIsListMap((prev) => !prev);
        if (isListMap) {
            document.getElementById("listBtn")?.classList.add("bg-primary"); 
            document.getElementById("mapBtn")?.classList.remove("bg-primary");
        } else {
            document.getElementById("listBtn")?.classList.remove("bg-primary");
            document.getElementById("mapBtn")?.classList.add("bg-primary");
        }
    }
    const handleCustomersEmployeesSwitch = () => {
        setIsCustomersEmployees((prev) => !prev);
        if (isCustomersEmployees) {
            document.getElementById("customersBtn")?.classList.add("bg-primary"); 
        } else {
            document.getElementById("customersBtn")?.classList.remove("bg-primary");
        }
    }
  return (
    <div className="z-10 fixed top-[5vh]">
        {isAllFiltersMenuOpen ? <AllFiltersMenu isOpen={isAllFiltersMenuOpen} setIsOpen={setIsAllFiltersMenuOpen} /> : null}
        <div className="filtersUpper z-20 flex h-[5vh] w-screen justify-between items-top
        px-[4vw] bg-mainBackground text-foreground overflow-hidden">
            <div className="flex">
                <button className="flex items-center h-[2.5vh] mt-[9px]" onClick={() => setIsSearchInput(!isSearchInput)}>
                    <IoIosSearch className="w-[2.5vh] h-[2.5vh]" />
                    {
                        isSearchInput ? null
                        : <div className="pl-2 text-[1.7vh] text-gray-500 truncate">
                            Поиск по названию
                        </div>
                    }
                </button>
                {isSearchInput ? <div>
                    <div className="fixed z-50 inset-0 bg-black opacity-60" onClick={() => setIsSearchInput(!isSearchInput)}></div>
                    <div className="fixed z-[51] left-[10%] top-[15vh] w-[80%] h-[6vh] bg-mainBackground
                    border border-foreground rounded-xl"> 
                    <form className="flex h-full items-center justify-center">
                        <div onClick={() => console.log("submit form")}
                            className="h-full cursor-pointer w-16">
                            <IoIosSearch className="w-[2.5vh] h-[2.5vh] mt-[1.5vh] ml-[1.5vh]" />
                        </div>
                        <input type="text" placeholder="Поиск по названию" 
                        className="w-full pl-2 text-foreground truncate
                        bg-mainBackground text-[1.8vh] h-[90%]
                        active:border-none focus:border-none active:border-none"
                        onChange={(e) => setSearchInputValue(e.target.value)}
                        value={searchInputValue}
                        />
                        <div onClick={() => {
                            setIsSearchInput(!isSearchInput)
                            setSearchInputValue("")
                        }}
                            className="h-full cursor-pointer w-16">
                            <IoCloseOutline className="w-[2.5vh] h-[2.5vh] mt-[1.5vh]" />
                        </div>
                    </form>
                    </div>
                </div> : null
                }
            </div>
            <div className="overflow-hidden flex mt-[5px] z-index-30 bg-mainBackground">
                {/* <button className="h-8 px-3 py-0 ml-6 rounded-xl border-[1px] border-foreground">Очистить</button> */}
                <button className="h-min px-[1vw] py-[4px] ml-[3vw] font-bold rounded-[5vw] 
                border-[1px] border-foreground text-[1.5vh] flex"
                onClick={() => setIsAllFiltersMenuOpen(!isAllFiltersMenuOpen)}>
                    <GiSettingsKnobs className="w-[2vh] h-[2vh] mr-[.5vw]" />
                    Все фильтры
                    <IoIosArrowDown className="w-[2vh] h-[2vh] ml-[.5vw] mt-[.2vh]" />
                </button>
            </div>
        </div>
        <div className="filtersDowner z-10 flex w-full justify-between
        items-center px-[6vw] text-foreground overflow-hidden font-bold
        bg-mainBackground border-b-[.1vh] border-primary">
            <div className="listMapSwitchButtons align-top z-00"
            onClick={handleListMapSwitch}>
                <button id="listBtn" className="switchButton text-[1.5vh] left border bg-mainBackground border-primary bg-primary">
                    Список
                </button>
                <button id="mapBtn" className="switchButton text-[1.5vh] right border bg-mainBackground border-primary">
                    Карта
                </button>
            </div>
            <div className="customersEmployeesSwitchButtons align-top z-00"
            onClick={handleCustomersEmployeesSwitch}>
                <button id="customersBtn" className="switchButton text-[1.5vh] w-[15vh] left right border bg-mainBackground border-primary bg-primary">
                    {isCustomersEmployees ? "Заказчики" : "Исполнители"} 
                </button>
            </div>
        </div>
    </div>
  )
};