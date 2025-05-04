import Image from "next/image";
import Button from "./button";

interface Props{
  addTask: (name:string, description:string) => void
}

export default function MainCard({addTask}: Props) {
  return (
    <div className="flex flex-col gap-5 border-gray-300 border-1 rounded-md w-3xl p-5">
      <h1 className="text-black font-bold text-xl">Nova Tarefa</h1>
      <form onSubmit={(e) => {
        e.preventDefault()
        addTask("nova tarefa", "nova descrição")
      }} className="flex flex-col gap-5">
        <input placeholder="Título da Tarefa"
            className="border-gray-300 border-1 p-4 rounded-md w-[100%] h-5 text-gray-900 text-md"/>
        <textarea 
            className="border-gray-300 border-1 p-4 rounded-md w-[100%] h-[25%] text-gray-700 text-md"
            placeholder="Descrição (Opcional)"
            ></textarea>
        <Button/>
      </form>
    </div>
  );
}
