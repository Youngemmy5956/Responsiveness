import logo from "../assets/Group 1707477972.svg";
import { BiBookAlt } from "react-icons/bi";
import hero from "../assets/pngegg - 2022-12-31T123205 1.svg";
import rec from "../assets/Rectangle 13.svg";
import rec1 from "../assets/Rectangle 16.jpg";
import rec2 from "../assets/Rectangle 15.svg";
import rec3 from "../assets/Rectangle 14.svg";

export default function Tutorial() {
  return (
    <div>
      <header className="flex shadow-md py-6 bg-slate-50 rounded-xl justify-between px-16 sticky top-0 z-50">
        <span>
          <a href=""><img src={logo} alt="" className="pb-4" /></a>
        </span>

        <span>
          <ul className="flex gap-10 font-medium text-[20px] w-[400] leading-4">
            <li className="text-[#1B1C57]"><a href="">Home</a></li>
            <li><a href="">About</a></li>
            <li><a href="">Services</a></li>
            <li><a href="">Contact</a></li>
          </ul>
        </span>

        <span>
          <button className="flex px-6 py-2 rounded-md bg-[#1B1C57] text-white">
            <BiBookAlt className="mt-1" /> Book Schedule
          </button>
        </span>
      </header>


      <section className="flex px-[100px] mr-32 justify-between mt-20">
        <span className="w-[75%]">
            <h1 className="text-[20px]">HIGHLY PROFESSIONAL CLEANING</h1>
            <h1 className="text-[50px] text-[#1D4ED8]">EASY TO CLEAN <h1 className="text-black">HOUSE AND OFFICE</h1></h1>
            <h1>We understand your home is important to you . thats why we <br /> focus on the quality of the cleaning. our cleaners arent <br /> contract workers, they are ful-time employees that care as <br /> much as we do</h1>

            <button className="px-4 bg-[#1B1C57] mt-6 text-white py-2 rounded-md">Why choose us</button>
        </span>

        <span className="w-[100%]">
            <img src={hero} alt="" className="" />
        </span>
      </section>
      <hr className="bg-[#1D4ED8] p-4"/>

      <section className="flex">
        <span>
        <h1>About us</h1>
        <h1>QUICKLY AND EASY TO CLEAN YOUR OFFICE AND HOUSE</h1>
        <h1>Amet minim mollit non deserunt ullamco sit aliqua dolor do consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco aliqua dolo ame. Amet minim mollit non deserunt ullamco sit aliqua dolor do consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco aliqua dolo ame.</h1>

        <button className="bg-[#34A853]">chat us via Whatsapp</button>
        </span>

        <span className="flex gap-4">
            <div>
                <img src={rec} alt="" />
                <img src={rec1} alt="" />

            </div>

            <div>
                <img src={rec2} alt="" />
                <img src={rec3} alt="" />
            </div>
        </span>
      </section>

      
    </div>
  );
}
