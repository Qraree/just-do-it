import React from "react";
import DeleteTaskButton from "@/components/UI/DeleteTaskButton";
import { ITask } from "@/types/Task";

interface TaskProps {
  children: string;
  task: ITask;
}

const Task = (props: TaskProps) => {
  return (
    <div className="p-5 mb-10  bg-gray-100 relative">
      {props.children}
      <DeleteTaskButton task={props.task} />
    </div>
  );
};

export default Task;
