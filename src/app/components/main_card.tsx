import Image from "next/image";
import Button from "./button";
import { useForm } from "react-hook-form";
interface Props{
  addTask: (name:string, description:string) => void
}

export default function MainCard({addTask}: Props) {
  const { register, handleSubmit } = useForm();

  return (
    <div className="flex flex-col gap-5 border-gray-300 border-1 rounded-md w-3xl p-5">
      <h1 className="text-black font-bold text-xl">Nova Tarefa</h1>
      <form onSubmit={handleSubmit((e) => {
        addTask(e.title, e.description)
      })} className="flex flex-col gap-5">
        <input placeholder="Título da Tarefa"
          {...register("title")}
          className="border-gray-300 border-1 p-4 rounded-md w-[100%] h-5 text-gray-900 text-md"/>
        <textarea 
          className="border-gray-300 border-1 p-4 rounded-md w-[100%] h-[25%] text-gray-700 text-md"
          {...register("description")}
          placeholder="Descrição (Opcional)"
        ></textarea>
        <Button/>
      </form>
    </div>
  );
}
