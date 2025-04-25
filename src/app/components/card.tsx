import Image from "next/image";
import { Square, Trash2, SquarePen } from "lucide-react";

interface props {
    name: string
    description: string
}

export default function Card({name, description}:props) {
  return (
    <div className="flex flex-col gap-5 border-gray-300 border-1 rounded-md w-2xl p-5">
        <div className="flex flex-row items-center justify-between">
            <div className="flex flex-row items-center gap-4">
                <input
                    type="checkbox"
                    className="h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded bg-transparent"
                />
                <span className="text-black font-bold">{name}</span>
            </div>
            <div className="flex flex-row items-center gap-4">
                <SquarePen color="black" width={18} height={18}/>
                <Trash2 color="black" width={18} height={18}/>
            </div>
        </div>
        <span className="text-gray-500 text-justify">
            {description}
        </span>
    </div>
  );
}
