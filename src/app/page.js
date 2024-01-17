"use client";

import CamisaTrinus06 from "@/assets/6.png";
import CamisaTrinus01 from "@/assets/1.png";
import CamisaTrinus05 from "@/assets/5.png";
import CamisaTrinus10 from "@/assets/10.png";
import CardProduct from "@/components/ProductCard";
import { Card, CardContent } from "@/components/ui/card";
import { Percent } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import SideBar from "@/components/SideBar";
import HomeFooter from "@/components/HomeFooter";
import { useEffect, useState } from "react";
import RecentCategoryCard from "@/components/RecentCategoryCard";
import SalesMiniCards from "@/components/SalesMiniCards";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col gap-5 bg-zinc-100 dark:bg-zinc-900 justify-start ">
      <div className="grid grid-flow-col-dense">
        <SideBar className="fixed left-0 top-0 " />
        <ScrollArea >
          <div className=" h-auto relative py-3 flex flex-col items-center mt-20 justify-center ">
            <Carousel
              opts={{
                align: "center",
                loop: true,
              }}
              className="w-full max-w-full "
            >
              <CarouselContent>
                {Array.from({ length: 5 }).map((_, index) => (
                  <CarouselItem
                    key={index}
                    className="md:basis-1/2  lg:basis-1/3"
                  >
                    <div className="p-1">
                      <Card>
                        <CardContent className="flex bg-zinc-200 dark:bg-zinc-950 h-80 items-center justify-center p-6">
                          <span className="text-3xl font-semibold">
                            {index + 1}
                          </span>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="absolute bottom-0 left-1/3" />
              <CarouselNext className="absolute bottom-0 right-1/3" />
            </Carousel>
          </div>

          <ScrollArea className=" whitespace-nowrap rounded-md w-screen ">
            <div className="pb-3 flex gap-5 p-3 border w-full">
              <SalesMiniCards />
              <SalesMiniCards />
              <SalesMiniCards />
              <SalesMiniCards />
              <SalesMiniCards />
              <SalesMiniCards />
              <SalesMiniCards />
              <SalesMiniCards />
              <SalesMiniCards />
              <SalesMiniCards />
              <SalesMiniCards />
              <SalesMiniCards />
            </div>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>

          <div className="w-full  grid grid-cols-4  gap-5 py-5 px-5 ">
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


          </div>
            <div className="col-span-full flex flex-col s justify-center">
              <div className="bg-zinc-200 dark:bg-zinc-950 h-80 w-full rounded-md"></div>
              <div className="my-5 grid grid-cols-3 gap-3">
                <RecentCategoryCard titulo={"titulo"} descriçao={"algo"} />
                <RecentCategoryCard titulo={"titulo"} descriçao={"algo"} />
                <RecentCategoryCard titulo={"titulo"} descriçao={"algo"} />
                <RecentCategoryCard titulo={"titulo"} descriçao={"algo"} />
                <RecentCategoryCard titulo={"titulo"} descriçao={"algo"} />
                <RecentCategoryCard titulo={"titulo"} descriçao={"algo"} />
              </div>
            <HomeFooter />
            </div>
        </ScrollArea>
      </div>
    </main>
  );
}
