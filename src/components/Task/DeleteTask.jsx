import { useState } from "react";

const [tasks, setTask] = useState([]);

const handleDelete = (id) => {
  const tasksCopy = [...tasks];

  const tasksCopyUpdated = tasksCopy.filter((task) => task.id !== id);

  setTask(tasksCopyUpdated);
};

return (
  <div>
    <h1>{list.name}</h1>
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          {task.title} <boutton onClick={() => handleDelete(task.id)}></boutton>
        </li>
      ))}
      ;
    </ul>
  </div>
);

export default DeleteTask;
