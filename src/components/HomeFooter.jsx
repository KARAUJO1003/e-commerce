import { HelpCircle, HomeIcon, LogOut, Phone, ShoppingBag } from "lucide-react";
import { CardFooter } from "./ui/card";

const HomeFooter = () => {
  return (
    <CardFooter className="flex flex-col py-5 items-start">
      <div className="my-5">
        <h1 className="text-lg font-bold text-blue-700 mb-5"> X-COM</h1>
        <ul className="flex flex-col gap-3 text-zinc-400">
          <li className="flex items-center justify-start gap-2 cursor-pointer dark:hover:text-zinc-200 hover:text-zinc-800">
            <HomeIcon size={17} /> <span>Home</span>
          </li>
          <li className="flex items-center justify-start gap-2 cursor-pointer dark:hover:text-zinc-200 hover:text-zinc-800">
            <HelpCircle size={17} /> <span>About</span>
          </li>
          <li className="flex items-center justify-start gap-2 cursor-pointer dark:hover:text-zinc-200 hover:text-zinc-800">
            <ShoppingBag size={17} /> <span>Products</span>
          </li>
          <li className="flex items-center justify-start gap-2 cursor-pointer dark:hover:text-zinc-200 hover:text-zinc-800">
            <Phone size={17} /> <span>Contact</span>
          </li>
          <li className="flex items-center justify-start gap-2 cursor-pointer dark:hover:text-zinc-200 hover:text-zinc-800">
            <LogOut size={17} /> <span>Exit</span>
          </li>
        </ul>
      </div>
    </CardFooter>
  );
}

export default HomeFooter;
