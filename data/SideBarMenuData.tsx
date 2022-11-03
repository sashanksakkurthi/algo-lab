import { ReactElement } from "react";
import { BsCodeSlash, BsWindowSidebar } from "react-icons/bs";
import {
  AiOutlineTrophy,
  AiOutlineDashboard,
  AiOutlineBook,
} from "react-icons/ai";

export const SideBarItems: {
  name: string;
  icon: ReactElement;
  path: string;
}[] = [
  {
    name: "Dashboard",
    icon: <AiOutlineDashboard size={20} />,
    path: "/",
  },
  {
    name: "Your Labs",
    icon: <BsCodeSlash size={20} />,
    path: "/yourlabs",
  },
  {
    name: "Your Courses",
    icon: <AiOutlineBook size={20} />,
    path: "/yourcourses",
  },
  {
    name: "Contests",
    icon: <AiOutlineTrophy size={20} />,
    path: "/contents",
  },
  {
    name: "Online IDE",
    icon: <BsWindowSidebar size={20} />,
    path: "/onlineIde",
  },
];
