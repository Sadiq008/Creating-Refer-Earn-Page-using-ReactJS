import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

function Navbar() {
  return (
    <div>
      <div className="flex flex-row justify-between items-center py-2.5 w-[1360px] max-w-[1360px] h-[60px] min-h-[60px] mx-auto mt-20 px-16">
        <div className="flex flex-row items-center gap-8 w-[560px] h-[40px] mx-auto">
          <Link to={"https://accredian.com/About"}>
            <img
              className="w-[125px] h-[36.66px]"
              src={logo}
              alt="company logo"
            />
          </Link>
          <div className="flex flex-col items-start p-0 w-[116px] h-[40px]">
            <button className="flex flex-row items-center px-[18px] py-[8px] gap-[4px] w-[116px] h-[40px] bg-[#1A73E8] rounded-[6px]">
              <div className="flex items-center text-center w-[60px] h-[24px] font-inter font-medium text-[14.875px] leading-[24px] text-white">
                Courses
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-4 h-4 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m19.5 8.25-7.5 7.5-7.5-7.5"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="flex flex-row justify-end items-center gap-8 w-[800px] h-[40px] mx-auto">
          <div className="flex flex-col items-start p-0 w-[87px] h-[24px]">
            <p className="w-[87px] h-[24px] font-inter font-medium text-[14.75px] leading-[24px] text-[#1A202C] capitalize">
              Refer & Earn
            </p>
          </div>
          <div className="flex flex-row items-center gap-8 w-[173px] h-[24px]">
            <div className="flex flex-col items-start p-0 w-[74px] h-[24px]">
              <p className="w-[74px] h-[24px] font-inter font-medium text-[14.75px] leading-[24px] text-[#1A202C] capitalize">
                Resources
              </p>
            </div>
            <div className="flex flex-col items-start p-0 w-[67px] h-[24px]">
              <p className="w-[67px] h-[24px] font-inter font-medium text-[15px] leading-[24px] text-[#1A202C] capitalize">
                About Us
              </p>
            </div>
          </div>
          <div className="flex flex-row items-center gap-4 w-[208.01px] h-[40px]">
            <div className="flex flex-col items-start p-0 w-[77px] h-[40px]">
              <button className="flex flex-row items-center px-[18px] py-[8px] w-[77px] h-[40px] bg-[rgba(148,163,184,0.2)] rounded-[6px]">
                <div className="flex items-center text-center w-[41px] h-[24px] font-inter font-medium text-[15.25px] leading-[24px] text-[#1A202C]">
                  Login
                </div>
              </button>
            </div>
            <div className="flex flex-col items-start p-0 w-[115px] h-[40px]">
              <button className="flex flex-row items-center px-[18px] py-[8px] w-[115px] h-[40px] bg-[#1A73E8] rounded-[6px] text-white">
                <div className="flex items-center text-center w-[79px] h-[24px] font-inter font-medium text-[14.75px] leading-[24px] text-white">
                  Try for free
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
