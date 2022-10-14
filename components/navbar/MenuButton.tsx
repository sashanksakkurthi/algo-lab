import React from "react";
import { FiMenu } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import { useMenuStore } from "../../store/SideBarMenu";

const MenuButton = () => {
  const setOpenMenu = useMenuStore((state) => state.setOpenSideBar);
  const openMenu = useMenuStore((state) => state.openSideBar);
  return (
    <div className="px-2 text-gray-700">
      {openMenu ? (
        <button className="rounded-md border p-1" onClick={setOpenMenu}>
          <IoMdClose size={25} />
        </button>
      ) : (
        <button onClick={setOpenMenu} className="rounded-md border p-1">
          <FiMenu size={25} />
        </button>
      )}
    </div>
  );
};

export default MenuButton;
