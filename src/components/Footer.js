import FooterLogo from "../assets/footer logo.png";
import Facebook from "./images/facebook.png";
import linkedIn from "./images/likedin.png";
import Twitter from "./images/twitter.png";
import instagram from "./images/insta.png";
import youtube from "./images/youtube.png";

import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="flex flex-col bg-customGray -mr-3">
      <div className="px-52 pt-8 flex flex-row space-x-96">
        <img
          src={FooterLogo}
          alt="Footer logo"
          style={{ width: "160px", height: "50px" }}
        />
        <div className="flex flex-col">
          <button className="text-white ml-20 bg-blue-600 py-2 px-8 rounded-lg flex justify-center items-center border border-blue-300">
            Schedule 1-on-1 Call Now
          </button>
          <p className="text-white ml-20 pl-3">
            Speak with our Learning Advisor
          </p>
        </div>
      </div>
      <div className="border-white border-t-2 mx-36 mt-10 px-8 py-8">
        <div className="flex flex-row">
          <div className="flex flex-col">
            <h1 className="text-white text-xl pb-4">Programs</h1>
            <p className="text-white pb-4">
              Data Science & AI{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="inline-block w-6 h-6 ml-16 pl-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
            </p>
            <p className="text-white pb-4">
              Product Management{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="inline-block w-6 h-6 ml-9 pl-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
            </p>
            <p className="text-white pb-4">
              Business Analytics{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="inline-block w-6 h-6 ml-16 pl-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
            </p>
            <p className="text-white pb-4">
              Digital Transformation{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="inline-block w-6 h-6 ml-8 pl-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
            </p>
            <p className="text-white pb-4">
              Business Management{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="inline-block w-6 h-6 ml-7 pl-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
            </p>
            <p className="text-white pb-4">
              Project Management{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="inline-block w-6 h-6 ml-10 pl-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
            </p>
            <p className="text-white pb-4">
              Strategy & Leadership{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="inline-block w-6 h-6 ml-7 pl-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
            </p>
            <p className="text-white pb-4">
              Senior Management{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="inline-block w-6 h-6 ml-10 pl-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
            </p>
            <p className="text-white pb-4 ">
              Fintech{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="inline-block w-6 h-6 ml-32 pl-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
            </p>
          </div>
          <div className="flex flex-col ml-16">
            <h1 className="text-white text-xl">Contact Us</h1>
            <div className="flex flex-col text-white pt-5 space-y-3">
              <p>
                Email us (For Data Science Queries): admissions@accredian.com
              </p>
              <p>Email us (For Product Management Queries):pm@accredian.com</p>
              <p>
                Data Science Admission Helpline:+91 9079653292 (9 AM - 7 PM)
              </p>
              <p>Product Management Admission Helpline:+91 9625811095</p>
              <p>Enrolled Student Helpline: +91 7969322507</p>
              <p>
                Office Address: 4th Floor, 250, Phase IV, Udyog Vihar, Sector
                18,
              </p>
              <p>Gurugram, Haryana 122015</p>
              <h3 className="text-xl">Why Accredian</h3>
              <h3 className="text-xl">Follow Us</h3>
            </div>
            <div className="flex flex-row space-x-4 mt-2">
              <Link to={"https://www.facebook.com/insaidlearn"}>
                <img src={Facebook} alt="facebook logo" />
              </Link>
              <Link to={"https://www.linkedin.com/school/insaid/"}>
                <img src={linkedIn} alt="linkedin logo" />
              </Link>
              <Link to={"https://x.com/insaidlearn"}>
                <img src={Twitter} alt="Twitter logo" />
              </Link>
              <Link to={"https://www.instagram.com/insaid.learn/"}>
                <img src={instagram} alt="Instagram logo" />
              </Link>
              <Link
                to={"https://www.youtube.com/channel/UCE0L_4ADPU2iyKnDJ0xRzyA"}
              >
                <img src={youtube} alt="Youtube logo" />
              </Link>
            </div>
          </div>
          <div className="flex flex-col space-y-1 text-white ml-36">
            <h1 className="text-xl">Accredian</h1>
            <div className="pt-4 space-y-3">
              <Link to={"https://accredian.com/About"}>
                <p>About</p>
              </Link>
              <Link to={"https://accredian.com/Career"}>
                <p>Career</p>
              </Link>
              <Link
                to={
                  "https://blog.accredian.com/?_gl=1%2A1fylajo%2A_gcl_aw%2AR0NMLjE3MjAyNzczOTMuRUFJYUlRb2JDaE1Jbm8yZmstS1Bod01WQjZWbUFoMlB5QVVTRUFBWUFTQUFFZ0w1eFBEX0J3RQ..%2A_gcl_au%2AMTU3Njg4NTA1Ny4xNzIwMTcwODIz%2A_ga%2AMTIwMDA0MzQyMC4xNzIwMTcwODIz%2A_ga_SWCZ0464KL%2AMTcyMDI3NTk0Mi40LjEuMTcyMDI3Nzc3MC42MC4wLjA."
                }
              >
                <p>Blog</p>
              </Link>
              <Link to={"https://accredian.com/policies/accredian-policy"}>
                <p>Admission Policy</p>
              </Link>
              <Link to={"https://accredian.com/terms/referral"}>
                <p>Referral Policy</p>
              </Link>
              <Link to={"https://accredian.com/terms/privacy"}>
                <p>Privacy Policy</p>
              </Link>
              <Link to={"https://accredian.com/terms"}>
                <p>Terms Of Service</p>
              </Link>
              <Link to={"https://accredian.com/Faq"}>
                <p>Master FAQS</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <footer className="text-white mt-10 pb-20">
          © 2024 Accredian A Brand of FullStack Education Pvt Ltd. All Rights
          Reserved
        </footer>
      </div>
    </div>
  );
}

export default Footer;
