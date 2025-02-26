"use client";

import { useState } from "react";

import { IoIosSearch } from "react-icons/io";


export default function Filters() {
    const [isListMap, setIsListMap] = useState(false);
    const [isCustomersEmployees, setIsCustomersEmployees] = useState(false);

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
    <div className="z-20">
        <div className="filtersUpper fixed z-20 flex h-14 top-16 w-screen justify-between items-center 
        px-10 bg-mainBackground text-foreground overflow-hidden">
            <button><IoIosSearch className="w-8 h-8" /></button>
            <div className="overflow-hidden flex">
                <button className="h-8 px-3 py-0 ml-6 rounded-xl border-[1px] border-foreground">Оплата</button>
                <button className="h-8 px-3 py-0 ml-6 rounded-xl border-[1px] border-foreground">Город</button>
                <button className="h-8 px-3 py-0 ml-6 rounded-xl border-[1px] border-foreground">Рейтинг</button>
                <button className="h-8 px-3 py-0 ml-6 rounded-xl border-[1px] border-foreground">Все</button>
            </div>
        </div>
        <div className="filtersDowner fixed z-20 flex top-40 -translate-y-10 w-screen justify-between
        items-center px-10 bg-transparent text-foreground overflow-hidden font-bold">
            <div className="listMapSwitchButtons align-top"
            onClick={handleListMapSwitch}>
                <button id="listBtn" className="switchButton left border bg-mainBackground border-primary bg-primary">
                    Список
                </button>
                <button id="mapBtn" className="switchButton right border bg-mainBackground border-primary">
                    Карта
                </button>
            </div>
            <div className="customersEmployeesSwitchButtons align-top"
            onClick={handleCustomersEmployeesSwitch}>
                <button id="customersBtn" className="switchButton left border bg-mainBackground border-primary bg-primary">
                    Заказчики
                </button>
                <button id="employeesBtn" className="switchButton right border bg-mainBackground border-primary">
                    Исполнители
                </button>
            </div>
        </div>
    </div>
  )
};