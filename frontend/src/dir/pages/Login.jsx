import React  from "react";
import { AiFillLock } from "react-icons/ai";
import { FaUser } from "react-icons/fa";
 

export default function Login() {


  return (
    <div className="w-full bg-blue-700 h-full">
      <div className="md:hidden  absolute w-full h-full 100vh " />

      <div className="w-full flex-wrap md:flex bg-black bg-opacity-20">
        <div className="w-full   h-full  bg-opacity-60 ">
          <div className="w-full flex justify-center items-center h-screen ">
            <div className="px-6 w-80 h-auto md:w-96 bg-black/50 md:bg-white/20    rounded-lg flex-wrap justify-center items-center py-6  space-y-4 relative ">
              <div className="text-white flex justify-center items-center text-xl font-bold">
                Gigscor
              </div>
           
              <form  className="space-y-4  ">
                <div className="flex-wrap justify-center items-center w-full pt-10  ">
                  <div className="relative px-2 w-full flex justify-center">
                    <input
                      type="text"
                      className="rounded-xl font-light pl-2  text-base p-2 border shadow-sm w-full md:w-72"
                      placeholder="username or ID"
                      maxLength={15}
                      required
                    />
                    <div className="absolute top-3 right-[10%] md:right-[15%]">
                      <FaUser className="opacity-30" />
                    </div>
                  </div>
                </div>

                <div className="flex-wrap justify-center items-center w-full pt-2  ">
                  <div className="relative px-2 w-full flex justify-center">
                    <input
                      type="password"
                      className="rounded-xl font-light text-base p-2 border shadow-sm w-full md:w-72"
                      placeholder="************"
                      required
                    />
                    <div className="absolute top-3 right-[10%] md:right-[15%]">
                      <AiFillLock className="opacity-30" />
                    </div>
                  </div>
                </div>

                <div className="flex justify-center items-center pt-6 pb-2">
                  <button
                    type="submit"
                    className=" rounded-xl bg-[#090abb] hover:bg-blue-600 px-4 py-2 text-white w-72 shadow-lg"
                  >
 Submit
                  </button>
                </div>
              </form>
              <div className="w-full flex-wrap text-xs font-light">
                <div className="text-white pt-4 flex justify-center items-center" />
              </div>

              <div className="text-white mt-12 cursor-pointer flex justify-center items-center font-light text-xs opacity-30">
                Gigscor &copy;
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
