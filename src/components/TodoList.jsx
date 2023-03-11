import { useState } from "react";
import { useSelector } from "react-redux";
import AddTodoModal from "./AddTodoModal";
import Search from "./Search";
function TodoList() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleToggleModal = () => {
    setIsModalOpen((prevState) => !prevState);
  };

  const [todos, setTodos] = useState("");
  const user = useSelector((state) => state.user);
  return (
    <div className="max-w-5xl mx-auto mt-10">
      <div className="flex items-center justify-between">
        <div className="p-6 w-10 h-10 bg-blue-600 text-2xl rounded-full flex items-center justify-center text-white cursor-pointer">
          <span onClick={handleToggleModal}>+</span>
        </div>
        <AddTodoModal isOpen={isModalOpen} onClose={handleToggleModal} />
        <div>
          <Search />
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default TodoList;
