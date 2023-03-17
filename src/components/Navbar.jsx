import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { account, client } from "../appwrite/appwrite.config";
import { logoutUser } from "../redux/userSlice";
import UserAvatar from "./UserAvatar";
function Navbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const user = useSelector((state) => state.user);

  useEffect(() => {
    setIsModalOpen(false);
  }, [user]);

  const handleLogout = async () => {
    try {
      await account.deleteSessions();
      dispatch(logoutUser());
      navigate("/login");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <nav className="drop-shadow-lg max-w-5xl mx-auto flex items-center justify-between mt-4">
        <div>
          <span>TODO.</span>
        </div>
        <div>
          {user ? (
            <UserAvatar
              username={user.username}
              isModalOpen={isModalOpen}
              handleLogout={handleLogout}
              setIsModalOpen={setIsModalOpen}
            />
          ) : (
            <>
              <NavLink
                to="signup"
                className="bg-green-700 text-white text-xl py-1 px-2 rounded"
                aria-label="Sign up"
              >
                Sign up
              </NavLink>
              <NavLink
                to="login"
                className="bg-green-700 text-white text-xl py-1 px-2 rounded"
                aria-label="Log in"
              >
                Login
              </NavLink>
            </>
          )}
        </div>
      </nav>
    </>
  );
}
export default Navbar;
