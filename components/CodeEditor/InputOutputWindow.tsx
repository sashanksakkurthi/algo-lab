import { useCodeEditorStore } from "../../store/CodeEditorStore";

import React from "react";

export const InputOutputWindow = () => {
  return (
    <>
      <OutputBox />
      <InputBox />
    </>
  );
};

export const OutputBox = () => {
  const stdout = useCodeEditorStore((state) => state.stdout);
  return (
    <div className="space-y-1 pt-1">
      <div className="text-lg font-semibold text-gray-700">Output :</div>
      <textarea
        defaultValue={stdout}
        className="h-60 w-full rounded-md border border-gray-300 bg-gray-800 p-2 font-inter text-sm font-normal text-green-600 focus:outline-none"
      />
    </div>
  );
};

export const InputBox = () => {
  const setStdin = useCodeEditorStore((state) => state.setStdin);
  return (
    <div className="space-y-1 pt-1">
      <div className="text-lg font-semibold text-gray-700">Input :</div>
      <textarea
        onChange={(e) => setStdin(e.target.value)}
        className="h-40 w-full rounded-md border border-gray-300 p-2 font-inter text-sm font-medium text-gray-700 focus:outline-none"
      />
    </div>
  );
};
