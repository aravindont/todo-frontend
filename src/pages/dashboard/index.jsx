import { useState } from "react";
import { IoAdd } from "react-icons/io5";
function DashboardPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <div>
        <IoAdd
          className="p-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"
          onClick={setIsModalOpen((prevState) => !prevState)}
        />
        {isModalOpen && <AddTodoModal />}
      </div>
    </>
  );
}

export default DashboardPage;
