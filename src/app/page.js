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
      <div className="w-full grid grid-cols-4 gap-5">
        <div className="bg-white dark:bg-zinc-950 col-span-1 rounded-md p-12 gap-5 flex flex-col">
          <span>LOGO</span>
          <ul>
            <li>pagina inicial</li>
            <li>pagina inicial</li>
            <li>pagina inicial</li>
            <li>pagina inicial</li>
            <li>pagina inicial</li>

          </ul>
        </div>

        <Card className="min-h-min col-span-2  flex flex-col justify-between hover:border-blue-700 relative">
          <CardContent className=" mb-5 flex flex-col items-center justify-center">
            <Image
              className="hover:scale-105 transition-all rotate-12 "
              src={CamisaTrinus06}
              alt="Imagem prudto 08"
              height={500}
              width={500}
              quality={100}
            />
          </CardContent>
          <CardFooter className="flex flex-col items-start absolute bottom-5">
            <div className="flex items-center border justify-between rounded-full mb-5 pl-5">
              <span className="text-xl font-bold text-zinc-200">
                Garrafa térmica dos Sharks
              </span>
              <Button className="bg-blue-700 h-full hover:bg-blue-800 rounded-full text-white ml-3 gap-2 text-xl">
                <ShoppingCart />
                R$ 79,90
              </Button>
            </div>
          </CardFooter>
        </Card>

        <div className="flex flex-col gap-5">
          <Card className="h-full hover:border-blue-700 relative">
            <CardContent className="mb-5">
              <Image
                className="hover:scale-105 transition-all"
                src={CamisaTrinus01}
                alt="Imagem prudto 01"
                width={300}
                height={300}
              />
            </CardContent>
            <CardFooter className="flex flex-col items-start absolute bottom-0">
              <div className="flex items-center border justify-between rounded-full mb-5 pl-5 backdrop-blur-sm">
                <span className="text-md font-bold text-zinc-200">
                  Casaco UP
                </span>
                <Button className="bg-blue-700 hover:bg-blue-800 rounded-full text-white ml-3 gap-2 text-md">
                  <ShoppingCart size={20} />
                  R$ 79,90
                </Button>
              </div>
            </CardFooter>
          </Card>
          <Card className="h-min hover:border-blue-700 relative">
            <CardContent className=" mb-5">
              <Image
                className="hover:scale-105 transition-all"
                src={CamisaTrinus05}
                alt="Imagem prudto 01"
                width={300}
                height={300}
              />
            </CardContent>
            <CardFooter className="flex flex-col items-start absolute bottom-0">
              <div className="flex items-center border justify-between rounded-full mb-5 pl-5 backdrop-blur-sm">
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
      <ScrollArea className=" whitespace-nowrap rounded-md border w-full">
        <div className="w-full h-80 flex gap-5">
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>

      <CardFooter className="flex flex-col py-5 items-start">
        <div>
          <h1 className="text-lg font-bold text-blue-700"> LOGO</h1>
          <ul className="gap-2 flex flex-col mb-10 mt-5">
            <li>home</li>
            <li>home</li>
            <li>home</li>
            <li>home</li>
            <li>home</li>
          </ul>
        </div>
        <div className="border-t border-zinc-700 w-full py-5">
          direitos reservados
        </div>
      </CardFooter>
    </main>
  );
}
