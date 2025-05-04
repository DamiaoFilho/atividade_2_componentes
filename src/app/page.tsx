"use client"
import MainCard from "./components/main_card";
import Card from "./components/card";
import { useState } from "react";
interface Task{
  title: string;
  description: string;
}

export default function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = (name: string, description: string) => {
    setTasks([...tasks, {title:name, description:description}])
  }

  return (
    <div className="flex flex-col gap-5 justify-center items-center min-h-screen min-w-screen">
      <h1 className="text-black font-bold p-2 font text-3xl">
        Lista de Tarefas
      </h1>
      <MainCard addTask={addTask}></MainCard>

      <div className="flex flex-row justify-around w-3xl gap-2">
        {tasks.map((task, index) => (
          <Card key={index} name={task.title} description={task.description} />
        ))}
      </div>
    </div>
  );
}
