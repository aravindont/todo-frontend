import { useEffect, useRef } from "react";

function UserAvatar({ username, isModalOpen, handleLogout, setIsModalOpen }) {
  const ref = useRef();
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setIsModalOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, setIsModalOpen]);
  return (
    <>
      <div
        ref={ref}
        className="rounded-full border-2 border-indigo-400 p-2 relative cursor-pointer"
        onClick={() => setIsModalOpen(!isModalOpen)}
        aria-label="User avatar"
      >
        <span className="text-md font-bold text-neutral">
          {username && username.slice(0, 2).toUpperCase()}
        </span>
        {isModalOpen && (
          <div className="z-10 w-28 bg-white rounded-md shadow-lg absolute right-0">
            <button
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full text-left"
              onClick={handleLogout}
              aria-label="Log out"
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export default UserAvatar;
