"use client";

import { useState } from "react";

const ToDoApp = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      taskText: "Lær React",
      completed: false,
    },
    {
      id: 2,
      taskText: "Lær Next",
      completed: false,
    },
    {
      id: 3,
      taskText: "Lær noget",
      completed: false,
    },
  ]);

  function addTask(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    console.log(formData.get("task"));
    const newTask = {
      id: crypto.randomUUID(),
      taskText: formData.get("task"),
      completed: false,
    };
    // setTasks(tasks.concat(newTask));
    setTasks([newTask, ...tasks]);
    event.target.reset();
  }

  function deleteTask(id) {
    setTasks(tasks.filter((task) => task.id !== id));
  }
  function toggleTask(id) {
    setTasks.map((task) => {
      if (task.id === id) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
  }

  return (
    <section>
      <Form addTask={addTask} />
      <List tasks={tasks} />
    </section>
  );
};

export default ToDoApp;

function Form({ addTask }) {
  return (
    <form onSubmit={addTask}>
      <label htmlFor="task">Task</label>
      <input type="text" id="task" name="task"></input>
      <button>Add Task</button>
    </form>
  );
}

function List({ tasks, deleteTask }) {
  return (
    <div>
      <ul>
        {tasks.map((task) => (
          <ListItem task={task} deleteTask={deleteTask} />
        ))}
      </ul>
    </div>
  );
}
function ListItem({ task }) {
  const { id, taskText, completed } = task;
  return (
    <li>
      <span className="">{taskText}</span>
      <button onClick={() => deleteTask(id)}>Delete</button>
      <button onClick={() => toggleTask(id)}>Complete</button>
    </li>
  );
}
