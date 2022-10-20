import React from "react";
import { BsCodeSlash, BsReverseLayoutTextSidebarReverse } from "react-icons/bs";
import { MdOutlineAssignmentTurnedIn, MdSportsScore } from "react-icons/md";
import {
  AiOutlineTrophy,
  AiOutlineDashboard,
  AiOutlineUser,
} from "react-icons/ai";
import { IoSettingsOutline } from "react-icons/io5";
import { useRouter } from "next/router";
import { useMenuStore } from "../../store/SideBarMenu";

const SideBar: React.FC<{}> = () => {
  const router = useRouter();
  const SideBarItems = [
    {
      name: "Dashboard",
      icon: <AiOutlineDashboard size={25} />,
      path: "/",
    },
    {
      name: "Profile",
      icon: <AiOutlineUser size={25} />,
      path: "/profile",
    },
    {
      name: "Your Labs",
      icon: <BsCodeSlash size={25} />,
      path: "/your-labs",
    },
    {
      name: "Assignments",
      icon: <MdOutlineAssignmentTurnedIn size={25} />,
      path: "/assignments",
    },
    {
      name: "Contests",
      icon: <AiOutlineTrophy size={25} />,
      path: "/contents",
    },
    {
      name: "Online IDE",
      icon: <BsReverseLayoutTextSidebarReverse size={20} />,
      path: "/online-ide",
    },
    {
      name: "Results",
      icon: <MdSportsScore size={25} />,
      path: "/results",
    },
    {
      name: "Settings",
      icon: <IoSettingsOutline size={23} />,
      path: "/settings",
    },
  ];

  const getBackgroundColor = (path: string) => {
    return window.location.pathname === path ? "bg-blue-600 text-white" : "";
  };

  const setOpenMenu = useMenuStore((state) => state.setOpenSideBar);

  return (
    <div className="fixed top-12 left-0 z-10 h-screen w-64 border-r border-gray-300 bg-white">
      <div className="space-y-3 p-2">
        {SideBarItems.map((value) => {
          return (
            <button
              onClick={() => {
                setOpenMenu();
                router.push(value.path);
              }}
              key={value.name}
              className={`text-md ${getBackgroundColor(
                value.path
              )}  hover: flex h-12 w-full items-center  space-x-3 rounded-md pl-3 hover:bg-blue-600 hover:text-white`}
            >
              {value.icon}
              <div className="font-inter font-medium">{value.name}</div>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default SideBar;
