import React from "react";
import BrandLogo from "./BrandLogo";
import ProfileView from "./ProfileView";
import SideBar from "./SideBar";
import { useMenuStore } from "../../store/SideBarMenu";

const NavBar: React.FC<{}> = () => {
  const openMenu = useMenuStore((state) => state.openSideBar);
  return (
    <div className="">
      <div className="flex h-12 items-center justify-between border-b border-gray-300 bg-white px-1">
        <BrandLogo />
        <ProfileView />
      </div>
      <div>{openMenu ? <SideBar /> : <></>}</div>
    </div>
  );
};

export default NavBar;
