import { Percent } from "lucide-react";

const SalesMiniCards = () => {
  return (
    <span className="rounded-md p-6  px-10 text-zinc-200 bg-blue-700 flex items-center justify-center gap-2">

      <Percent />
      <p>Ofertas</p>
    </span>
  );
}

export default SalesMiniCards;
