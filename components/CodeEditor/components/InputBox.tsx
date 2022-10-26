import { useContext } from "react";
import { CodeEditorContext } from "../../../context/CodeEditorContext";

export const InputBox: React.FC<{}> = () => {
  const context = useContext(CodeEditorContext);

  if (!context) return null;
  const { setCustomInput } = context;

  return (
    <div className="space-y-1 pt-1">
      <div className="font-roboto text-lg font-medium text-gray-700">
        Input :
      </div>
      <textarea
        onChange={(e) => {
          setCustomInput(e.target.value);
        }}
        className="text-md h-40 w-full rounded-md border border-gray-300 p-2 font-inter font-medium  text-gray-700 shadow-md focus:border-0 focus:outline-none focus:ring-1 focus:ring-gray-500"
      />
    </div>
  );
};
