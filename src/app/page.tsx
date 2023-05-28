"use client"
import {ChangeEvent, useState} from "react";

export default function Home() {

    const [tasksList, setTasksList] = useState<string[]>([]);
    const [taskInput, setTaskInput] = useState<string>('');

    const handleChange = (e:ChangeEvent<HTMLInputElement>) => {
        setTaskInput(e.target.value);
    }

    function addTask() {
        console.log(taskInput);
        setTasksList([...tasksList, taskInput]);
    }

    return (
    <main className="">
      <h1 className="">Your own to-do list!</h1>
      <div className="">
          <h4>Enter your tasks!</h4>
          <input
              value={taskInput}
              onChange={(e) => handleChange(e)}
              type="text"
              className="w-300"
          />
          <button onClick={addTask}>Add</button>
      </div>
      <div>
          {tasksList.map(task => (
              <div key={task} className="mb-4">{task}</div>
          ))}
      </div>
    </main>
  )
}
