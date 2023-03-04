import { useState } from "react";
import { BsPlusCircle } from "react-icons/bs";
import { useSelector } from "react-redux";

import Navbar from "../../components/Navbar";
import TodoList from "../../components/TodoList";

function DashboardPage() {
  return (
    <>
      <div>
        <Navbar />
        <TodoList />
      </div>
    </>
  );
}

export default DashboardPage;
