import Image from "next/image";
import MainCard from "./components/main_card";
import Card from "./components/card";

export default function Home() {
  return (
    <div className="flex flex-col gap-5 justify-center items-center min-h-screen min-w-screen">
      <h1 className="text-black font-bold p-2 font text-3xl">
        Lista de Tarefas
      </h1>
      <MainCard></MainCard>
      <div className="flex flex-row justify-around w-3xl gap-2">
        <Card
          name="Exemplo de Tarefa"
          description="Esta é uma tarefa de exemplo. Você pode marcar como concluída, editar ou excluir."
          ></Card>
        <Card
          name="teste"
          description="teste"
        ></Card>
      </div>
    </div>
  );
}
