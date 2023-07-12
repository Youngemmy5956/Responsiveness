import hero from "../assets/pngegg - 2022-12-31T123205 1.svg";
import rec18 from "../assets/Group 16.svg";
import { BsFacebook } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { AiOutlineGithub } from "react-icons/ai";
import { useState } from "react";
import { BiArrowBack } from "react-icons/bi";

export default function Port() {
  const [loginPage, setLoginPage] = useState({
    page1: true,
    page2: false,
    page3: false,
    page4: false,
    page5: false,
  });
  return (
    <>
      {loginPage.page1 && (
        <div className="md:lg:w-[30%] w-[100%] rounded-xl bg-black text-slate-300 border-slate-50 border-4 md:lg:shadow-md shadow-xl md:lg:h-[70vh] h-[80vh] md:lg:ml-[35%]  ">
          <span className=" flex gap-32">
            <span className="flex flex-row gap-2 justify-center mt-10 pl-6">
              <img src={rec18} alt="" />
              <img src={rec18} alt="" className="" />
               <img src={rec18} alt="" />{" "}
            </span>
            <h1 className="text-2xl text-center pt-8">My-Portfolio</h1>
          </span>
          <hr className="p-[2px] bg-[#1D4ED8]" />

          <img
            src={hero}
            alt=""
            className="border-2 bg-[#1D4ED8] border-slate-50 rounded-[100%] w-20 mb-4 mt-4 ml-[40%]"
          />

          <span className="text-center">
            <h1 className="text-xl font-mono font-semibold animate-pulse">
              Nwamini Emmanuel O.
            </h1>
            <h1 className="text-base font-medium">Mern/Laravel Developer</h1>
          </span>

          <span>
            <h1 className="px-2 mt-6">
              A Freelancer ,Web-Developer, Software Engineer, Crypto-Trader and
              A Teacher
            </h1>
          </span>

          <span className="flex gap-4 pl-20 pt-6">
            <span>
              <h1 className="text-xl font-mono font-semibold pl-32">
                Capabilities:
              </h1>
            </span>
            <span>
              <h1 className="text-xl font-mono font-normal">Frontend Dev.</h1>
              <h1 className="text-xl font-mono font-normal">Backend Dev.</h1>
              <h1 className="text-xl font-mono font-normal">Database Mgt.</h1>
              <h1 className="text-xl font-mono font-normal">Restful-Api.</h1>
            </span>
          </span>

          <span className="flex gap-4 pt-6 mb-6 pl-12">
            <span>
              <h1 className="text-xl font-mono font-semibold ">
                Social links:
              </h1>
            </span>

            <span className="flex gap-2">
              <a href="">
                <h1 className="text-xl font-mono font-normal flex">
                  {" "}
                  <BsFacebook className="mt-1" />
                </h1>
              </a>
              <a href="">
                <h1 className="text-xl font-mono font-normal flex">
                  {" "}
                  <BsLinkedin className="mt-1" />
                </h1>
              </a>
              <a href="">
                <h1 className="text-xl font-mono font-normal flex">
                  {" "}
                  <BsInstagram className="mt-1" />
                </h1>
              </a>
              <a href="">
                <h1 className="text-xl font-mono font-normal flex">
                  {" "}
                  <BsTwitter className="mt-1" />
                </h1>
              </a>
              <a href="">
                <h1 className="text-xl font-mono font-normal flex">
                  {" "}
                  <AiOutlineGithub className="mt-1" />
                </h1>
              </a>
            </span>
          </span>

          <span className="">
            <a href="" className="text-xl font-mono pl-12">
              Link to my resume: Resume
            </a>
          </span>

          <div className="flex justify-center mt-8">
            <button
              className="rounded-md bg-black border-2 px-8 py-2 text-slate-50"
              onClick={() =>
                setLoginPage({ ...loginPage, page1: false, page2: true })
              }
            >
              Next
            </button>
          </div>
        </div>
      )}
      {loginPage.page2 && (
        <div className="md:lg:w-[30%] w-[100%] rounded-xl bg-black text-slate-300 border-slate-50 border-4 md:lg:shadow-md shadow-xl md:lg:h-[70vh] h-[80vh] md:lg:ml-[35%]  ">
          <span className=" flex gap-32">
            <span className="flex flex-row gap-2 justify-center mt-10 pl-6">
              <img src={rec18} alt="" /> 
              <img src={rec18} alt="" />
              <img src={rec18} alt="" />
            </span>
            <h1 className="text-center flex flex-row-reverse text-2xl pt-8">
              <BiArrowBack
                className="cursor-pointer mt-2"
                onClick={() =>
                  setLoginPage({ ...loginPage, page1: true, page2: false })
                }
              />
              Projects
            </h1>
          </span>
          <hr className="p-[2px] bg-[#1D4ED8]" />
                 <span className="w-full flex gap-2 px-4 mt-2">
                    <div className="w-1/3 border-2 border-slate-50">
                        <img src={hero} alt="" />
                    </div>

                    <div className="w-1/3 border-2 border-slate-50">
                        <img src={hero} alt="" />
                    </div>

                    <div className="w-1/3 border-2 border-slate-50">
                        <img src={hero} alt="" />
                    </div>
                 </span>
         

         
          <span className="flex gap-4 pt-6 mb-6 pl-12">
            <span>
              <h1 className="text-xl font-mono font-semibold ">
                Social links:
              </h1>
            </span>

            <span className="flex gap-2">
              <a href="">
                <h1 className="text-xl font-mono font-normal flex">
                  {" "}
                  <BsFacebook className="mt-1" />
                </h1>
              </a>
              <a href="">
                <h1 className="text-xl font-mono font-normal flex">
                  {" "}
                  <BsLinkedin className="mt-1" />
                </h1>
              </a>
              <a href="">
                <h1 className="text-xl font-mono font-normal flex">
                  {" "}
                  <BsInstagram className="mt-1" />
                </h1>
              </a>
              <a href="">
                <h1 className="text-xl font-mono font-normal flex">
                  {" "}
                  <BsTwitter className="mt-1" />
                </h1>
              </a>
              <a href="">
                <h1 className="text-xl font-mono font-normal flex">
                  {" "}
                  <AiOutlineGithub className="mt-1" />
                </h1>
              </a>
            </span>
          </span>

          <span className="">
            <a href="" className="text-xl font-mono pl-12">
              Link to my resume: Resume
            </a>
          </span>

          <div className="flex justify-center mt-8">
            <button
              className="rounded-md border-2 flex bg-black px-8 py-2 text-slate-50"
              onClick={() =>
                setLoginPage({ ...loginPage, page2: false, page3: true })
              }
            >
              Next
            </button>
          </div>
        </div>
      )}

      {loginPage.page3 && (
        <div className="md:lg:w-[30%] w-[100%] rounded-xl bg-black text-slate-300 border-slate-50 border-4 md:lg:shadow-md shadow-xl md:lg:h-[70vh] h-[80vh] md:lg:ml-[35%]  ">
        <span className=" flex gap-32">
          <span className="flex flex-row gap-2 justify-center mt-10 pl-6">
            <img src={rec18} alt="" /> <img src={rec18} alt="" />{" "}
            <img src={rec18} alt="" /> <img src={rec18} alt="" />
            <img src={rec18} alt="" />
          </span>
          <h1 className="text-center flex flex-row-reverse text-2xl pt-8">
            <BiArrowBack
              className="cursor-pointer mt-2"
              onClick={() =>
                setLoginPage({ ...loginPage, page2: true, page3: false })
              }
            />
            Home
          </h1>
        </span>
        <hr className="p-[2px] bg-[#1D4ED8]" />

        <img
          src={hero}
          alt=""
          className="border-2 bg-[#1D4ED8] border-slate-50 rounded-[100%] w-20 mb-4 mt-4 ml-[40%]"
        />

        <span className="text-center">
          <h1 className="text-xl font-mono font-semibold animate-pulse">
            Nwamini Emmanuel O.
          </h1>
          <h1 className="text-base font-medium">Mern/Laravel Developer</h1>
        </span>

        <span>
          <h1 className="px-2 mt-6">
            A Freelancer ,Web-Developer, Software Engineer, Crypto-Trader and
            A Teacher
          </h1>
        </span>

        <span className="flex gap-4 pl-20 pt-6">
          <span>
            <h1 className="text-xl font-mono font-semibold pl-32">
              Capabilities:
            </h1>
          </span>
          <span>
            <h1 className="text-xl font-mono font-normal">Frontend Dev.</h1>
            <h1 className="text-xl font-mono font-normal">Backend Dev.</h1>
            <h1 className="text-xl font-mono font-normal">Database Mgt.</h1>
            <h1 className="text-xl font-mono font-normal">Restful-Api.</h1>
          </span>
        </span>

        <span className="flex gap-4 pt-6 mb-6 pl-12">
          <span>
            <h1 className="text-xl font-mono font-semibold ">
              Social links:
            </h1>
          </span>

          <span className="flex gap-2">
            <a href="">
              <h1 className="text-xl font-mono font-normal flex">
                {" "}
                <BsFacebook className="mt-1" />
              </h1>
            </a>
            <a href="">
              <h1 className="text-xl font-mono font-normal flex">
                {" "}
                <BsLinkedin className="mt-1" />
              </h1>
            </a>
            <a href="">
              <h1 className="text-xl font-mono font-normal flex">
                {" "}
                <BsInstagram className="mt-1" />
              </h1>
            </a>
            <a href="">
              <h1 className="text-xl font-mono font-normal flex">
                {" "}
                <BsTwitter className="mt-1" />
              </h1>
            </a>
            <a href="">
              <h1 className="text-xl font-mono font-normal flex">
                {" "}
                <AiOutlineGithub className="mt-1" />
              </h1>
            </a>
          </span>
        </span>

        <span className="">
          <a href="" className="text-xl font-mono pl-12">
            Link to my resume: Resume
          </a>
        </span>

        <div className="flex justify-center mt-8">
          <button
            className="rounded-md border-2 flex bg-black px-8 py-2 text-slate-50"
            
          >
            Thanks
          </button>
        </div>
      </div>
      )}
    </>
  );
}
