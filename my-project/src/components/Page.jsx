import hero from "../assets/pngegg - 2022-12-31T123205 1.svg";
import star from "../assets/Vector.svg"
import rec from "../assets/Rectangle 13.svg";
import rec1 from "../assets/Rectangle 16.jpg";
import rec2 from "../assets/Rectangle 15.svg";
import rec3 from "../assets/Rectangle 14.svg";
import imgs from "../assets/Ellipse 4.svg";
import rec15 from "../assets/Ellipse 5.svg";
import rec16 from "../assets/Ellipse 6.svg";
import rec17 from "../assets/Ellipse 7.svg";
import rec4 from "../assets/Rectangle 10.svg";
import rec7 from "../assets/Rectangle 35.svg";
import rec5 from "../assets/Rectangle 29.svg";
import rec6 from "../assets/Rectangle 32.svg";
import rec18 from "../assets/Group 16.svg";
import rec8 from "../assets/Rectangle 37.svg";
import rec10 from "../assets/Rectangle 38.svg";
import rec9 from "../assets/Rectangle 39.svg";
import rec11 from "../assets/Ellipse 15.svg";
import rec14 from "../assets/Frame.svg";
import rec12 from "../assets/Ellipse 17.svg";
import rec13 from "../assets/Ellipse 16.svg";
import { BiPhoneCall } from "react-icons/bi";
import { AiOutlineMail } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";
import rec19 from "../assets/LearnUp (1).svg";
import rec20 from "../assets/Group 1 (1).svg";
import rec21 from "../assets/Group 2 (1).svg";
import rec22 from "../assets/Group 32 (1).svg";
import rec23 from "../assets/Group 4 (1).svg";




