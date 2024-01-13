import { HelpCircle, HomeIcon, LogOut, Phone, ShoppingBag } from "lucide-react";

const SideBar = () => {
  return (
    <div className="bg-white mt-20 dark:bg-zinc-900 border-r col-span-1 p-12 gap-5 flex flex-col">
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
      </ul>
    </div>
  );
};

export default SideBar;
