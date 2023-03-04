import { useState } from "react";
import AddTodoModal from "./AddTodoModal";
function TodoList() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleToggleModal = () => {
    setIsModalOpen((prevState) => !prevState);
  };
  return (
    <div className="max-w-5xl mx-auto mt-10">
      <div className="p-6 w-10 h-10 bg-blue-600 text-2xl rounded-full flex items-center justify-center text-white cursor-pointer">
        <span onClick={handleToggleModal}>+</span>
      </div>
      <AddTodoModal isOpen={isModalOpen} onClose={handleToggleModal} />
      <div></div>
    </div>
  );
}

export default TodoList;
