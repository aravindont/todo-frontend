import {
  faCheck,
  faPen,
  faTimes,
  faTrashAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useCallback, useEffect, useState } from "react";

function ViewTodosModal({ isOpen, onClose, todo }) {
  const [todoData, setTodoData] = useState(todo);
  const [editIndex, setEditIndex] = useState(null);
  const [task, setTask] = useState("");
  const [newTask, setNewTask] = useState("");

  useEffect(() => {
    if (todo) {
      setTodoData(todo);
    }
  }, [todo]);

  const handleEdit = useCallback((index, task) => {
    setEditIndex(index);
    setTask(task);
  }, []);

  const handleSave = useCallback(
    async (index) => {
      const response = await axios.put("/api/task", {
        id: todo._id,
        key: index,
        newTask: task,
      });
      const updatedTodo = { ...todo, tasks: response.data.tasks };
      setEditIndex("");
      setTask("");
      setTodoData(updatedTodo);
    },
    [task, todo]
  );

  const handleDelete = useCallback(
    async (taskIndex) => {
      const response = await axios.delete("/api/task", {
        data: {
          id: todoData._id,
          key: taskIndex,
        },
      });
      setTodoData((prevState) => ({
        ...prevState,
        tasks: response.data.tasks,
      }));
    },
    [todoData]
  );

  const handleAddTask = useCallback(async () => {
    const response = await axios.post("/api/task", {
      id: todoData._id,
      task: newTask,
    });
    setTodoData((prevState) => ({
      ...prevState,
      tasks: response.data.tasks,
    }));
    setNewTask("");
  }, [newTask, todoData]);

  useEffect(() => {
    if (!isOpen) {
      setTodoData(null);
    }
  }, [isOpen]);
  useEffect(() => {
    if (!isOpen) {
      setTodoData(null);
      setEditIndex(null);
      setTask("");
      setNewTask("");
    }
  }, [isOpen]);

  if (!isOpen || !todoData) {
    return null;
  }
  return (
    <div className="fixed inset-0 z-50 flex justify-center items-center">
      <div className="inset-0 bg-blue-200 bg-opacity-5 backdrop-blur-lg absolute"></div>
      <div className="z-10 p-6 bg-white rounded-md shadow-lg">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-bold">{todoData?.title}</h2>
          <span
            className="bg-gray-500 text-2xl rounded-full p-1 text-white flex justify-center items-center h-6 w-6 cursor-pointer"
            onClick={onClose}
          >
            <FontAwesomeIcon icon={faTimes} />
          </span>
        </div>

        <ul>
          {/* display tasks */}
          {todoData?.tasks.map((myTask, myIndex) => (
            <li
              className="mt-4 flex items-center justify-between gap-4"
              key={myIndex}
            >
              {editIndex === myIndex ? (
                <input
                  type="text"
                  value={task}
                  onChange={(event) => setTask(event.target.value)}
                  className="border border-gray-400 py-2 px-3 rounded-sm text-sm w-full max-w-xs"
                />
              ) : (
                <span>{myTask}</span>
              )}
              {/* edit button */}
              <div className="flex gap-4">
                {editIndex === myIndex ? (
                  <button
                    onClick={() => handleSave(myIndex)}
                    className="bg-green-500 hover:bg-green-600 text-white font-semibold py-1 px-2 rounded-md w-8 h-8 text-sm"
                  >
                    <FontAwesomeIcon icon={faCheck} className="h-5 w-5" />
                  </button>
                ) : (
                  <button
                    onClick={() => handleEdit(myIndex, myTask)}
                    className="bg-green-500 hover:bg-green-600 text-white font-semibold py-1 px-2 rounded-md w-8 h-8 text-sm"
                  >
                    <FontAwesomeIcon icon={faPen} />
                  </button>
                )}

                <button
                  onClick={() => handleDelete(myIndex)}
                  className="bg-green-500 hover:bg-green-600 text-white font-semibold py-1 px-2 rounded-md w-8 h-8 text-sm"
                >
                  <FontAwesomeIcon icon={faTrashAlt} className="h-5 w-5" />
                </button>
              </div>
            </li>
          ))}
        </ul>
        {/* add task */}
        <div className="mt-4 flex gap-4">
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            className="border border-gray-400 py-2 px-3 rounded-sm text-sm w-full max-w-xs"
          />
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-1 px-2 rounded-sm text-sm"
            onClick={handleAddTask}
          >
            Add Task
          </button>
        </div>
      </div>
    </div>
  );
}
export default ViewTodosModal;
