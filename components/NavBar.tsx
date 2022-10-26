import React from "react";
import SideBar from "./SideBar";
import { IoMdClose } from "react-icons/io";
import { FiMenu } from "react-icons/fi";

export const NavBar: React.FC<{}> = () => {
  const [openMenu, setOpenMenu] = React.useState(false);
  return (
    <>
      <div className="flex h-12 items-center justify-between border-b border-gray-300 bg-white px-1">
        <div className="flex items-center">
          <SideBarMenuButton setOpenMenu={setOpenMenu} openMenu={openMenu} />
          <Logo />
        </div>
        <ProfileView />
      </div>
      {openMenu ? (
        <SideBar setOpenMenu={setOpenMenu} openMenu={openMenu} />
      ) : null}
    </>
  );
};

const SideBarMenuButton = ({
  openMenu,
  setOpenMenu,
}: {
  openMenu: boolean;
  setOpenMenu: (value: boolean) => void;
}) => {
  return (
    <div className="px-2 text-gray-700">
      {openMenu ? (
        <button className="p-1" onClick={() => setOpenMenu(!openMenu)}>
          <IoMdClose size={25} />
        </button>
      ) : (
        <button onClick={() => setOpenMenu(!openMenu)} className="p-1">
          <FiMenu size={25} />
        </button>
      )}
    </div>
  );
};

const Logo: React.FC<{}> = () => {
  return (
    <div className="font-signika text-3xl font-bold text-indigo-600">
      AlgoLab
    </div>
  );
};

const ProfileView: React.FC<{}> = () => {
  return (
    <div className="flex items-center space-x-1">
      <picture>
        <img
          className="h-9 w-9 rounded-full"
          src="https://bit.ly/dan-abramov"
          alt=""
        />
      </picture>
      <div className="font-inter text-sm font-medium">Sakkurthi</div>
    </div>
  );
};
