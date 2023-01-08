import {
  createContext,
  useCallback,
  useContext as useNativeContext,
  useState,
} from "react";

const initialList = [
  {
    id: 1,
    title: "List 1",
  },
  {
    id: 2,
    title: "List 2",
  },
  {
    id: 3,
    title: "List 3",
  },
];

export const Context = createContext();

export const useContext = () => useNativeContext(Context);

const ContextProvider = (props) => {
  const [nextId, setNextId] = useState(4);
  const [titles, setTitles] = useState(initialList);
  const getNextId = useCallback(() => {
    setNextId(nextId + 1);

    return nextId;
  }, [nextId]);
  const createList = useCallback(
    (title) => {
      setTitles((titles) => [
        ...titles,
        {
          id: getNextId(),
          ...title,
        },
      ]);
    },
    [getNextId]
  );
  const deleteList = useCallback(
    (listId) => setTitles((titles) => titles.filter(({ id }) => id !== listId)),
    []
  );
  const updateList = useCallback((updatedList) => {
    setTitles((titles) =>
      titles.map((user) => (title.id === updatedList.id ? updatedList : user))
    );
  }, []);

  return (
    <Context.Provider
      {...props}
      value={{
        titles,
        createList,
        deleteList,
        updateList,
      }}
    />
  );
};

export default ContextProvider;
