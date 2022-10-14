import React from "react";
import { BsCodeSlash, BsReverseLayoutTextSidebarReverse } from "react-icons/bs";
import { MdOutlineAssignmentTurnedIn, MdSportsScore } from "react-icons/md";
import { AiOutlineTrophy, AiOutlineUser } from "react-icons/ai";
import { IoSettingsOutline } from "react-icons/io5";

const SideBar: React.FC<{}> = () => {
  const SideBarItems = [
    {
      name: "Your Labs",
      icon: <BsCodeSlash size={25} />,
    },
    {
      name: "Profile",
      icon: <AiOutlineUser size={25} />,
    },
    {
      name: "Assignments",
      icon: <MdOutlineAssignmentTurnedIn size={25} />,
    },
    {
      name: "Contests",
      icon: <AiOutlineTrophy size={25} />,
    },
    {
      name: "Online IDE",
      icon: <BsReverseLayoutTextSidebarReverse size={23} />,
    },
    {
      name: "Results",
      icon: <MdSportsScore size={25} />,
    },
    {
      name: "Settings",
      icon: <IoSettingsOutline size={23} />,
    },
  ];
  return (
    <div className="fixed top-14 left-0 h-screen w-64 border-r border-gray-300 bg-white">
      <div className="p-2">
        {SideBarItems.map((value) => (
          <button
            key={value.name}
            className="text-md flex h-14 w-full items-center space-x-3 rounded-md pl-3 text-gray-700 hover:bg-blue-600 hover:text-white"
          >
            {value.icon}
            <div className="font-inter font-medium">{value.name}</div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default SideBar;
