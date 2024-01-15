"use client";

import { ModeToggle } from '@/components/ModeToggleTheme';
import { ShoppingCart, Search } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";
import LogoPreta from "@/assets/logo-preta.png";
import LogoBranca from "@/assets/logo-branca.png";
import { useTheme } from "next-themes";
import { Input } from './ui/input';

export default function Header() {
  const { theme } = useTheme();

  return (
    <div className="flex items-center justify-between h-20 px-20 w-full bg-zinc-100 dark:bg-zinc-900 z-20 fixed top-0 left-0 border-b">
      <div className="flex items-center justify-start w-1/3">
        <Button className="p-0 h-10 w-10 mr-1" variant="ghost">
          <Link className="p-0 m-0" href={"/"}>
            <Image
              alt="Minha logo"
              src={theme === "dark" ? LogoBranca : LogoPreta}
              height={200}
              width={200}
            />
          </Link>
        </Button>
        <span className="font-bold text-lg">X-ORION</span>
        <nav className="text-zinc-500  font-semibold gap-3 flex ml-5 text-sm">
          <Link
            className="hover:border-b hover:text-black dark:hover:text-zinc-50"
            href={"/"}
          >
            All
          </Link>
          <Link
            className="hover:border-b hover:text-black dark:hover:text-zinc-50"
            href={"/"}
          >
            Shirts
          </Link>
          <Link
            className="hover:border-b hover:text-black dark:hover:text-zinc-50"
            href={"/"}
          >
            Stickers
          </Link>
        </nav>
      </div>

      <div className="bg-transparent flex items-center  justify-between rounded-md border dark:border-zinc-700 h-10 w-1/3">
        <input
          placeholder="Search for products"
          className="bg-transparent border-none focus:outline-none pl-4 text-sm "
        />
        
        <Button
          variant="ghost"
          className="hover:bg-transparent px-2 text-zinc-400 hover:text-zinc-950 dark:hover:text-zinc-300"
        >
          <Search />
        </Button>
      </div>

      <div className="w-1/3 flex justify-end  gap-1">
        <ModeToggle />
        <Button 
        variant={'ghost'}
        className="px-2"
        >
          <ShoppingCart />
        </Button>
      </div>
    </div>
  );
}
