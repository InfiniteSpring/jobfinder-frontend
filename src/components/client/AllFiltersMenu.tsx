'use client';

import { useEffect, useState } from "react";

import { IoCloseOutline } from "react-icons/io5";

interface AllFiltersMenuProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

function AllFiltersMenu({ isOpen, setIsOpen }: AllFiltersMenuProps) {
  if (!isOpen) return null; // Скрываем меню, если оно закрыто

  const [selectedFilters, setSelectedFilters] = useState<Record<string, string[]>>({});

  const filters = [
    { name: "Оплата", options: ["5-10 за час", "10-15 за час", "15-20 за час", "Более 20"] },
    { name: "Дата начала", options: ["Сегодня", "Завтра", "На этой неделе"] },
    { name: "Время выполнения", options: ["1-2 часа", "2-4 часа", "4-8 часов", "Больше"] }, 
    { name: "Кол-во человек", options: ["Не важно", "Один", "От 2 до 4", "Больше 4х"] }, 
    { name: "Возраст", options: ["Не важен", "18-25", "25-35"] },
    { name: "Документы", options: ["Не важжно", "Паспорт", "Тродовая"] },  
  ];

  useEffect(() => {
    console.log(selectedFilters);
  }, [selectedFilters]);

  const handleCheckboxChange = (filterName: string, option: string) => {
    setSelectedFilters((prev) => ({
      ...prev,
      [filterName]: prev[filterName]?.includes(option)
        ? prev[filterName].filter((item) => item !== option)
        : [...(prev[filterName] || []), option],
    }));
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="absolute inset-0 z-50 bg-black opacity-60"
        onClick={() => setIsOpen(false)}
      ></div>

      <div className="allFiltersContainer relative mb-[20%] z-50 w-[90%] bg-foreground bg-mainBackground border rounded-[2vh] p-[2vh] shadow-[2vh]"> 
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-[2.2vh] font-bold">Фильтры</h2>
          <button className="pr-0" onClick={() => setIsOpen(!isOpen)}>
                <IoCloseOutline className="w-[3vh] h-[3vh] text-primary" />
            </button>
        </div>

        <form className="allFiltersGrid grid grid-cols-2 gap-x-[1.5vw] gap-y-[2vh]">
          {filters.map((filter) => (
            <div key={filter.name} className="flex flex-col">
              <h3 className="text-[1.9vh] font-semibold mb-[1vh]">{filter.name}</h3>
              {filter.options.map((option) => (
                <label key={option} className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={selectedFilters[filter.name]?.includes(option) || false}
                    onChange={() => handleCheckboxChange(filter.name, option)}
                    
                  />
                  <span className="text-[1.7vh]">{option}</span>
                </label>
              ))}
            </div>
          ))}
        </form>

        {/* Кнопка "Применить" */}
        <div className="mt-6 flex justify-end">
          <button
            className="px-4 py-2 bg-primary text-foreground 
            text-[1.7vh] rounded-lg hover:bg-primary"
            onClick={() => setIsOpen(false)}
          >
            Применить фильтры
          </button>
        </div>
      </div>
    </div>
  );
}

export default AllFiltersMenu;
