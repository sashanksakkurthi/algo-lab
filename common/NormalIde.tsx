import React from "react";
import { CompilerButtons } from "../components/CodeEditor/ActionButtons";
import { CodeEditorWindow } from "../components/CodeEditor/CodeEditorWindow";
import { InputOutputWindow } from "../components/CodeEditor/InputOutputWindow";
import { SelectLanguage } from "../components/CodeEditor/SelectLanguage";

export const NormalIde = () => {
  return (
    <div className="flex h-full w-full flex-col space-y-1 space-x-0 p-1 md:flex-row md:space-y-0 md:space-x-1">
      <div className="flex h-full w-full flex-col space-y-2 p-3 md:w-4/6">
        <CodeEditorWindow />
      </div>
      <div className="flex w-full flex-col space-y-1 p-2 pb-4 md:w-2/6">
        <div className="p-1">
          <SelectLanguage />
        </div>
        <InputOutputWindow />
        <CompilerButtons />
      </div>
    </div>
  );
};
