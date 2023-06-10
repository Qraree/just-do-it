import React from "react";
import { ITask } from "@/types/Task";
import Task from "@/components/Task";
import axios from "axios";

const getTasks = async () => {
  try {
    const res = await axios.get(`http://localhost:5000/tasks/`);
    console.log(`Data - ${res.data}`);
    return res.data;
  } catch {
    console.log("Error");
  }
};

export default async function TaskList() {
  const tasks = await getTasks();

  return (
    <>
      {tasks.map((task: ITask) => (
        <Task key={task.id} task={task}>
          {task.title}
        </Task>
      ))}
    </>
  );
}
