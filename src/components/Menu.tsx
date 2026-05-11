import { useNavigate } from "react-router-dom";
import { LuHouse } from "react-icons/lu";
import { FaCircleUser } from "react-icons/fa6";
import { IoLogOutOutline } from "react-icons/io5";

export default function MenuList() {
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
        <button type={"button"} onClick={() => navigate("/")}>
          <IoLogOutOutline />
          Logout
        </button>
      </div>
    </div>
  );
}
