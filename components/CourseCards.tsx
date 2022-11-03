import React from "react";

const CourseCards = () => {
  return (
    <div className="grid w-full grid-cols-1 place-items-center gap-y-6 pt-6 lg:grid-cols-2 xl:grid-cols-3">
      <div className="h-80 w-80 overflow-hidden rounded-md border border-gray-300 hover:shadow-md md:w-96">
        <div className="h-3/6 bg-blue-600 p-4">
          <div className="truncate py-2 font-inter text-2xl font-semibold text-white">
            Course : Hands On Python
          </div>
          <div className="font-inter text-sm text-gray-200">
            Course Code : 201
          </div>
          <div className="font-inter text-sm text-gray-200">
            Course Instructor : Sakkurthi Sashank
          </div>
          <div className="font-inter text-sm text-gray-200">Year : 2022</div>
          <div className="font-inter text-sm text-gray-200">Batch : 2021</div>
        </div>
        <div className="h-2/6 space-y-2 p-4">
          <div className="rounded-sm text-center font-roboto text-blue-800 ring-1 ring-blue-800">
            Questions : 40
          </div>
          <div className="rounded-sm text-center font-roboto text-green-700 ring-1 ring-green-700">
            Completed : 40
          </div>
        </div>
        <div className="h-1/3 w-full p-2">
          <button className="w-full rounded-md bg-blue-600 py-1.5 font-inter text-base font-normal text-white">
            Open
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseCards;
