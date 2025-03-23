import { BookOpen, FileText, MessageSquare, User } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

export const SideBar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const selectedClass =
    "bg-[#e4e2fa] rounded-[17px] flex items-center justify-center left-[17px] p-2";
  return (
    <div className="fixed w-[68px] h-[299px] top-[336px] left-[72px] bg-[#fffffe] rounded-[34px] overflow-hidden border border-solid border-black flex flex-col gap-[34px] items-center py-[40px]">
      <div
        className={`left-[21px] cursor-pointer ${
          location.pathname === "/dashboard" ? selectedClass : ""
        }`}
        onClick={() => navigate("/dashboard")}
      >
        <FileText className="w-6 h-6" />
      </div>
      <div
        className={` left-[21px] cursor-pointer  ${
          location.pathname === "/journal" ? selectedClass : ""
        }`}
        onClick={() => navigate("/journal")}
      >
        <BookOpen className="w-6 h-6" />
      </div>
      <div
        className={`left-[21px] cursor-pointer  ${
          location.pathname === "/chat" ? selectedClass : ""
        }`}
        onClick={() => navigate("/chat")}
      >
        <MessageSquare className="w-6 h-6" />
      </div>
      <div
        className={`left-[21px] cursor-pointer  ${
          location.pathname === "/profile" ? selectedClass : ""
        }`}
        onClick={() => navigate("/profile")}
      >
        <User className="w-6 h-6" />
      </div>
    </div>
  );
};
