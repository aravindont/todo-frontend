import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodos, removeTodo, saveTodoTitle } from "../redux/todosSlice";
import AddTodoModal from "./AddTodoModal";
import Search from "./Search";
import ViewTodosModal from "./ViewTodosModal";
function TodoList() {
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.user.userId);
  const todos = useSelector((state) => state.todos);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editindex, setEditindex] = useState(undefined);
  const [todoTitle, setTodoTitle] = useState(undefined);
  const [viewIndex, setViewIndex] = useState(undefined);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);

  const handleToggleModal = () => {
    setIsModalOpen((prevIsModalOpen) => !prevIsModalOpen);
  };

  useEffect(() => {
    if (userId) {
      dispatch(fetchTodos(userId));
    }
  }, [userId, dispatch]);

  const handleEdit = (index, title, event) => {
    event.stopPropagation();
    setTodoTitle(title);
    setEditindex(index);
  };

  const handleSave = (id) => {
    dispatch(saveTodoTitle(id, todoTitle));
    setEditindex(undefined);
    setTodoTitle(undefined);
  };
  const handleDelete = (event, id) => {
    event.stopPropagation();
    dispatch(removeTodo(id));
  };

  return (
    <div className="max-w-5xl mx-auto mt-10">
      <div className="flex items-center justify-between">
        <div className="p-4 w-6 h-6 bg-blue-600 text-2xl rounded-full flex items-center justify-center text-white cursor-pointer">
          <span onClick={handleToggleModal}>+</span>
        </div>
        <AddTodoModal isOpen={isModalOpen} onClose={handleToggleModal} />
        <div className="flex-1 ml-4">
          <div className="flex justify-end">
            <Search />
          </div>
        </div>
      </div>
      <div className="mt-10">
        {todos && todos.length ? (
          <div>
            {todos?.map((todo, index) => (
              <div
                key={todo._id}
                className="flex items-center justify-between bg-gray-100 rounded-lg border border-gray-300 px-3 py-2 mt-1"
              >
                {editindex === index ? (
                  <input
                    type="text"
                    value={todoTitle}
                    onChange={(e) => setTodoTitle(e.target.value)}
                    className="bg-gray-100 rounded-lg border border-gray-300 px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                ) : (
                  <div className="w-full">{todo.title}</div>
                )}
                <div className="flex">
                  <button
                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-2"
                    onClick={() => {
                      setViewIndex(index);
                      setIsViewModalOpen(true);
                    }}
                  >
                    View
                  </button>

                  {editindex === index ? (
                    <div className="flex items-center">
                      <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
                        onClick={() => handleSave(todo._id)}
                      >
                        Save
                      </button>

                      <button
                        className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                        onClick={() => setEditindex(undefined)}
                      >
                        Cancel
                      </button>
                    </div>
                  ) : (
                    <button
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
                      onClick={(e) => handleEdit(index, todo.title, e)}
                    >
                      Edit
                    </button>
                  )}

                  <button
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                    onClick={(e) => handleDelete(e, todo._id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center text-gray-500 mt-4">
            <div className="mb-2">🤔 No todos found</div>
            <div>Try adding a new todo with the '+' button above</div>
          </div>
        )}
        <ViewTodosModal
          isOpen={isViewModalOpen}
          onClose={() => setIsViewModalOpen(false)}
          todo={todos[viewIndex]}
        />
      </div>
    </div>
  );
}

export default TodoList;
