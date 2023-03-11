function TaskList({ tasks }) {
  return (
    <div>
      {tasks.length !== 0 ? (
        <div>
          <ul className="flex flex-col list-inside list-disc mt-4">
            <span className="text-gray-900">Tasks Entered</span>
            {tasks.map((task, i) => (
              <li className="list-item  text-zinc-900" key={i}>
                {task}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
export default TaskList;
