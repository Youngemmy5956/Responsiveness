import hero from "../assets/pngegg - 2022-12-31T123205 1.svg";
import star from "../assets/Vector.svg"
import rec from "../assets/Rectangle 13.svg";
import rec1 from "../assets/Rectangle 16.jpg";
import rec2 from "../assets/Rectangle 15.svg";
import rec3 from "../assets/Rectangle 14.svg";
import imgs from "../Assets/Ellipse 4.svg";
import rec15 from "../Assets/Ellipse 5.svg";
import rec16 from "../Assets/Ellipse 6.svg";
import rec17 from "../Assets/Ellipse 7.svg";

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

        <span className="md:lg:flex items-center md:lg:w-[80%]  m-auto gap-6 mt-28">
          <div className="border border-black rounded-md px-4 py-4 flex flex-col items-center gap-4 mb-8">
            <img src={imgs} alt="" className="w-40 -mt-24" />
            <p className="font-semibold text-[#1D4ED8]">House Cleaning</p>

            <p className="w-[90%] text-center">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint.
            </p>
          </div>

          <div className="border border-black rounded-md px-4 py-4 flex flex-col items-center gap-4 mb-8 bg-[#1D4ED8] text-white">
            <img src={rec15} alt="" className="w-40 -mt-24" />
            <p className="font-semibold ">Laundering</p>

            <p className="w-[90%] text-center ">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint.
            </p>
          </div>

          <div className="border border-black rounded-md px-4 py-4 flex flex-col items-center gap-4 mb-8">
            <img src={rec16} alt="" className="w-40 -mt-24" />
            <p className="font-semibold text-[#1D4ED8]">Gardening</p>

            <p className="w-[90%] text-center">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint.
            </p>
          </div>

          <div className="border border-black rounded-md px-4 py-4 flex flex-col items-center gap-4 mb-8">
            <img src={rec17} alt="" className="w-40 -mt-24" />
            <p className="font-semibold text-[#1D4ED8]">Bush Clearing</p>

            <p className="w-[90%] text-center">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint.
            </p>
          </div>
        </span>
      </section>

      <section>
        <span className="flex flex-col place-items-center mt-20">
          <h1 className="text-[#1D4ED8] font-bold">OUR TEAM</h1>
          <p className="font-extrabold text-3xl">OUR EXPERT TEAM MEMBERS</p>
        </span>

        <span className="md:lg:flex items-center w-[80%] m-auto gap-6 mt-28">
          <div className="border border-black rounded-md flex flex-col items-center gap-4 mb-8 shadow-xl md:lg:w-full ">
            {/* <img src={rec4} alt="" className="w-[100%] shadow-2xl " /> */}
            <p className="font-bold text-[#1D4ED8] text-3xl shadow-md">
              Ruth Ojo
            </p>

            <p className="w-[90%] text-center text-2xl shadow-md">
              Head Cleaner
            </p>
          </div>

          <div className="border border-black rounded-md  flex flex-col items-center gap-4 mb-8 w-full">
            {/* <img src={rec7} alt="" className="w-[100%] shadow-2xl" /> */}
            <p className="font-bold text-[#1D4ED8] shadow-md text-3xl">
              Cody Dayo
            </p>

            <p className="w-[90%] text-center shadow-md text-2xl">
              Head Gardener
            </p>
          </div>

          <div className="border border-black rounded-md flex flex-col items-center gap-4 mb-8 w-full">
            {/* <img src={rec5} alt="" className="w-[100%] shadow-2xl" /> */}
            <p className="font-bold text-[#1D4ED8] shadow-md text-3xl">
              Damilola Wey
            </p>

            <p className="w-[90%] text-center shadow-md text-2xl">
              State Supervisor
            </p>
          </div>

          <div className="border border-black rounded-md  flex flex-col items-center gap-4 mb-8 w-full">
            {/* <img src={rec6} alt="" className="w-[100%] shadow-2xl " /> */}
            <p className="font-bold text-[#1D4ED8] shadow-md text-3xl">
              Ralph Edwards
            </p>

            <p className="w-[90%] text-center shadow-md text-2xl">
              Head Of Operations
            </p>
          </div>
        </span>
        {/* <span className="flex flex-row gap-2 justify-center mt-10">
          <img src={rec18} alt="" /> <img src={rec18} alt="" />{" "}
          <img src={rec18} alt="" /> <img src={rec18} alt="" />
          <img src={rec18} alt="" />
        </span> */}
      </section>

      <section>
        <span className="flex flex-col place-items-center mt-20">
          <h1 className="text-[#1D4ED8] font-bold">OUR PORTFOLIO</h1>
          <p className="font-extrabold text-3xl">RECENT WORK SHOWCASE</p>
        </span>

        <span className="flex items-center w-[80%] m-auto gap-6 mt-28 ">
          <div className="border border-black rounded-md  flex flex-col items-center gap-4 mb-8 w-full ">
            {/* <img src={rec8} alt="" className="w-[100%] shadow-2xl " /> */}
          </div>

          <div className="border border-black rounded-md  flex flex-col items-center gap-4 mb-8 w-full ">
            {/* <img src={rec10} alt="" className="w-[100%] shadow-2xl " /> */}
          </div>

          <div className="border border-black rounded-md  flex flex-col items-center gap-4 mb-8 w-full ">
            {/* <img src={rec9} alt="" className="w-[100%] shadow-2xl " /> */}
          </div>
        </span>

        {/* <span className="flex flex-row gap-2 justify-center mt-10">
          <img src={rec18} alt="" /> <img src={rec18} alt="" />{" "}
          <img src={rec18} alt="" /> <img src={rec18} alt="" />
          <img src={rec18} alt="" />
        </span> */}
      </section>

      <section>
        <span className="flex flex-col place-items-center mt-20">
          <h1 className="text-[#1D4ED8] font-bold">HAPPY CUSTOMERS</h1>
          <p className="font-extrabold text-3xl">WHAT OUR CUSTOMERS SAY</p>
        </span>

        <span className="md:lg:flex items-center w-[80%] m-auto gap-6 mt-32">
          <div className="border border-black rounded-md px-4 py-4 flex flex-col items-center gap-4 mb-8">
            {/* <img src={rec11} alt="" className="w-40 -mt-24" /> */}
            <p className="font-bold text-5xl ">Igwe Henry</p>
            <p className="font-medium ">Nursing Assistant </p>

            <p className="w-[90%] text-center text-1xl font-bold">
              Aliqua id fugiat nostrud irure ex duis ea quis quis ad et. Sunt
              qui esse pariatur duis deserunt mollit dolore cillum minim tempor
              enim.
            </p>
            {/* <img src={rec14} alt="" /> */}
          </div>

          <div className="border border-black rounded-md px-4 py-4 flex flex-col items-center gap-4 mb-8 bg-[#1D4ED8]">
            {/* <img src={rec12} alt="" className="w-40 -mt-24 " /> */}
            <p className="font-bold text-white text-5xl">Bolu Mufasa</p>
            <p className="font-medium text-white">Sales Personnel </p>

            <p className="w-[90%] text-center text-1xl font-bold ">
              Aliqua id fugiat nostrud irure ex duis ea quis quis ad et. Sunt
              qui esse pariatur duis deserunt mollit dolore cillum minim tempor
              enim.
            </p>
            {/* <img src={rec14} alt="" /> */}
          </div>

          <div className="border border-black rounded-md px-4 py-4 flex flex-col items-center gap-4 mb-8">
            {/* <img src={rec13} alt="" className="w-40 -mt-24" /> */}
            <p className="font-bold text-5xl">Temitayo</p>
            <p className="font-medium ">Marketing Coordinator </p>

            <p className="w-[90%] text-center text-1xl font-bold">
              Aliqua id fugiat nostrud irure ex duis ea quis quis ad et. Sunt
              qui esse pariatur duis deserunt mollit dolore cillum minim tempor
              enim.
            </p>
            {/* <img src={rec14} alt="" /> */}
          </div>
        </span>
        {/* <span className="flex flex-row gap-2 justify-center mt-10">
          <img src={rec18} alt="" /> <img src={rec18} alt="" />{" "}
          <img src={rec18} alt="" /> <img src={rec18} alt="" />
          <img src={rec18} alt="" />
        </span> */}
      </section>


        
    </div>
  )
}
