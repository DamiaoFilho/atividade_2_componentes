import Image from "next/image";
import { Square, Trash2, SquarePen, CheckCircleIcon } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";

interface props {
    name: string;
    description: string;
    removeTask: (name: string) => void;
    udpateTask: (oldName: string, newName: string, newDescription: string) => void;
}

export default function Card({ name, description, removeTask, udpateTask }: props) {
    const [isEditing, setIsEditing] = useState<boolean>(false);
    const [title, setTitle] = useState<string>(name);
    const [desc, setDesc] = useState<string>(description);
    const { register, handleSubmit } = useForm();

    return (
        <form
            className="flex flex-col gap-5 border-gray-300 border-1 rounded-md w-2xl p-5"
            onSubmit={handleSubmit(() => {
                udpateTask(name, title, desc);
                setIsEditing(false);
            })}
        >
            <div className="flex flex-row items-center justify-between">
                <div className="flex flex-row items-center gap-4">
                    <input
                        type="checkbox"
                        className="h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded bg-transparent"
                    />
                    <input
                        {...register("title")}
                        disabled={!isEditing}
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="text-black font-bold"
                    />
                </div>
                <div className="flex flex-row items-center gap-4">
                    {isEditing ? (
                        <>
                            <button type="submit">
                                <CheckCircleIcon color="black" width={18} height={18} />
                            </button>
                        </>
                    ) : (
                        <>
                            <SquarePen onClick={() => setIsEditing(true)} color="black" width={18} height={18} />
                            <Trash2 onClick={() => removeTask(name)} color="black" width={18} height={18} />
                        </>
                    )}
                </div>
            </div>
            <input
                {...register("description")}
                value={desc}
                disabled={!isEditing}
                onChange={(e) => setDesc(e.target.value)}
                className="text-gray-500 text-justify"
            />
        </form>
    );
}