function UserAvatar({ username, isModalOpen, handleLogout, setIsModalOpen }) {
  return (
    <>
      <div
        className="rounded-full border-2 border-indigo-400 p-4 relative"
        onClick={() => setIsModalOpen(!isModalOpen)}
        aria-label="User avatar"
      >
        <span className="text-md font-bold text-neutral">
          {username && username.slice(0, 2).toUpperCase()}
        </span>
        {isModalOpen && (
          <div className="z-10 w-8 h-8 border-indigo-400 absolute top-16 drop-shadow-2xl ">
            <button
              className=" hover:bg-green-700 rounded p-1 hover:text-white transition-all"
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
