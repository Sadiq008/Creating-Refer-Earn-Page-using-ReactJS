import { useState } from "react";
import HatLogo from "../assets/hat.png";

function ReferralBenefits() {
  const [isEnrolled, setIsEnrolled] = useState(false);

  const handleToggle = () => {
    setIsEnrolled(!isEnrolled);
  };

  return (
    <div className="flex flex-col -mt-40 space-x-5">
      <h1 className="flex flex-row justify-center items-center text-xl font-bold">
        What Are The
        <span className="text-blue-700 text-xl font-bold pl-2">
          Referral Benefits?
        </span>
      </h1>

      <div className="flex justify-end pt-20 pr-10">
        <label className="inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            checked={isEnrolled}
            onChange={handleToggle}
            className="sr-only peer"
          />
          <span className="mr-3 text-sm font-medium text-gray-900 dark:text-gray-300 border-blue-400">
            {isEnrolled ? "Enrolled" : "Not Enrolled"}
          </span>
          <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
        </label>
      </div>

      <div className="flex flex-row px-10 py-10">
        <div className="flex flex-col mt-8 pt-10">
          <button
            className="bg-blue-700 text-white rounded flex items-center pl-4 space-x-40"
            style={{ width: "320px", height: "50px" }}
          >
            <span>ALL PROGRAMS</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
          <br />
          <button
            className="bg-slate-100 rounded flex items-center pl-3 space-x-24"
            style={{ width: "320px", height: "50px" }}
          >
            <span>PRODUCT MANAGEMENT</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
          <br />
          <button
            className="bg-slate-100 rounded flex items-center pl-3 space-x-24"
            style={{ width: "320px", height: "50px" }}
          >
            <span>STRATEGY & LEADERSHIP</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
          <br />
          <button
            className="bg-slate-100 rounded flex items-center pl-3 space-x-24"
            style={{ width: "320px", height: "50px" }}
          >
            <span>BUSINESS MANAGEMENT</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
          <br />
          <button
            className="bg-slate-100 rounded flex items-center pl-3 pr-1 space-x-53"
            style={{ width: "320px", height: "50px" }}
          >
            <span>FINTECH</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6 ml-auto"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
          <br />
          <button
            className="bg-slate-100 rounded flex items-center pl-3 pr-1 space-x-28"
            style={{ width: "320px", height: "50px" }}
          >
            <span>SENIOR MANAGEMENT</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
          <br />
          <button
            className="bg-slate-100 rounded flex items-center pl-3 space-x-44"
            style={{ width: "320px", height: "50px" }}
          >
            <span>DATA SCIENCE</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
          <br />
          <button
            className="bg-slate-100 rounded flex items-center pl-3 space-x-20"
            style={{ width: "320px", height: "50px" }}
          >
            <span>DIGITAL TRANSFORMATION</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
          <br />
          <button
            className="bg-slate-100 rounded flex items-center pl-3 space-x-32"
            style={{ width: "320px", height: "50px" }}
          >
            <span>BUSINESS ANALYTICS</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
          <br />
        </div>
        <div class="flex flex-col pl-14 mt-8 pt-10 text-xl">
          <div class="flex flex-row">
            <div className="flex flex-col">
              <h1 class="w-921 bg-blue-500 bg-opacity-35 rounded-tl-14 rounded-tr-0 pt-5 pb-8 pl-6 pr-80 text-blue-800 font-bold border-1 rounded">
                Programs
              </h1>
              <p className="flex items-center px-3 overflow-y-auto pb-8 pt-2">
                <img src={HatLogo} alt="hat" className="mr-2 pb-4" />
                <span className="flex-1 pt-2">
                  Professional Certificate Program in Product Manager
                </span>
              </p>
              <p className="flex items-center px-3 overflow-y-auto pb-8">
                <img src={HatLogo} alt="hat" className="mr-2 pb-4" />
                <span className="flex-1 pt-2">
                  PG Certificate Program in Strategic Product Management
                </span>
              </p>
              <p className="flex items-center px-3 overflow-y-auto pb-8">
                <img src={HatLogo} alt="hat" className="mr-2 pb-4" />
                <span className="flex-1 pt-2">
                  Executive Program in Data Driven Product Management
                </span>
              </p>
              <p className="flex items-center px-3 overflow-y-auto pb-8">
                <img src={HatLogo} alt="hat" className="mr-2 pb-3" />
                <span className="flex-1 pt-2">
                  Executive Program in Product Management and Digital
                  Transformation
                </span>
              </p>
              <p className="flex items-center px-3 overflow-y-auto pb-8">
                <img src={HatLogo} alt="hat" className="mr-2 pt-3" />
                <span className="flex-1 pt-2">
                  Executive Program in Product Management
                </span>
              </p>
              <p className="flex items-center px-3 overflow-y-auto pb-8">
                <img src={HatLogo} alt="hat" className="mr-2 pt-3" />
                <span className="flex-1 pt-2">
                  Advanced Certification in Product Management
                </span>
              </p>
              <p className="flex items-center px-3 overflow-y-auto pb-8">
                <img src={HatLogo} alt="hat" className="mr-2 pb-3" />
                <span className="flex-1 pt-2">
                  Executive Program in Product Management and Project Management
                </span>
              </p>
            </div>

            <div className="flex flex-col">
              <h1 class="w-921 bg-blue-500 bg-opacity-35 rounded-tl-0 rounded-tr-0 py-3 pl-8 pr-16 text-blue-800 font-bold border-l-2 border-blue-500 rounded text-center">
                Referrer Bonus
              </h1>
              <p className="px-4 overflow-y-auto text-center pt-4 pb-2">
                ₹ 7,000
              </p>
              <p className="px-4 overflow-y-auto text-center pt-16">₹ 9,000</p>
              <p className="px-4 overflow-y-auto text-center pt-16 pb-4">
                ₹ 10,000
              </p>
              <p className="px-4 overflow-y-auto text-center pt-14 pb-3">
                ₹ 10,000
              </p>
              <p className="px-4 overflow-y-auto text-center pt-14 pb-2">
                ₹ 10,000
              </p>
              <p className="px-4 overflow-y-auto text-center pt-8 pb-2">
                ₹ 10,000
              </p>
              <p className="px-4 overflow-y-auto text-center pt-8 pb-2">
                ₹ 10,000
              </p>
            </div>

            <div className="flex flex-col">
              <h1 class="w-921 bg-blue-500 bg-opacity-35 rounded-tl-0 rounded-tr-14 py-3 pl-8 pr-16 text-blue-800 font-bold  border-l-2 border-blue-500 rounded text-center">
                Referee Bonus
              </h1>
              <p className="px-4 overflow-y-auto text-center pt-4 pb-2">
                ₹ 9,000
              </p>
              <p className="px-4 overflow-y-auto text-center pt-16">₹ 11,000</p>
              <p className="px-4 overflow-y-auto text-center pt-16 pb-4">
                ₹ 10,000
              </p>
              <p className="px-4 overflow-y-auto text-center pt-14 pb-3">
                ₹ 10,000
              </p>
              <p className="px-4 overflow-y-auto text-center pt-14 pb-2">
                ₹ 10,000
              </p>
              <p className="px-4 overflow-y-auto text-center pt-8 pb-2">
                ₹ 10,000
              </p>
              <p className="px-4 overflow-y-auto text-center pt-8 pb-2">
                ₹ 10,000
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center pt-20">
        <button
          className="bg-blue-700 text-white rounded text-xl"
          style={{ width: "236px", height: "64px" }}
        >
          Refer Now
        </button>
      </div>
    </div>
  );
}

export default ReferralBenefits;
