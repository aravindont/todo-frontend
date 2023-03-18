import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchTodos } from "../redux/todosSlice";

function Search() {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.user.userId);

  const handleQuery = async () => {
    try {
      const searchTerm = query.trim();
      if (searchTerm) {
        dispatch(searchTodos(userId, searchTerm));
      } else {
        dispatch(fetchTodos(userId));
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex items-center">
      <input
        type="text"
        placeholder="Search..."
        className="border-2 border-gray-300 rounded-l-lg py-2 px-4 focus:outline-none focus:border-blue-600"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button
        type="button"
        className="bg-blue-600 rounded-r-lg text-white px-4 py-2"
        onClick={handleQuery}
      >
        <FontAwesomeIcon icon={faSearch} />
      </button>
    </div>
  );
}

export default Search;
