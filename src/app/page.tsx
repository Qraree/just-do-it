"use client";
import { ChangeEvent, useState } from "react";
import Task from "@/components/Task";
import { ITask } from "@/types/Task";
import { randomStringId } from "@/utils/randomStringId";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { addTask } from "@/redux/features/tasks/tasksSlice";
import { userLogin, userLogout } from "@/redux/features/user/userSlice";
import Link from "next/link";

export default function Home() {
  const dispatch = useAppDispatch();
  const isUserAuth = useAppSelector((state) => state.users.authorized);
  const tasks = useAppSelector((state) => state.tasks);
  const [taskInput, setTaskInput] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTaskInput(e.target.value);
  };

  const userLogoutFunc = () => {
    dispatch(userLogout());
  };

  function addNewTask(): void {
    if (taskInput !== "") {
      const newTask: ITask = {
        id: randomStringId(),
        value: taskInput,
      };
      dispatch(addTask(newTask));
      setTaskInput("");
    }
  }

  return (
    <main className="">
      <div className="w-full bg-sky-500 p-5 text-white text-2xl overflow-hidden flex justify-between">
        <div className="group w-1/12">
          <span className="transition-all group-hover:hidden">jdi</span>
          <span className="hidden group-hover:block">just do it</span>
        </div>
        <div className="w-1/7 flex justify-around">
          {isUserAuth ? (
            <Link
              href="/auth"
              onClick={userLogoutFunc}
              className="hover:bg-sky-600 transition-all p-2 text-base"
            >
              Log out
            </Link>
          ) : null}
        </div>
      </div>
      <section className="p-5">
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
      </section>
    </main>
  );
}
