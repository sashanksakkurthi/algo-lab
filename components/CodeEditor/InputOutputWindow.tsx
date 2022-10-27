import React from "react";
import { CodeEditorContext } from "../../context/CodeEditorContext";

export const InputOutputWindow = () => {
  const context = React.useContext(CodeEditorContext!);

  const { setCustomInput, outputDetails } = context!;
  return (
    <div className="h-full w-full space-y-3">
      <div className="rounded-sm border border-neutral-700">
        <div className=" border-b border-neutral-700 py-2 px-2  font-inter text-lg font-medium text-gray-300">
          Input :
        </div>
        <textarea
          onChange={(e) => {
            setCustomInput(e.target.value);
          }}
          className="text-md h-56 w-full bg-neutral-900 p-1 font-inter font-medium  text-gray-200 shadow-md focus:border-0 focus:outline-none"
        />
      </div>
      <div className="rounded-sm border border-neutral-700">
        <div className="border-b border-neutral-700 py-2 px-2 font-inter text-lg font-medium text-gray-300">
          Output :
        </div>
        <textarea
          defaultValue={outputDetails.stdout}
          className="text-md text-md h-72 w-full bg-neutral-900 p-1 font-inter  font-medium text-gray-200 shadow-md focus:border-0 focus:outline-none"
        />
      </div>
    </div>
  );
};

export default InputOutputWindow;
