import CamisaTrinus01 from "@/assets/1.png";
import CamisaTrinus02 from "@/assets/2.png";
import CamisaTrinus03 from "@/assets/3.png";
import CamisaTrinus04 from "@/assets/4.png";
import CamisaTrinus05 from "@/assets/5.png";
import CamisaTrinus06 from "@/assets/6.png";
import CamisaTrinus07 from "@/assets/7.png";
import CamisaTrinus08 from "@/assets/8.png";
import CamisaTrinus09 from "@/assets/9.png";
import CamisaTrinus10 from "@/assets/10.png";
import CamisaTrinus11 from "@/assets/11.png";
import CamisaTrinus12 from "@/assets/12.png";
import { Card, CardContent, CardFooter } from "./ui/card";
import Image from "next/image";
import { Button } from "./ui/button";
import { ShoppingCart } from "lucide-react";



function CardProduct({src, ...props}) {
  return (
    <Card className="h-min w-min flex flex-col justify-between shadow-lg bg-zinc-200 dark:bg-zinc-950 border hover:border-blue-700">
      <CardContent className='flex items-center justify-center'>
        <Image
          className="hover:scale-105 transition-all mt-3 flex items-center justify-center"
          src={src}
          alt="Imagem prudto 01"
          
        />
      </CardContent>
      <CardFooter className="flex  items-start">
        <div className="flex items-center border justify-between rounded-full mb-5 pl-5">
          <span className="text-xs font-bold text-zinc-700 dark:text-zinc-200">Caneca trinus</span>
          <Button className="bg-blue-700 hover:bg-blue-800 rounded-full text-white ml-3 gap-2 text-xs">
            <ShoppingCart size={15} />
            R$ 79,90
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}

export default CardProduct;
