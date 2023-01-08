import { useState } from "react";

const [lists, setList] = useState([]);

const handleDelete = (id) => {
  const listsCopy = [...lists];

  const listsCopyUpdated = listsCopy.filter((list) => list.id !== id);

  setLists(listsCopyUpdated);
};

return (
  <div>
    <h1>List</h1>
    <ul>
      {lists.map((list) => (
        <li key={list.id}>
          {list.title} <boutton onClick={() => handleDelete(list.id)}></boutton>
        </li>
      ))}
      ;
    </ul>
  </div>
);

export default DeleteList;
