import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="flex flex-row justify-center mt-5">
      <p className="font-semibold">
        Navigate your ideal career path with tailored expert advice
      </p>
      <span>
        <Link to={"/contacts"} className="text-blue-600 ml-3">
          Contact Expert
        </Link>
      </span>
    </div>
  );
}

export default Header;
