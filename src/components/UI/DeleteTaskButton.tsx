import React from "react";
import { ITask } from "@/types/Task";
import { useAppDispatch } from "@/redux/hooks";
import { deleteTask } from "@/redux/features/tasks/tasksSlice";

interface DeleteButtonProps {
  task: ITask;
}

const DeleteTaskButton = ({ task }: DeleteButtonProps) => {
  const dispatch = useAppDispatch();

  const deleteTaskFunc = () => {
    dispatch(deleteTask(task.id));
  };

  return (
    <button
      className="absolute top-5 right-5 bg-red-500 hover:bg-red-600 p-1 rounded-full w-6 h-6 flex justify-center items-center text-white"
      onClick={deleteTaskFunc}
    >
      x
    </button>
  );
};

export default DeleteTaskButton;
