import React, { useState } from "react";
import { Link } from "react-router-dom";
import imagenSaludo from "../assets/img/saludo.webp";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Header = () => {
  const [open, setOpen] = useState(false);

  const handleNav = () => {
    setOpen(!open);
  };
  return (
    <>
      <div className="flex  justify-between items-center h-24 max-w-[1240px] mx-auto px-4">
        <h1 className="w-full text-3xl font-bold text-black">MI PORTAFOLIO</h1>
        <ul className="hidden md:flex uppercase">
          <li className="p-4">Home</li>
          <li className="p-4">about</li>
          <li className="p-4">contact</li>
          <li className="p-4">GitHub</li>
          <li className="p-4">Linkedin</li>
        </ul>
        <div onClick={handleNav} className="block md:hidden">
          {!open ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>
        <div
          className={
            !open
              ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-black md:hidden ease-in-out duration-500"
              : " flex: hidden"
          }
        >
          <h1 className="w-full text-3xl font-bold text-white m-4">
            MI PORTAFOLIO
          </h1>

          <ul className="p-4 uppercase text-white md:hidden">
            <li className="p-4 border-b border-gray-600">Home</li>
            <li className="p-4 border-b border-gray-600">about</li>
            <li className="p-4 border-b border-gray-600">contact</li>
            <li className="p-4 border-b border-gray-600">GitHub</li>
            <li className="p-4 ">Linkedin</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
