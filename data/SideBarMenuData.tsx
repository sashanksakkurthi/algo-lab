import { ReactElement } from "react";
import { BsCodeSlash, BsReverseLayoutTextSidebarReverse } from "react-icons/bs";
import { AiOutlineTrophy, AiOutlineDashboard } from "react-icons/ai";
import { IoSettingsOutline } from "react-icons/io5";

export const SideBarItems: {
  name: string;
  icon: ReactElement;
  path: string;
}[] = [
  {
    name: "Dashboard",
    icon: <AiOutlineDashboard size={25} />,
    path: "/",
  },
  {
    name: "Your Labs",
    icon: <BsCodeSlash size={25} />,
    path: "/yourLabs",
  },
  {
    name: "Contests",
    icon: <AiOutlineTrophy size={25} />,
    path: "/contents",
  },
  {
    name: "Online IDE",
    icon: <BsReverseLayoutTextSidebarReverse size={20} />,
    path: "/onlineIde",
  },
  {
    name: "Settings",
    icon: <IoSettingsOutline size={23} />,
    path: "/settings",
  },
];
