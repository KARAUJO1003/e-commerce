import { Percent } from "lucide-react";
import { CardDescription, CardTitle } from "./ui/card";

function RecentCategoryCard({titulo, descriçao}) {
  return (
    <div className="flex items-center bg-zinc-900 border shadow-md max-w-80 rounded-lg overflow-hidden gap-3">
      <div className=" w-24 h-24 bg-zinc-800 flex items-center justify-center">
        <Percent className="text-zinc-500" size={48} />
      </div>
      <div className="pr-5">
        <CardTitle>{titulo}</CardTitle>
        <CardDescription>{descriçao}</CardDescription>
      </div>
    </div>
  );
}

export default RecentCategoryCard;
