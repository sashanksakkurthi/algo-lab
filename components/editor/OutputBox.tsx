import React from "react";

const OutputBox = () => {
  return (
    <div className="h-full w-full">
      <textarea
        className="h-96 w-full rounded-md border border-gray-300 p-2 font-inter font-medium text-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-400 md:h-full"
        placeholder="Output"
      />
    </div>
  );
};

export default OutputBox;
