"use client";

import {
  ArrowLeft,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  HelpCircle,
  HomeIcon,
  LogOut,
  Phone,
  ShoppingBag,
} from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";

const SideBar = () => {
  const [openSide, setOpenSide] = useState(false);

  return (
    <div
      className={`bg-white mt-20 dark:bg-zinc-900 border-r gap-5 flex max-h-screen flex-col items-center justify-start relative ${
        openSide ? "col-span-1 p-12" : "w-16 p-2"
      }`}
    >
      <Button
      variant='secondary'
        className={` p-2 h-auto  ${openSide ? "absolute  top-2 -right-4 z-20" : 'text-zinc-3000 p-2 w-min'}`}
        onClick={() => setOpenSide(!openSide)}
      >
        
        {openSide ? <ChevronLeft size={15}/> : <ChevronRight size={15}/>}{" "}
      </Button>
      {openSide ? (
        <div>
          <span className="font-bold text-lg text-zinc-500 dark:text-zinc-300">
            Nagação rápida
          </span>
          <ul className="flex flex-col gap-3 text-zinc-500">
            <li className="flex items-center justify-start gap-2 cursor-pointer dark:hover:text-zinc-200 hover:text-zinc-800">
              <HomeIcon size={17} /> <span>Home</span>
            </li>
            <li className="flex items-center justify-start gap-2 cursor-pointer dark:hover:text-zinc-200 hover:text-zinc-800">
              <ShoppingBag size={17} /> <span>Products</span>
            </li>
            <li className="flex items-center justify-start gap-2 cursor-pointer dark:hover:text-zinc-200 hover:text-zinc-800">
              <Phone size={17} /> <span>Contact</span>
            </li>
            <li className="flex items-center justify-start gap-2 cursor-pointer dark:hover:text-zinc-200 hover:text-zinc-800">
              <HelpCircle size={17} /> <span>About</span>
            </li>
            <li className="flex items-center justify-start gap-2 cursor-pointer dark:hover:text-zinc-200 hover:text-zinc-800">
              <LogOut size={17} /> <span>Exit</span>
            </li>
          </ul>
          <ul className="text-zinc-500">
            <span className="font-bold text-lg text-zinc-500 dark:text-zinc-300">
              Filters
            </span>
            <li className="mt-1">
              <input type="checkbox" className="mr-2" />
              <label>Mais buscados</label>{" "}
            </li>
            <li className="mt-1">
              <input type="checkbox" className="mr-2" />
              <label>Mais recentes</label>{" "}
            </li>
            <li className="mt-1">
              <input type="checkbox" className="mr-2" />
              <label>Menor preço</label>{" "}
            </li>
            <li className="mt-1">
              <input type="checkbox" className="mr-2" />
              <label>Maior preço</label>{" "}
            </li>
          </ul>{" "}
        </div>
      ) : (
        <div className="flex h-full py-10 items-start justify-center">
          <ul className="flex flex-col gap-5 text-zinc-500">
            <li className="flex items-center justify-start gap-2 cursor-pointer dark:hover:text-zinc-200 hover:text-zinc-800 ">
              <HomeIcon size={22} />
            </li>
            <li className="flex items-center justify-start gap-2 cursor-pointer dark:hover:text-zinc-200 hover:text-zinc-800">
              <ShoppingBag size={22} />
            </li>
            <li className="flex items-center justify-start gap-2 cursor-pointer dark:hover:text-zinc-200 hover:text-zinc-800">
              <Phone size={22} />
            </li>
            <li className="flex items-center justify-start gap-2 cursor-pointer dark:hover:text-zinc-200 hover:text-zinc-800">
              <HelpCircle size={22} />
            </li>
            <li className="flex items-center justify-start gap-2 cursor-pointer dark:hover:text-zinc-200 hover:text-zinc-800">
              <LogOut size={22} />
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default SideBar;
