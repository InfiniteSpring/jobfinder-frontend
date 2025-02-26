"use client";

import { useState } from "react";
import { Product } from "@/types";

import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { IoStar, IoStarOutline } from "react-icons/io5";

export default function ProductCardClient({ product }: { product: Product }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="p-4 py-6 my-5 rounded-xl bg-mainBackground text-foreground">
      <div className="firstLine flex justify-between">
        <h2 className="text-xl font-bold">{product.name}</h2>
        <p className="text-primary text-xl font-bold">{product.price} BYN / {product.duration}</p>
      </div>
      <div className="secondLine flex justify-between">
        <span>{product.timePosted}</span>
        <div className="pr-20">{product.place}</div>
      </div>
      {
        expanded ? <div><div className="descriptionLine">
        <p className="pr-10 py-3 font-thin">{product.description}</p>
        <span className="mt-3 text-lg font-bold">Когда нужно выполнить: {product.timeToComplete}</span> 
      </div> 
      <div className="contactLine flex justify-between pr-10 my-5">
        <div>
            <button onClick={()=>console.log(`отклик на заявку : ${product.id}`)} className="px-3 py-2 text-lg font-bold rounded-md bg-primary">Откликнуться</button>
            <button onClick={()=>console.log(`показать на карте заявку : ${product.id}`)} className="px-3 py-2 text-lg font-bold rounded-md border ml-5">На карте</button>
        </div>
        <div className="stars flex items-center">
            {[...Array(5)].map((_, index) => (
                index < product.rating ? <IoStar className={`star mx-1 h-5 w-5 text-primary`} key={index} /> : <IoStarOutline className={`star mx-1 h-5 w-5`} key={index} />
            ))}
        </div>
      </div></div>: null
      }
      <div className="expandBtn absolute right-8 -translate-y-10"> 
        <button
          className="mt-2 px-4 py-2"
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? <IoIosArrowUp className="w-6 h-6" /> : <IoIosArrowDown className="w-6 h-6" />}
        </button>
      </div>
    </div>
  );
}
