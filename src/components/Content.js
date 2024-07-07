import ContentLogo from "../assets/content-pic.png";

function Content() {
  return (
    <div className="flex flex-row p-5">
      <div className="flex flex-col mt-20 p-20">
        <h1 className="text-5xl font-bold">Let's Learn & Earn</h1>
        <div className="mt-10">
          <h3 className="text-2xl">Get a chance to win</h3>
          <span className="text-2xl">up-to</span>
          <span className="text-blue-700 text-4xl font-bold"> Rs. 15,000</span>
          <div className="mt-16 ">
            <button className="absolute w-192 h-54 left-325 top-824 bg-blue-600 rounded-lg flex items-center justify-center text-white py-3 px-10">
              Refer Now
            </button>
          </div>
        </div>
      </div>
      <img
        style={{ height: "725px", width: "814px", top: "269px", left: "788px" }}
        src={ContentLogo}
        alt="Content"
      />
    </div>
  );
}

export default Content;
