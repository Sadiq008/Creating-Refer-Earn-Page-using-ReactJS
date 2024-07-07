import SupportLogo from "../assets/support.png";

function Support() {
  return (
    <div className="bg-white p-40">
      <div className="flex flex-row mt-40 py-16 px-10 bg-blue-600 rounded-xl space-x-8">
        <img
          src={SupportLogo}
          alt="support logo"
          className="border-4 border-blue-400 rounded-2xl -mt-1"
        />
        <div className="flex flex-col">
          <h1 className="text-white text-3xl">
            Want to delve deeper into the program?
          </h1>
          <p className="text-white">
            Share your details to receive expert insights from our program team!
          </p>
        </div>
        <div className="flex flex-row">
          <button className="flex items-center justify-between w-50 h-14 bg-white px-4 rounded-lg text-blue-600 text-xl ml-20 -pr-1 mt-5">
            Get in touch
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Support;
