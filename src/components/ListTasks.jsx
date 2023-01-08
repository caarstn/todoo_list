import classNames from "classnames";
import FormTask from "src/components/FormTask.jsx";
import { TrashIcon } from "@heroicons/react/24/solid";
import Context from "src/components/Context.jsx";

const ListTasks = (props) => {
  return (
    <div>
      <ul>
        {lists.map(({ name }) => (
          <li key={name} className="p-4 first:border-t border-b">
            {name}
          </li>
        ))}
      </ul>
      <DeleteTask>
        <TrashIcon className="w-6" />
      </DeleteTask>
    </div>
  );
};

export default ListTasks;
