"use client";

import { ModeToggle } from "@/components/Header/TogleModeTheme/ModeToggle";
import { ShoppingCart, Search } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";
import Image from "next/image";
import LogoPreta from "@/assets/logo-preta.png";
import LogoBranca from "@/assets/logo-branca.png";
import { useTheme } from "next-themes";

export default function Header() {
  const { theme } = useTheme();

  return (
    <div className="flex items-center justify-between h-20 px-20 w-full bg-zinc-100 dark:bg-zinc-800 z-20 fixed top-0 left-0">
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
        <span className="font-bold text-lg">X-COM</span>
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
          className="bg-transparent border-none focus:outline-none pl-4 text-sm"
        />
        <Button
          variant="ghost"
          className="hover:bg-transparent text-zinc-600 hover:text-zinc-950 dark:hover:text-zinc-300"
        >
          <Search />
        </Button>
      </div>

      <div className="w-1/3 flex justify-end">
        <ModeToggle />
        <Button variant={'ghost'}>
          <ShoppingCart />
        </Button>
      </div>
    </div>
  );
}
