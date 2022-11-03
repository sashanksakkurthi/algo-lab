import React from "react";
import { useCodeEditorStore } from "../store/CodeEditorStore";

export const InputOutputWindow = () => {
  const { outputDetails, setCustomInput } = useCodeEditorStore((state) => ({
    outputDetails: state.outputDetails,
    setCustomInput: state.setCustomInput,
  }));

  const getOutput = () => {
    let statusId = outputDetails?.status.id;

    switch (statusId) {
      case 3:
        return (
          <pre className="px-2 py-1 text-xs font-normal text-green-500">
            {atob(outputDetails.stdout) !== null
              ? `${atob(outputDetails.stdout)}`
              : null}
          </pre>
        );
      case 5:
        return (
          <pre className="px-2 py-1 text-xs font-normal text-red-500">
            {`Time Limit Exceeded`}
          </pre>
        );
      case 6:
        return (
          <pre className="px-2 py-1 text-xs font-normal text-red-500">
            {atob(outputDetails?.compile_output)}
          </pre>
        );

      default:
        return (
          <pre className="px-2 py-1 text-xs font-normal text-red-500">
            {atob(outputDetails?.stderr)}
          </pre>
        );
    }
  };

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
        <div className="h-72 w-full bg-white p-1 focus:border-0 focus:outline-none">
          {getOutput()}
        </div>
      </div>
    </div>
  );
};
