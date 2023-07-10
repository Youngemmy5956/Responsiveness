import hero from "../assets/pngegg - 2022-12-31T123205 1.svg";
import star from "../assets/Vector.svg"
import rec from "../assets/Rectangle 13.svg";
import rec1 from "../assets/Rectangle 16.jpg";
import rec2 from "../assets/Rectangle 15.svg";
import rec3 from "../assets/Rectangle 14.svg";

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

        <span className="md:lg:flex gap-8 mt-10">
          <span className="gap-6 md:lg:flex md:lg:flex-col">
            <img src={rec} alt="" className="w-full px-4 pt-2"/>
            <img src={rec1} alt="" className="w-full px-4 pt-4" />
          </span>

          <span className="gap-6 md:lg:flex md:lg:flex-col">
            <img src={rec2} alt=""  className="w-full px-4 pt-4" />
            <img src={rec3} alt=""  className="w-full px-4 pt-4"/>
          </span>
        </span>
      </section>

        
    </div>
  )
}