export default function Page() {
  return (
    <div>

       
       <main>
        <section className="md:lg:ml-[150px] px-6 md:lg:flex ">
          <span className="gap-4 flex flex-col">
            <p className="font-semibold">
              HIGHLY PROFESSIONAL CLEANING
            </p>
            <h1 className="w-[468px] font-extrabold text-5xl ">
              <h1 className="text-[#1D4ED8]">EASY TO CLEAN</h1> HOUSE AND OFFICE
            </h1>
            <p className="text-base font-semibold">
              We understand your home is important to you . thats why we <br />{" "}
              focus on the quality of the cleaning. our cleaners arent <br />{" "}
              contract workers, they are ful-time employees that care as <br />{" "}
              much as we do
            </p>

            <button className="mt-14 mr-64 md:lg:mr-96 bg-[#1B1C57] text-white py-2 px-8 rounded-lg">
              Why choose us?
            </button>
          </span>

          <img src={star} alt="" className="" />

          <img src={star} alt="" className="absolute z-50" />

          <img src={hero} alt="" className="md:lg:ml-32 ml-2 md:lg:w-[50%]" />

          <img src={star} alt="" />
          <img src={star} alt="" className="" />
        </section>

        <hr className="md:lg:p-4 w-full p-6 mb-4 bg-[#1D4ED8]" />
      </main>

      <section className="md:lg:ml-[150px] pl-8 md:lg:flex gap-96">
        <span className="gap-4 flex flex-col mt-8">
          <p className="w-[303px] font-semibold text-[#1D4ED8]">About US</p>
          <h1 className="w-[468px] font-extrabold text-3xl ">
            <h1 className="text-[#1D4ED8]">QUICKLY AND EASY TO CLEAN </h1>
            <h1>YOUR OFFICE AND HOUSE</h1>
          </h1>
          <p className="text-base font-semibold">
            We understand your home is important to you . thats why we <br />{" "}
            focus on the quality of the cleaning. our cleaners arent <br />{" "}
            contract workers, they are ful-time employees that care as <br />{" "}
            much as we do
          </p>
          <p className="text-base font-semibold">
            We understand your home is important to you . thats why we <br />{" "}
            focus on the quality of the cleaning.
            <br />{" "}
          </p>

          <button className="mt-4 w-[47%] ml-4 bg-[#34A853] text-white py-2 px-8 rounded-lg">
            Chat us via Whatsapp
          </button>

        </span>

        <span className="md:lg:flex gap-4 mt-10">
          <span className="gap-2 md:lg:flex md:lg:flex-col">
            <img src={rec} alt="" className="w-full h-full px-4 pt-2"/>
            <img src={rec1} alt="" className="w-full h-full px-4 pt-4" />
          </span>

          <span className="gap-2 md:lg:flex md:lg:flex-col">
            <img src={rec2} alt=""  className="w-full h-full px-4 pt-4" />
            <img src={rec3} alt=""  className="w-full h-full px-4 pt-4"/>
          </span>
        </span>
       
      </section>

      <hr className="p-4 bg-[#1D4ED8] mt-6" />

      <section className="md:lg:flex md:lg:flex-col px-4 mt-10">
       
        <span className="flex flex-col place-items-center">
          <h1 className="text-[#1D4ED8] font-bold mt-10">OUR SERVICES</h1>
          <p className="font-extrabold text-3xl">WHAT WE ARE OFFERING</p>
        </span>

        <span className="md:lg:flex items-center md:lg:w-[80%] m-auto gap-6 md:lg:mt-32 ">
          <div className="border border-black rounded-md px-10 py-4 flex flex-col items-center gap-4 mb-20 mt-24">
            <img src={imgs} alt="" className="w-40 -mt-24" />
            <p className="font-semibold text-[#1D4ED8]">House Cleaning</p>

            <p className="w-[90%] text-center">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint.
            </p>
          </div>

          <div className="border border-black rounded-md px-10 py-4 flex flex-col items-center gap-4 mt-24 mb-20 bg-[#1D4ED8] text-white">
            <img src={rec15} alt="" className="w-40 -mt-24" />
            <p className="font-semibold ">Laundering</p>

            <p className="w-[90%] text-center ">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint.
            </p>
          </div>

          <div className="border border-black rounded-md px-10 py-4 flex flex-col items-center gap-4 mt-24 mb-20">
            <img src={rec16} alt="" className="w-40 -mt-24" />
            <p className="font-semibold text-[#1D4ED8]">Gardening</p>

            <p className="w-[90%] text-center">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint.
            </p>
          </div>

          <div className="border border-black rounded-md px-10 py-4 flex flex-col items-center mt-24 gap-4 mb-20">
            <img src={rec17} alt="" className="w-40 -mt-24" />
            <p className="font-semibold text-[#1D4ED8]">Bush Clearing</p>

            <p className="w-[90%] text-center">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint.
            </p>
          </div>
        </span>
      </section>

      <section className="px-8">
        <span className="flex flex-col place-items-center mt-20">
          <h1 className="text-[#1D4ED8] font-bold">OUR TEAM</h1>
          <p className="font-extrabold md:lg:text-3xl text-xl mb-4">OUR EXPERT TEAM MEMBERS</p>
        </span>

        <span className="md:lg:flex items-center  w-[80%] m-auto gap-6 mt-28">
          <div className="border border-black rounded-md flex flex-col items-center gap-4  mb-8 shadow-xl md:lg:w-full ">
            <img src={rec4} alt="" className="w-[100%] shadow-2xl " />
            <p className="font-bold text-[#1D4ED8] text-3xl shadow-md">
              Ruth Ojo
            </p>

            <p className="w-[90%] text-center text-2xl shadow-md">
              Head Cleaner
            </p>
          </div>

          <div className="border border-black rounded-md  flex flex-col items-center gap-4 mb-8 w-full">
            <img src={rec7} alt="" className="w-[100%] shadow-2xl" />
            <p className="font-bold text-[#1D4ED8] shadow-md text-3xl">
              Cody Dayo
            </p>

            <p className="w-[90%] text-center shadow-md text-2xl">
              Head Gardener
            </p>
          </div>

          <div className="border border-black rounded-md flex flex-col items-center gap-4 mb-8 w-full">
            <img src={rec5} alt="" className="w-[100%] shadow-2xl" />
            <p className="font-bold text-[#1D4ED8] shadow-md text-3xl">
              Damilola Wey
            </p>

            <p className="w-[90%] text-center shadow-md text-2xl">
              State Supervisor
            </p>
          </div>

          <div className="border border-black rounded-md  flex flex-col items-center gap-4 mb-8 w-full">
            <img src={rec6} alt="" className="w-[100%] shadow-2xl " />
            <p className="font-bold text-[#1D4ED8] shadow-md text-3xl">
              Ralph Edwards
            </p>

            <p className="w-[90%] text-center shadow-md text-2xl">
              Head Of Operations
            </p>
          </div>
        </span>
            <span className="flex flex-row gap-2 justify-center mt-10">
            <img src={rec18} alt="" /> <img src={rec18} alt="" />{" "}
            <img src={rec18} alt="" /> <img src={rec18} alt="" />
            <img src={rec18} alt="" />
            </span>
      </section>

      <section className="px-8">
        <span className="flex flex-col place-items-center mt-20">
          <h1 className="text-[#1D4ED8] font-bold">OUR PORTFOLIO</h1>
          <p className="font-extrabold text-3xl mb-4">RECENT WORK SHOWCASE</p>
        </span>

        <span className="md:lg:flex items-center w-[80%] m-auto gap-6 mt-28 ">
          <div className="border border-black rounded-md  flex flex-col items-center gap-4 mb-8 w-full ">
            <img src={rec8} alt="" className="w-[100%] shadow-2xl " />
          </div>

          <div className="border border-black rounded-md  flex flex-col items-center gap-4 mb-8 w-full ">
            <img src={rec10} alt="" className="w-[100%] shadow-2xl " />
          </div>

          <div className="border border-black rounded-md  flex flex-col items-center gap-4 mb-8 w-full ">
            <img src={rec9} alt="" className="w-[100%] shadow-2xl " />
          </div>
        </span>

        <span className="flex flex-row gap-2 justify-center mt-10">
          <img src={rec18} alt="" /> <img src={rec18} alt="" />{" "}
          <img src={rec18} alt="" /> <img src={rec18} alt="" />
          <img src={rec18} alt="" />
        </span>
      </section>

      <section className="px-8">
        <span className="flex flex-col place-items-center mt-20">
          <h1 className="text-[#1D4ED8] font-bold">HAPPY CUSTOMERS</h1>
          <p className="font-extrabold text-3xl">WHAT OUR CUSTOMERS SAY</p>
        </span>

        <span className="md:lg:flex items-center w-[80%] m-auto gap-6 mt-24">
          <div className="border border-black rounded-md px-4 py-4 flex flex-col items-center mt-24 gap-4 mb-8">
            <img src={rec11} alt="" className="w-40 -mt-24" />
            <p className="font-bold text-5xl ">Igwe Henry</p>
            <p className="font-medium ">Nursing Assistant </p>

            <p className="w-[90%] text-center text-1xl font-bold">
              Aliqua id fugiat nostrud irure ex duis ea quis quis ad et. Sunt
              qui esse pariatur duis deserunt mollit dolore cillum minim tempor
              enim.
            </p>
            <img src={rec14} alt="" />
          </div>

          <div className="border border-black rounded-md px-4 py-4 flex flex-col items-center mt-24 gap-4 mb-8 bg-[#1D4ED8]">
            <img src={rec12} alt="" className="w-40 -mt-24 " />
            <p className="font-bold text-white text-5xl">Bolu Mufasa</p>
            <p className="font-medium text-white">Sales Personnel </p>

            <p className="w-[90%] text-center text-1xl font-bold ">
              Aliqua id fugiat nostrud irure ex duis ea quis quis ad et. Sunt
              qui esse pariatur duis deserunt mollit dolore cillum minim tempor
              enim.
            </p>
            <img src={rec14} alt="" />
          </div>

          <div className="border border-black rounded-md px-4 py-4 flex flex-col mt-24 items-center gap-4 mb-8">
            <img src={rec13} alt="" className="w-40 -mt-24" />
            <p className="font-bold text-5xl">Temitayo</p>
            <p className="font-medium ">Marketing Coordinator </p>

            <p className="w-[90%] text-center text-1xl font-bold">
              Aliqua id fugiat nostrud irure ex duis ea quis quis ad et. Sunt
              qui esse pariatur duis deserunt mollit dolore cillum minim tempor
              enim.
            </p>
            <img src={rec14} alt="" />
          </div>
        </span>
        <span className="flex flex-row gap-2 justify-center mt-10">
          <img src={rec18} alt="" /> <img src={rec18} alt="" />{" "}
          <img src={rec18} alt="" /> <img src={rec18} alt="" />
          <img src={rec18} alt="" />
        </span>
      </section>

      <div className="md:lg:w-full md:lg:flex px-8 md:lg:flex-col mt-40 bg-[#1E2746] gap-20">
        <div className="md:lg:w-[1168px] ml-[4px] w-full border md:lg:ml-96 border-black bg-[#1D4ED8] px-6 py-6  md:lg:flex md:lg:flex-col gap-8 -m-20  ">
          <span className="mt-2">
            <p className="font-medium text-4xl pl-10 text-white">
              Subscribe To Our News Letter
            </p>
            <p className="font-medium text-lg pl-10 text-white capitalize ">
              Subscribe to our news letter to get <br /> latest news and updates
            </p>
          </span>

          {/* <span className="flex justify-end px-8 py-0 ">
          <input type="mail" value="" placeholder="Enter your mail"  className="w-[510px] border border-white bg-[#1D4ED8] px-2 py-2 flex items-end" /> 
          </span> */}
        </div>

        <main className="md:lg:ml-[190px] mt-20 gap-4 md:lg:flex md:lg:flex-col">
          <span className=" mb-14 md:lg:flex gap-40">
            <span className="mt-10 gap-4">
              <img src={rec19} alt="" className="pt-8"/>
              <p className="text-white font-medium leading-7 pt-4 text-sm">
                Amet minim mollit non deserunt ullamc est <br /> sit aliqua
                dolor amet sint. Amet minim <br /> mollit non deserunt ullamco
                est sit aliqua.
              </p>

              <br />

              <span className="flex mb-20 gap-4">
                <img src={rec20} alt="" />
                <img src={rec21} alt="" />
                <img src={rec22} alt="" />
                <img src={rec23} alt="" />
              </span>
            </span>

            <span className="">
              <p className="text-4xl text-white mt-16 font-serif">Services</p>
              <p className="font-semibold font-mono text-white text-lg">
                House Cleaning
              </p>
              <p className="font-semibold font-mono text-white text-lg">
                Laundering
              </p>
              <p className="font-semibold font-mono text-white text-lg">
                Gardening
              </p>
              <p className="font-semibold font-mono text-white text-lg">
                Bush Clearing
              </p>
            </span>

            <span className="">
              <p className="text-4xl text-white mt-16 font-serif">
                Useful Links
              </p>
              <p className="font-semibold font-mono text-white text-lg">
                Home Page
              </p>
              <p className="font-semibold font-mono text-white text-lg">
                About Page
              </p>
              <p className="font-semibold font-mono text-white text-lg">
                Service Page
              </p>
              <p className="font-semibold font-mono text-white text-lg">
                Contact Page
              </p>
            </span>

            <span>
              <p className="text-4xl text-white mt-16 font-serif">Contact</p>
              <p className="font-semibold font-mono text-white text-lg flex">
                <BiPhoneCall /> (+234) 804 4458 187
              </p>
              <p className="font-semibold font-mono text-white text-lg flex">
                <AiOutlineMail /> info@email.com
              </p>
              <p className="font-semibold font-mono text-white text-lg flex">
                <CiLocationOn /> 564 Lekki Road, Lagos
              </p>
            </span>
          </span>
        </main>
        <span className="md:lg:ml-[190px] mb-8">
          <p className="text-white pt-8 md:lg:pl-[600px]">
            &copy; By Wypa @ 2023. All Rights Reserved.. Developed by Emmy.
          </p>
        </span>
      </div>


        
    </div>
  )
}
