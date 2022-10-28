import React from "react";
import { IoMdClose } from "react-icons/io";
import { FiMenu } from "react-icons/fi";
import { useRouter } from "next/router";
import { SideBarItems } from "../data/SideBarMenuData";
import { Transition } from "@headlessui/react";

export const NavBar: React.FC<{}> = () => {
  const [openMenu, setOpenMenu] = React.useState(false);

  const router = useRouter();

  const ActiveBackgroundColor = (path: string) => {
    if (typeof window !== "undefined") {
      const backgroundColor =
        window.location.pathname === path
          ? "bg-blue-600 text-white"
          : "text-gray-600";
      return backgroundColor;
    }
  };

  return (
    <>
      <div className="flex h-14 items-center justify-between border-b border-gray-300 bg-white px-1">
        <div className="flex items-center">
          {/* Menu Button */}
          <button
            onClick={() => setOpenMenu(!openMenu)}
            className="mx-2 rounded-md bg-slate-100 p-2 text-gray-700"
          >
            <FiMenu size={25} />
          </button>
          {/* Logo */}
          <div className="font-signika text-3xl font-bold text-indigo-600">
            AlgoLab
          </div>
        </div>
        {/* Profile Picture */}
        <picture className="flex flex-col items-center space-x-1">
          <img
            className="h-8 w-8 rounded-full"
            src="https://bit.ly/dan-abramov"
            alt=""
          />
          <div className="font-inter text-sm font-normal text-gray-700">
            Sakkurthi
          </div>
        </picture>
      </div>
      {/* Sidebar Menu */}
      <Transition
        as={React.Fragment}
        show={openMenu}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <div className="fixed top-0 bottom-0 left-0 z-20 w-72 rounded-br-md border-r border-b border-gray-300 bg-white">
          <div className="flex h-14 w-full items-center justify-end px-3">
            <button
              className="mx-2 rounded-md bg-slate-100 p-2 text-gray-700"
              onClick={() => setOpenMenu(!openMenu)}
            >
              <IoMdClose size={25} />
            </button>
          </div>
          <div className="space-y-3 p-2 pt-6">
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
      </Transition>
    </>
  );
};
