"use client";
import { ChangeEvent, useState } from "react";
import Task from "@/components/Task";
import { ITask } from "@/types/Task";
import { randomStringId } from "@/utils/randomStringId";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { addTask } from "@/redux/features/tasks/tasksSlice";

export default function Home() {
  const dispatch = useAppDispatch();
  const tasks = useAppSelector((state) => state.tasks);
  const [taskInput, setTaskInput] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTaskInput(e.target.value);
  };

  function addNewTask(): void {
    const newTask: ITask = {
      id: randomStringId(),
      value: taskInput,
    };
    console.log(newTask);
    dispatch(addTask(newTask));
    setTaskInput("");
  }

  return (
    <main className="p-5">
      <h1 className="text-4xl font-bold mb-5">Your own to-do list!</h1>
      <div className="">
        <h4>Enter your tasks!</h4>
        <input
          value={taskInput}
          onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(e)}
          type="text"
          className="w-1/6 p-2 border-2 border-gray-500 mb-10"
        />
        <button
          onClick={addNewTask}
          className="ml-5 rounded-sm bg-sky-500 hover:bg-sky-600 p-2 text-white transition-all"
        >
          Add
        </button>
      </div>
      <div className="w-2/6 bg-amber-200 border-2 border-black-100 rounded-md">
        {tasks.map((task: ITask) => (
          <Task key={task.id} task={task}>
            {task.value}
          </Task>
        ))}
      </div>
    </main>
  );
}
