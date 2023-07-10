import hero from "../assets/pngegg - 2022-12-31T123205 1.svg";
import star from "../assets/Vector.svg"

export default function Page() {
  return (
    <div>

       
       <main>
        <section className="md:lg:ml-[190px] px-6 md:lg:flex ">
          <span className="gap-4 flex flex-col">
            <p className="font-semibold">
              HIGHLY PROFESSIONAL CLEANING
            </p>
            <h1 className="w-[468px] font-extrabold text-5xl ">
              <h1 className="text-[#1D4ED8]">EASY TO CLEAN</h1> HOUSE AND OFFICE
            </h1>
            <p className="text-base font-semibold">
              We understand your home is important to you . that's why we <br />{" "}
              focus on the quality of the cleaning. our cleaners aren't <br />{" "}
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
        </section>

        <hr className="md:lg:p-4 w-full p-6 mb-4 bg-[#1D4ED8]" />
      </main>

        
    </div>
  )
}
