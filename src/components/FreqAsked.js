function FreqAsked() {
  return (
    <div className="flex flex-col justify-center">
      <main className="mt-40 pt-20 text-2xl font-bold text-center">
        Frequently Asked <span className="text-blue-700">Questions</span>
      </main>
      <div className="flex flex-row">
        <div className="flex flex-col">
          <h1 className="ml-3 pl-32 mt-40 text-blue-700 text-xl font-semibold">
            Eligibility
          </h1>
          <div className="flex justify-center items-center pl-14 pt-10">
            <p className="border border-gray-500 py-5 px-20 rounded-md text-gray-700 font-semibold">
              How To Use?
            </p>
          </div>
          <div className="flex justify-center items-center pl-14 pt-10">
            <p className="border border-gray-500 py-5 px-20 rounded-md text-gray-700 font-semibold">
              Terms & Conditions
            </p>
          </div>
        </div>
        <div className="ml-40 pt-40">
          <h1 className=" text-blue-700 font-semibold overflow-y-auto">
            Do I need to have prior Product Management and Project Management
            experience to enroll in the program?
          </h1>
          <p className="overflow-y-auto pt-10">
            No, the program is designed to be inclusive of all levels of
            experience. All topics will be covered from the basics, making it
            suitable for individuals from any field of work.
          </p>
          <p className="overflow-y-auto pt-20 text-xl font-semibold flex items-center">
            What is the minimum system configuration required?
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-6 ml-72"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              />
            </svg>
          </p>
        </div>
      </div>
    </div>
  );
}

export default FreqAsked;
