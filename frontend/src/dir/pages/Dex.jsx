import { Fragment } from "react";
import { RiArrowLeftRightFill } from "react-icons/ri";
import { AiFillSetting } from "react-icons/ai";
import { Link } from "react-router-dom";

export default function Dex() {
  return (
    <Fragment>
      <div id="backdex">
        <div className="flex-wrap  h-screen flex justify-center items-center text-white">
          <div className=" flex justify-center font-extrabold text-center text-6xl">
            <div
              className="bg-white p-12 rounded-xl max-w-lg"
              style={{
                background:
                  "linear-gradient(180deg, #321450 0%, #1D1C1F 23.06%)",
              }}
            >
              <div className="text-4xl text-center" id="info">
                Ìyálọ́jà
              </div>
              <div className="text-sm pt-4">
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed,
                non ut nostrum, blanditiis"
              </div>
              <div className="mt-8">
                <div id="offIt">
                  <span className="text-right flex justify-end text-xl pb-2 cursor-pointer">
                    <AiFillSetting />
                  </span>

                  <div className="px-3 pt-4 pb-2 bg-gray-600/50  shadow-xl shadow-black text-base mb-4 flex items-center justify-between">
                    <div>
                      <div>Fiat</div>
                      <div>to</div>
                      <div>Crypto</div>
                    </div>
                    <div></div>
                  </div>
                  <div className="mb-4">
                    <div className="px-3 pt-4 pb-2 bg-gray-600/50  shadow-xl shadow-black">
                      <select
                        id="countries"
                        className="bg-transparent  text-white text-xl block w-full p-2.5 "
                      >
                        <option disabled className="bg-black">
                          From: ONE balance: 100.67
                        </option>
                        <option className="bg-black">BNB</option>
                        <option className="bg-black">BTC</option>
                        <option className="bg-black"> Coach</option>
                      </select>
                      <div className="text-sm font-extrabold flex justify-center  text-left pl-3">
                        <input
                          type="text"
                          className="flex justify-begin p-2 opacity-75 w-full bg-transparent text-left text-white "
                          placeholder="Enter amount from 10"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="text-xl mb-4">
                    <RiArrowLeftRightFill />
                  </div>

                  <div className="mb-4">
                    <div className="px-3 pt-4 pb-2 bg-gray-600/50  shadow-xl shadow-black">
                      <select
                        id="countries"
                        className="bg-transparent  text-white text-xl block w-full p-2.5 "
                      >
                        <option disabled className="bg-black">
                          To:
                        </option>
                        <option className="bg-black">Coach</option>
                        <option className="bg-black">EOS</option>
                        <option className="bg-black"> BTC</option>
                        <option className="bg-black"> ONE</option>
                      </select>
                      <div className="text-sm font-extrabold flex justify-center  text-left pl-3">
                        <input
                          type="text"
                          className="flex justify-begin p-2 opacity-75 w-full bg-transparent text-left text-white "
                          placeholder="Enter amount from 10"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="text-sm text-left font-normal mb-3 text-yellow-400">
                    hello
                  </div>

                  <div className="mb-6 text-center">
                    <Link to="/Goal">
                      <button
                        className="text-xl font-extrabold bg-gradient-to-r from-red-500  to-red-900 w-full px-4 py-2 font-bold text-white  hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                        type="submit"
                      >
                        Swap
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
