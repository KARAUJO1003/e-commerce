"use client";
import Image from "next/image";
import CamisaTrinus06 from "@/assets/6.png";
import CamisaTrinus01 from "@/assets/1.png";
import CamisaTrinus05 from "@/assets/5.png";
import CamisaTrinus09 from "@/assets/9.png";
import CamisaTrinus10 from "@/assets/10.png";
import { Button } from "@/components/ui/button";
import CardProduct from "@/components/ProductCard";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  HelpCircle,
  HomeIcon,
  LogOut,
  Percent,
  Phone,
  ShoppingBag,
  ShoppingCart,
} from "lucide-react";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import SideBar from "@/components/SideBar";
import HomeFooter from "@/components/HomeFooter";
import { useEffect, useState } from "react";

export default function Home() {
  const [scrollRef, setScrollRef] = useState(null);

  useEffect(() => {
    // Verifica se a referência ao elemento de rolagem está disponível
    if (scrollRef) {
      // Obtém a largura total da div de rolagem
      const scrollWidth = scrollRef.scrollWidth;

      // Define a posição inicial para o centro
      const initialScrollPosition = scrollWidth / 2;

      // Define a posição do scroll
      scrollRef.scrollLeft = initialScrollPosition;
    }
  }, []);

  return (
    <main className="flex min-h-screen flex-col gap-5 bg-zinc-100 dark:bg-zinc-900 justify-start ">
      <div className="grid grid-flow-col-dense">
        <SideBar className="fixed left-0 top-0 " />
        <ScrollArea>
          <div className="bg-blue-700 h-[270px] flex items-center mt-20 justify-center">
            <h1 className="text-3xl"> Aproveite a super oferta </h1>
          </div>
          <div className="w-full max-h-screen grid grid-cols-4  gap-5 py-5 px-5 ">
            <ScrollArea className=" whitespace-nowrap rounded-md col-span-full">
              <div className="w-full pb-3 flex gap-5">
                <CardProduct height={500} width={500} src={CamisaTrinus05} />
                <CardProduct height={500} width={500} src={CamisaTrinus01} />
                <CardProduct height={500} width={500} src={CamisaTrinus10} />
                <CardProduct height={500} width={500} src={CamisaTrinus06} />
                <CardProduct height={500} width={500} src={CamisaTrinus05} />
                <CardProduct height={500} width={500} src={CamisaTrinus05} />
              </div>
              <ScrollBar orientation="horizontal" />
            </ScrollArea>
            <ScrollArea className=" whitespace-nowrap rounded-md col-span-full">
              <div className="w-full pb-3 flex gap-5">
                <CardProduct height={500} width={500} src={CamisaTrinus01} />
                <CardProduct height={500} width={500} src={CamisaTrinus05} />
                <CardProduct height={500} width={500} src={CamisaTrinus06} />
                <CardProduct height={500} width={500} src={CamisaTrinus05} />
                <CardProduct height={500} width={500} src={CamisaTrinus06} />
                <CardProduct height={500} width={500} src={CamisaTrinus10} />
              </div>
              <ScrollBar orientation="horizontal" />
            </ScrollArea>
            <div className="col-span-full flex flex-col mt-5 justify-center">
              <ScrollArea className=" whitespace-nowrap rounded-md w-full ">
                <div className="pb-3 flex gap-5 p-3 border w-full">
                  <span className="rounded-md p-6 px-10 bg-blue-700 flex items-center justify-center gap-2">
                    <Percent />
                    <p>Ofertas</p>
                  </span>
                  <span className="rounded-md p-6 px-10 bg-blue-700 flex items-center justify-center gap-2">
                    <Percent />
                    <p>Ofertas</p>
                  </span>
                  <span className="rounded-md p-6 px-10 bg-blue-700 flex items-center justify-center gap-2">
                    <Percent />
                    <p>Ofertas</p>
                  </span>
                  <span className="rounded-md p-6 px-10 bg-blue-700 flex items-center justify-center gap-2">
                    <Percent />
                    <p>Ofertas</p>
                  </span>
                  <span className="rounded-md p-6 px-10 bg-blue-700 flex items-center justify-center gap-2">
                    <Percent />
                    <p>Ofertas</p>
                  </span>
                  <span className="rounded-md p-6 px-10 bg-blue-700 flex items-center justify-center gap-2">
                    <Percent />
                    <p>Ofertas</p>
                  </span>
                  <span className="rounded-md p-6 px-10 bg-blue-700 flex items-center justify-center gap-2">
                    <Percent />
                    <p>Ofertas</p>
                  </span>
                  <span className="rounded-md p-6 px-10 bg-blue-700 flex items-center justify-center gap-2">
                    <Percent />
                    <p>Ofertas</p>
                  </span>
                  <span className="rounded-md p-6 px-10 bg-blue-700 flex items-center justify-center gap-2">
                    <Percent />
                    <p>Ofertas</p>
                  </span>
                  <span className="rounded-md p-6 px-10 bg-blue-700 flex items-center justify-center gap-2">
                    <Percent />
                    <p>Ofertas</p>
                  </span>
                </div>
                <ScrollBar
                  ref={(ref) => setScrollRef(ref)}
                  orientation="horizontal"
                />
              </ScrollArea>
                <div className="my-5 flex flex-col gap-3">
                  <div className="flex items-center bg-zinc-900 border shadow-md max-w-80 rounded-lg overflow-hidden gap-3">
                    <div className=' w-24 h-24 bg-zinc-800 flex items-center justify-center'>
                      <Percent className="text-zinc-500" size={48}/>
                    </div>
                    <div className="pr-5">
                      <CardTitle>Automoveis</CardTitle>
                      <CardDescription>Encontre o que você procura</CardDescription>
                    </div>
                  </div>
                  <div className="flex items-center bg-zinc-900 border shadow-md max-w-80 rounded-lg overflow-hidden gap-3">
                    <div className=' w-24 h-24 bg-zinc-800 flex items-center justify-center'>
                      <Percent className="text-zinc-500" size={48}/>
                    </div>
                    <div className="pr-5">
                      <CardTitle>Eletrodomesticos</CardTitle>
                      <CardDescription>Encontre o que você procura</CardDescription>
                    </div>
                  </div>
                  <div className="flex items-center bg-zinc-900 border shadow-md max-w-80 rounded-lg overflow-hidden gap-3">
                    <div className=' w-24 h-24 bg-zinc-800 flex items-center justify-center'>
                      <Percent className="text-zinc-500" size={48}/>
                    </div>
                    <div className="pr-5">
                      <CardTitle>Casa</CardTitle>
                      <CardDescription>Encontre o que você procura</CardDescription>
                    </div>
                  </div>
                </div>
            </div>
            <HomeFooter />
          </div>
        </ScrollArea>
      </div>
    </main>
  );
}
