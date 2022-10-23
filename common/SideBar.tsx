import React from "react";
import { useRouter } from "next/router";
import { SideBarItems } from "../data/SideBarMenuData";

const SideBar: React.FC<{
  openMenu: boolean;
  setOpenMenu: (value: boolean) => void;
}> = ({ openMenu, setOpenMenu }) => {
  const router = useRouter();

  const ActiveBackgroundColor = (path: string) => {
    return window.location.pathname === path ? "bg-blue-600 text-white" : "";
  };

  return (
    <div className="absolute top-12 left-0 z-20 w-64 rounded-br-md border-r border-b border-gray-300 bg-white">
      <div className="space-y-3 p-2">
        {SideBarItems.map((value) => (
          <button
            onClick={() => {
              setOpenMenu(!openMenu);
              router.push(value.path);
            }}
            key={value.name}
            className={`text-md ${ActiveBackgroundColor(
              value.path
            )}  hover: flex h-12 w-full items-center  space-x-3 rounded-md pl-3 hover:bg-blue-600 hover:text-white`}
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
