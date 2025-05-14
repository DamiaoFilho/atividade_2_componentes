"use client"
import MainCard from "./components/main_card";
import Card from "./components/card";
import { useEffect, useState } from "react";
interface Task{
  title: string;
  description: string;
}

export default function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);
  
  useEffect(() => {
    const storedTasks = localStorage.getItem("tasks");
    if(storedTasks){
      setTasks(JSON.parse(storedTasks))
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks))
  }, [tasks]);

  const addTask = (name: string, description: string) => {
    setTasks([...tasks, {title:name, description:description}])
  }

  const removeTask = (name: string) => {
    setTasks(tasks.filter(task => task.title !== name));
  }

  const updateTask = (oldName: string, newName: string, newDescription: string) => {
    setTasks(tasks.map(task => 
      task.title === oldName ? { title: newName, description: newDescription } : task
    ));
  }

  return (
    <div className="flex flex-col gap-5 justify-center items-center min-h-screen min-w-screen">
      <h1 className="text-black font-bold p-2 font text-3xl">
        Lista de Tarefas
      </h1>
      <MainCard addTask={addTask}></MainCard>

      <div className="flex flex-row justify-around w-3xl gap-2">
        {tasks.map((task, index) => (
          <Card udpateTask={updateTask} removeTask={removeTask} key={index} name={task.title} description={task.description} />
        ))}
      </div>
    </div>
  );
}
