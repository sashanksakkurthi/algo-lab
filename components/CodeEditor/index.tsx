import React from "react";
import { CodeEditorWindow } from "./CodeEditorWindow";
import { CodeEditorContext } from "../../context/CodeEditorContext";
import { Language } from "../../data/CodeEditorData";
import { InputOutputWindow } from "./InputOutputWindow";
import { BsArrowLeftShort } from "react-icons/bs";
import { CompilerButtons } from "./CompileButtons";
import { SelectLanguage } from "./SelectLanguage";

export const CodeIde = () => {
  const [sourceCode, setSourceCode] = React.useState("");
  const [compilerLanguage, setCompilerLanguage] = React.useState(Language[0]);
  const [customInput, setCustomInput] = React.useState("");
  const [outputDetails, setOutputDetails] = React.useState({ stdout: "" });
  const [compilerProcessing, setCompilerProcessing] = React.useState(false);
  const [compilerLoading, setCompilerLoading] = React.useState(false);

  return (
    <CodeEditorContext.Provider
      value={{
        sourceCode,
        setSourceCode,
        compilerLanguage,
        setCompilerLanguage,
        customInput,
        setCustomInput,
        outputDetails,
        setOutputDetails,
        compilerProcessing,
        setCompilerProcessing,
        compilerLoading,
        setCompilerLoading,
      }}
    >
      <div className="h-full w-full bg-neutral-900">
        <div className="flex h-12 w-full items-center justify-between border-b border-neutral-700 bg-neutral-900 px-2">
          <button className="text-gray-400">
            <BsArrowLeftShort size={35} />
          </button>
          <div className="flex items-center space-x-3">
            <CompilerButtons />
            <SelectLanguage />
          </div>
        </div>
        <div className="flex h-full w-full flex-col md:flex-row">
          <div className="h-full w-full p-2 md:w-8/12">
            <CodeEditorWindow />
          </div>
          <div className="flex h-full w-full flex-col p-2 md:w-4/12">
            <InputOutputWindow />
          </div>
        </div>
      </div>
    </CodeEditorContext.Provider>
  );
};
