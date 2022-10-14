import React from "react";
import BrandLogo from "./BrandLogo";
import ProfileView from "./ProfileView";
import SideBar from "./SideBar";
import { useMenuStore } from "../../store/SideBarMenu";

const NavBar: React.FC<{}> = () => {
  const openMenu = useMenuStore((state) => state.openSideBar);
  return (
    <div>
      <div className="fixed top-0 left-0 right-0 flex h-14 items-center justify-between border-b border-gray-300 bg-white px-1">
        <BrandLogo />
        <ProfileView />
      </div>
      <div>{openMenu ? <SideBar /> : <></>}</div>
    </div>
  );
};

export default NavBar;
