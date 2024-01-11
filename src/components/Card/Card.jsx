import CamisaTrinus01 from "@/assets/1.png";
import CamisaTrinus02 from "@/assets/2.png";
import CamisaTrinus03 from "@/assets/3.png";
import CamisaTrinus04 from "@/assets/4.png";
import CamisaTrinus05 from "@/assets/5.png";
import CamisaTrinus06 from "@/assets/6.png";
import CamisaTrinus07 from "@/assets/7.png";
import CamisaTrinus08 from "@/assets/8.png";
import CamisaTrinus09 from "@/assets/9.png";
import { Card, CardContent, CardFooter } from "../ui/card";
import Image from "next/image";
import { Button } from "../ui/button";
import { ShoppingCart } from "lucide-react";



function CardProduct() {
  return (
    <Card className=" w-[450px] hmin">
      <CardContent className='flex items-center justify-center'>
        <Image
          className="hover:scale-105 transition-all"
          src={CamisaTrinus08}
          alt="Imagem prudto 01"
          width={200}
          height={200}
        />
      </CardContent>
      <CardFooter className="flex  items-start">
        <div className="flex items-center border justify-between rounded-full mb-5 pl-5">
          <span className="text-md font-bold text-zinc-200">Caneca trinus</span>
          <Button className="bg-blue-700 hover:bg-blue-800 rounded-full text-white ml-3 gap-2 text-md">
            <ShoppingCart size={20} />
            R$ 79,90
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}

export default CardProduct;
