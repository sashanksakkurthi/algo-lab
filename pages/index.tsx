import React from "react";
import { CompileButtons } from "../components/CompileButtons";
import { EditorWindow } from "../components/EditorWindow";
import { InputOutputWindow } from "../components/InputOutputWindow";
import { SelectLanguage } from "../components/SelectLanguage";

const CodeIde = () => {
  return (
    <div className="h-full w-full">
      <div className="flex h-12 w-full items-center justify-end border-b border-gray-300 px-2">
        <div className="flex items-center space-x-3">
          <CompileButtons />
          <SelectLanguage />
        </div>
      </div>
      <div className="flex h-full w-full flex-col md:flex-row">
        <div className="h-full w-full p-2 md:w-8/12">
          <EditorWindow />
        </div>
        <div className="flex h-full w-full flex-col p-2 md:w-4/12">
          <InputOutputWindow />
        </div>
      </div>
    </div>
  );
};

export default CodeIde;
