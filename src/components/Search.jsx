import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Search() {
  return (
    <div className="flex items-center">
      <input
        type="text"
        placeholder="Search..."
        className="border-2 border-gray-300 rounded-l-lg py-2 px-4 focus:outline-none focus:border-blue-600"
      />
      <button
        type="button"
        className="bg-blue-600 rounded-r-lg text-white px-4 py-2"
      >
        <FontAwesomeIcon icon={faSearch} />
      </button>
    </div>
  );
}

export default Search;
