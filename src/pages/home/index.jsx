import { Link } from "react-router-dom";

function HomePage() {
  return (
    <>
      <div className="flex flex-col h-screen items-center justify-center gap-4">
        <h1 className="font-bold tracking-widest">Welcome</h1>
        <div className="flex gap-4">
          <Link
            to={`/signup`}
            className="bg-green-700 text-white text-xl py-1 px-2 rounded"
          >
            Sign up
          </Link>
          <Link
            to={`/login`}
            className="bg-green-700 text-white text-xl py-1 px-2 rounded"
          >
            Login
          </Link>
        </div>
      </div>
    </>
  );
}

export default HomePage;
