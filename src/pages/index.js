import Button from "@/components/Button.jsx";
import { useContext } from "@/components/ContextProvider.jsx";
import Link from "@/components/Link.jsx";
import Page from "@/components/Page.jsx";
import { TrashIcon } from "@heroicons/react/24/solid";
import { useCallback } from "react";

const IndexPage = () => {
  const { tasks, readTasks } = useContext();
  const handleClick = useCallback(
    (event) => {
      const listId = Number.parseInt(
        event.currentTarget.getAttribute("data-list-id"),
        10
      );

      readTasks(listId);
    },
    [readTasks]
  );

  return (
    <div>
      <Navbar>
        <Tab />
        <AddList />
      </Navbar>
      <Page title="Tasks List">
        <ul className="w-full mt-8">
          <li className="border px-4 py-2">
            <NavLink href="/components/CreateList">
              <CreateIcon className="w-6" />
            </NavLink>
          </li>
          <li className="border px-4 py-2">
            <NavLink href="/components/EditList">
              <PencilIcon className="w-6" />
            </NavLink>
          </li>
          <li className="border px-4 py-2">
            <NavLink href="/components/DeleteList">
              <TrashIcon className="w-6" />
            </NavLink>
          </li>
        </ul>
      </Page>
    </div>
  );
};

export default IndexPage;
