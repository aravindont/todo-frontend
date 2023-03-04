function AddTodoModal({ isOpen, onClose }) {
  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex justify-center items-center">
          <div className="absolute inset-0 bg-gray-500 opacity-50"></div>
          <div className="z-10 p-6 bg-white rounded-md shadow-lg">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-bold">Add New Todo</h2>
              <button
                onClick={onClose}
                className="text-gray-500 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="mb-6">
              <label className="block mb-2 font-bold">Title</label>
              <input
                type="text"
                placeholder="Title"
                className="w-full px-3 py-2 border rounded-md"
              />
            </div>
            <div className="mb-6">
              <label className="block mb-2 font-bold">Tasks</label>
              <input
                type="text"
                placeholder="Tasks"
                className="w-full px-3 py-2 border rounded-md"
              />
            </div>
            <div className="flex justify-end">
              <button className="px-4 py-2 mr-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                Add Todo
              </button>
              <button className="px-4 py-2 text-gray-500 bg-gray-100 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50">
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default AddTodoModal;
