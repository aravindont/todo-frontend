import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTodos } from "../redux/todosSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faPlus } from "@fortawesome/free-solid-svg-icons";
import TaskList from "./TaskList";
import axios from "axios";
function AddTodoModal({ isOpen, onClose }) {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const userId = user.userId;
  const [title, setTitle] = useState("");
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");

  const addTask = () => {
    setTasks([...tasks, task]);
    setTask("");
  };

  const handleAddTodo = async () => {
    const newTodo = {
      userId: userId,
      title: title,
      task: tasks,
    };
    await axios.post("/api/todo", newTodo);
    setTitle("");
    setTask("");
    setTasks([]);
    const response = await axios.get(`/api/todo/${userId}`);
    dispatch(setTodos(response.data));
  };
  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex justify-center items-center ">
          <div className="inset-0 bg-blue-200 bg-opacity-5 backdrop-blur-lg absolute"></div>
          <div className="z-10 p-6 bg-white rounded-md shadow-lg">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-bold">Add New Todo</h2>
              <button
                onClick={onClose}
                className="bg-gray-500 text-2xl rounded-full p-2 text-white flex justify-center items-center h-10 w-10"
              >
                <FontAwesomeIcon icon={faTimes} />
              </button>
            </div>
            {/* TODO Title */}
            <div className="mb-6">
              <label className="block mb-2 font-bold">Title</label>
              <input
                type="text"
                placeholder="Title"
                className="w-full px-3 py-2 border rounded-md"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
              />
            </div>
            {/* Tasks  */}
            <div className="mb-6">
              <label className="block mb-2 font-bold">Tasks</label>
              <div className="flex ">
                <input
                  type="text"
                  placeholder="Tasks"
                  className="w-full px-3 py-2 border rounded-md"
                  onChange={(e) => setTask(e.target.value)}
                  value={task}
                />
                <button
                  className="px-3 py-2 bg-gray-900 text-white rounded-md"
                  onClick={addTask}
                >
                  <FontAwesomeIcon icon={faPlus} />
                </button>
              </div>
            </div>
            {/* tasklist */}
            <TaskList tasks={tasks} />
            <div className="flex justify-end">
              <button
                className="px-4 py-2 mr-2 text-white bg-blue-500 rounded-md"
                onClick={handleAddTodo}
              >
                Add Todo
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default AddTodoModal;
