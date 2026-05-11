import { useNavigate } from "react-router-dom";
import { LuHouse } from "react-icons/lu";
import { FaCircleUser } from "react-icons/fa6";
import { IoLogOutOutline, IoLogInOutline } from "react-icons/io5";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";

export default function MenuList() {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  return (
    <div className={"footer"}>
      <div className="footer__grid">
        <button type={"button"} onClick={() => navigate("/")}>
          <LuHouse />
          Home
        </button>
        <button type={"button"} onClick={() => navigate("/profile")}>
          <FaCircleUser />
          Profile
        </button>
        {user === null ? (
          <button type={"button"} onClick={() => navigate("/users/login")}>
            <IoLogInOutline />
            Login
          </button>
        ) : (
          <button type={"button"} onClick={() => navigate("/")}>
            <IoLogOutOutline />
            Logout
          </button>
        )}
      </div>
    </div>
  );
}
