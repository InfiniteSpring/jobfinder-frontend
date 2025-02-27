"use client";

import { useState, useEffect } from "react";

import { IoIosSearch } from "react-icons/io";
import { IoCloseOutline } from "react-icons/io5";


export default function Filters() {
    const [isListMap, setIsListMap] = useState(false);
    const [isCustomersEmployees, setIsCustomersEmployees] = useState(false);
    const [isSearchInput, setIsSearchInput] = useState(false);
    const [searchInputValue, setSearchInputValue] = useState("");

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
            document.getElementById("employeesBtn")?.classList.remove("bg-primary");
        } else {
            document.getElementById("customersBtn")?.classList.remove("bg-primary");
            document.getElementById("employeesBtn")?.classList.add("bg-primary");
        }
    }
  return (
    <div className="z-20 fixed top-[5vh]">
        <div className="filtersUpper z-20 flex h-[5vh] w-screen justify-between items-top
        px-[4vw] bg-mainBackground text-foreground overflow-hidden">
            <div className="flex">
                <button className="flex items-center h-[2.5vh] mt-[5px]" onClick={() => setIsSearchInput(!isSearchInput)}>
                    <IoIosSearch className="w-[2.5vh] h-[2.5vh]" />
                    {
                        isSearchInput ? null
                        : <div className="pl-2 text-[1.7vh] text-gray-500 truncate">
                            Поиск по названию
                        </div>
                    }
                </button>
                {isSearchInput ? <div>
                    <div className="fixed inset-0 bg-black opacity-80" onClick={() => setIsSearchInput(!isSearchInput)}></div>
                    <div className="fixed z-[51] left-[10%] top-[15vh] w-[80%] h-[6vh] bg-mainBackground
                    border border-foreground rounded-xl"> 
                    <form className="flex h-full items-center justify-center">
                        <div onClick={() => console.log("submit form")}
                            className="h-full w-16">
                            <IoIosSearch className="w-[2.5vh] h-[2.5vh] mt-[1.5vh] ml-[1.5vh]" />
                        </div>
                        <input type="text" placeholder="Поиск по названию" 
                        className="w-full pl-2 text-foreground truncate
                        bg-mainBackground text-xl h-[90%]
                        active:border-none focus:border-none active:border-none"
                        onChange={(e) => setSearchInputValue(e.target.value)}
                        value={searchInputValue}
                        />
                        <div onClick={() => {
                            setIsSearchInput(!isSearchInput)
                            setSearchInputValue("")
                        }}
                            className="h-full w-16">
                            <IoCloseOutline className="w-[2.5vh] h-[2.5vh] mt-[1.5vh]" />
                        </div>
                    </form>
                    </div>
                </div> : null
                }
            </div>
            <div className="overflow-hidden flex mt-[5px] z-index-30 bg-mainBackground">
                {/* <button className="h-8 px-3 py-0 ml-6 rounded-xl border-[1px] border-foreground">Очистить</button> */}
                <button className="h-min px-[2vw] py-[4px] ml-[3vw] font-bold rounded-[5vw] 
                border-[1px] border-foreground text-[1.5vh]">Все фильтры</button>
            </div>
        </div>
        <div className="filtersDowner z-10 flex w-screen justify-between
        items-center px-[6vw] bg-transparent text-foreground overflow-hidden font-bold">
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
                <button id="customersBtn" className="switchButton text-[1.5vh] left right border bg-mainBackground border-primary bg-primary">
                    Заказчики
                </button>
                {/* <button id="employeesBtn" className="switchButton text-[1.5vh] right border bg-mainBackground border-primary">
                    Исполнители
                </button> */}
            </div>
        </div>
    </div>
  )
};