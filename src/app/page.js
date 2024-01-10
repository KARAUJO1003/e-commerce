import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import CamisaTrinus01 from "@/assets/1.png";
import CamisaTrinus02 from "@/assets/2.png";
import CamisaTrinus03 from "@/assets/3.png";
import CamisaTrinus04 from "@/assets/4.png";
import CamisaTrinus05 from "@/assets/5.png";
import CamisaTrinus06 from "@/assets/6.png";
import CamisaTrinus07 from "@/assets/7.png";
import CamisaTrinus08 from "@/assets/8.png";
import CamisaTrinus09 from "@/assets/9.png";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import CardProduct from "@/components/Card/Card";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col gap-5 bg-zinc-100 dark:bg-zinc-800 justify-center p-20">
      <div className=" flex gap-5">
        <Card className="min-h-min w-full max-h-full flex flex-col justify-between hover:border-blue-700">
          <CardContent className=" mb-5 flex flex-col items-center justify-center">
            <Image
              className="hover:scale-105 transition-all rotate-12"
              src={CamisaTrinus06}
              alt="Imagem prudto 08"
              height={700}
              width={700}
              quality={100}
            />
          </CardContent>
          <CardFooter className="flex flex-col items-start">
            <div className="flex items-center border justify-between rounded-full mb-5 pl-5">
              <span className="text-xl font-bold text-zinc-200">
                Garrafa térmica dos Sharks
              </span>
              <Button className="bg-blue-700 hover:bg-blue-800 rounded-full text-white ml-3 gap-2 text-xl">
                <ShoppingCart />
                R$ 79,90
              </Button>
            </div>
          </CardFooter>
        </Card>

        <div className="flex flex-col w-1/3 gap-5">
          <Card className="h-full hover:border-blue-700">
            <CardContent className="border-b mb-5">
              <Image
                className="hover:scale-105 transition-all"
                src={CamisaTrinus01}
                alt="Imagem prudto 01"
                width={400}
                height={400}
              />
            </CardContent>
            <CardFooter className="flex flex-col items-start">
              <div className="flex items-center border justify-between rounded-full mb-5 pl-5">
                <span className="text-md font-bold text-zinc-200">
                  Casaco level UP!
                </span>
                <Button className="bg-blue-700 hover:bg-blue-800 rounded-full text-white ml-3 gap-2 text-md">
                  <ShoppingCart size={20} />
                  R$ 79,90
                </Button>
              </div>
            </CardFooter>
          </Card>
          <Card className="h-full hover:border-blue-700">
            <CardContent className="border-b mb-5">
              <Image
                className="hover:scale-105 transition-all"
                src={CamisaTrinus05}
                alt="Imagem prudto 01"
                width={400}
                height={400}
              />
            </CardContent>
            <CardFooter className="flex flex-col items-start">
              <div className="flex items-center border justify-between rounded-full mb-5 pl-5">
                <span className="text-md font-bold text-zinc-200">
                  Caneca trinus
                </span>
                <Button className="bg-blue-700 hover:bg-blue-800 rounded-full text-white ml-3 gap-2 text-md">
                  <ShoppingCart size={20} />
                  R$ 79,90
                </Button>
              </div>
            </CardFooter>
          </Card>
        </div>
      </div>
      <ScrollArea
        className='w-96 whitespace-nowrap h-56'
        
      >
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />

        <ScrollBar orientation="horizontal"/>

      </ScrollArea>
    </main>
  );
}
