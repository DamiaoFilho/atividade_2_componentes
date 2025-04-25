import Image from "next/image";
import { Plus } from "lucide-react";

export default function Button() {
  return (
    <button className="flex justify-around flex-row rounded-md bg-black p-1 h-10" type="submit">
        <div className="flex flex-row gap-4 justify-center items-center">
            <Plus/>
            <span className="text-sm font-bold">Adicionar Tarefa</span>
        </div>
    </button>
  );
}
