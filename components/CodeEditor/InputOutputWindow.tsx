import React from "react";
import { CodeEditorContext } from "../../context/CodeEditorContext";

export const InputOutputWindow = () => {
  const context = React.useContext(CodeEditorContext);

  const { setCustomInput, outputDetails } = context!;

  return (
    <div className="h-full w-full space-y-3">
      <div className="rounded-md border border-gray-300 shadow-md">
        <div className=" border-b border-gray-300 py-1  px-2 font-inter text-lg font-medium text-gray-600">
          Input :
        </div>
        <textarea
          onChange={(e) => {
            setCustomInput(e.target.value);
          }}
          className="text-md h-56 w-full bg-white p-1 text-gray-700 focus:border-0 focus:outline-none"
        />
      </div>
      <div className="rounded-md border border-gray-300 shadow-md">
        <div className="border-b border-gray-300 py-1  px-2 font-inter text-lg font-medium text-gray-600">
          Output :
        </div>
        <div className="text-md h-72 w-full bg-white p-1 text-gray-700 focus:border-0 focus:outline-none">
          {outputDetails.stdout}
        </div>
      </div>
    </div>
  );
};

export default InputOutputWindow;
