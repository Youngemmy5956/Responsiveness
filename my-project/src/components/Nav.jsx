import logo from "../assets/Group 1707477972.svg";
import { BiBookAlt } from "react-icons/bi";
import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";

export default function Nav() {
  let [open, setOpen] = useState(false);
  return (
    <div  onClick={() => setOpen(!open)}
    className="text-3xl top-0 cursor-pointer sticky z-50 bg-slate-50">

<span>
          <img src={logo} alt="" className="mt-4 pl-6 md:lg:hidden"/>
        </span>
      <AiOutlineMenu name={open ? "close" : "menu"} onClick={() => setOpen(!close)} className="md:lg:hidden ml-[90%]"/>
      <section className={`pb-12 absolute bg-slate-50 text-white md:lg:bg-white md:static md:z-0 z-[50] left-0 w-full md:w-auto  transition-all duration-500 ease-in ${
            open ? "top-0 opacity-100" : "top-[-490px]"
          } md:opacity-100 text-center `} >
      <header className="py-2 md:lg:flex md:lg:justify-between pl-20 shadow-md rounded-xl sticky top-0 z-50  ">
      <span>
          <img src={logo} alt="" className=""/>
        </span>
        
        <ul className="md:lg:flex md:lg:gap-10 gap-6 md:lg:ml-52 mt-1 text-[#1B1C57] md:lg:text-[#555555] font-semibold text-lg">
          <li>
            <a href="" className="text-[#1B1C57]">Home</a>
          </li>
          <li>
            <a href="">About Us</a>
          </li>

          <li>
            <a href="">Contact Us</a>
          </li>

          <li>
            <a href="">Services</a>
          </li>
        </ul>
        <span>
        <button className="py-2 md:ml-8 md:lg:mx-36 flex gap-2 bg-[#1B1C57] md:lg:text-white px-8 rounded-lg">
              {" "}
              <BiBookAlt className="mt-1" />
              Book Schedule
            </button>
        </span>
      </header>
      </section>
    </div>
  );
}
