"use client";

import { useState } from "react";
import { Product } from "@/types";

import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { IoStar, IoStarOutline } from "react-icons/io5";

export default function ProductCardClient({ product }: { product: Product }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="relative px-[2vh] py-[2vh] my-[2vh] rounded-xl bg-mainBackground text-foreground shadow-lg shadow-foreground">
      <div className="firstLine flex justify-between">
        <h2 className="text-[1.8vh] font-bold">{product.name}</h2>
        <p className="text-primary text-[1.8vh] font-bold">{product.price} BYN / {product.duration}</p>
      </div>
      <div className="secondLine flex justify-between text-[1.5vh]">
        <span>{product.timePosted}</span>
        <div className="pr-20">{product.place}</div>
      </div>
      {
        expanded ? <div><div className="descriptionLine">
        <p className="pr-10 py-3 text-[1.8vh] font-thin">{product.description}</p>
        <span className="mt-3 text-[1.5vh] font-bold">Когда нужно выполнить: {product.timeToComplete}</span> 
      </div> 
      <div className="contactLine flex justify-between pr-[2vw] my-5">
        <div>
            <button onClick={()=>console.log(`отклик на заявку : ${product.id}`)} className="px-[1vh] py-[1vh] text-[1.5vh] font-bold rounded-md bg-primary">Откликнуться</button>
            <button onClick={()=>console.log(`показать на карте заявку : ${product.id}`)} className="px-[1vh] py-[1vh] text-[1.5vh] font-bold rounded-md border ml-[3vw]">На карте</button>
        </div>
        <div className="stars flex items-center">
            {[...Array(5)].map((_, index) => (
                index < product.rating ? <IoStar className={`star mx-[.5vh] h-[1.8vh] w-[1.8vh] text-primary`} key={index} /> : <IoStarOutline className={`star mx-[.5vh] h-[1.8vh] w-[1.8vh] ]`} key={index} />
            ))}
        </div>
      </div></div>: null
      }
      <div className="expandBtn absolute right-[3%] -translate-y-[3vh]"> 
        <button
          className="mt-[.7vh] px-[1vw] py-[.7vh]"
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? <IoIosArrowUp className="w-[1.7vh] h-[1.7vh]" /> : <IoIosArrowDown className="w-[1.7vh] h-[1.7vh]" />}
        </button>
      </div>
    </div>
  );
}
