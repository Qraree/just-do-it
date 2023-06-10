"use client";
import { ChangeEvent, useEffect, useState } from "react";
import Task from "@/components/Task";
import { ITask } from "@/types/Task";
import { randomStringId } from "@/utils/randomStringId";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { addTask } from "@/redux/features/tasks/tasksSlice";
import { userLogin, userLogout } from "@/redux/features/user/userSlice";
import Link from "next/link";
import { useRouter } from "next/navigation";
import TaskList from "@/components/TaskList";

export default function Home() {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const isUserAuth = useAppSelector((state) => state.users.authorized);
  const tasks = useAppSelector((state) => state.tasks);
  const [taskInput, setTaskInput] = useState<string>("");

  useEffect(() => {
    if (!sessionStorage.getItem("token")) {
      router.push("/auth/login");
    } else {
      dispatch(userLogin());
    }
    console.log(isUserAuth);
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTaskInput(e.target.value);
  };

  const userLogoutFunc = () => {
    dispatch(userLogout());
    sessionStorage.clear();
  };

  function addNewTask(): void {
    if (taskInput !== "") {
      const newTask: ITask = {
        id: randomStringId(),
        title: taskInput,
      };
      dispatch(addTask(newTask));
      setTaskInput("");
    }
  }

  return (
    <main className="">
      {isUserAuth ? (
        <>
          <div className="w-full bg-sky-500 p-5 text-white text-2xl overflow-hidden flex justify-between">
            <div className="group w-1/12">
              <span className="transition-all group-hover:hidden">jdi</span>
              <span className="hidden group-hover:block">just do it</span>
            </div>
            <div className="w-1/7 flex justify-around">
              {isUserAuth ? (
                <Link
                  href="/auth/login"
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
              {/* @ts-expect-error Server Component */}
              <TaskList />
            </div>
          </section>
        </>
      ) : (
        <div>Loading...</div>
      )}
    </main>
  );
}
