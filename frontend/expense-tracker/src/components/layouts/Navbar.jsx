import React, { useState } from "react";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import SideMenu from "./SideMenu";

const Navbar = ({ activeMenu }) => {
  const [openSideMenu, setOpenSideMenu] = useState(true);
  return (
    <>
      <div className="flex gap-5 bg-white/50 border border-b border-gray-200/30 backdrop-blur-[20px] py-4 px-7 sticky top-0 z-30">
        <button
          className="block lg:hidden text-black"
          onClick={() => {
            setOpenSideMenu(!openSideMenu);
          }}
        >
          {!openSideMenu ? (
            <HiOutlineX className="text-2xl" />
          ) : (
            <HiOutlineMenu className="text-2xl" />
          )}
        </button>

        <h2 className="text-lg font-bolder text-black">Expense Tracker</h2>
        {!openSideMenu && (
          <div className="fixed top-[61px] md:-ml-4 -ml-10 bg-white">
            <SideMenu activeMenu={activeMenu} />
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
