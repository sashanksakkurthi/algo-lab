import React from "react";
import { CodeEditorWindow } from "./components/CodeEditorWindow";
import { CompilerButtons } from "./components/CompileButtons";
import { InputBox } from "./components/InputBox";
import { OutputBox } from "./components/OutputBox";
import { SelectLanguage } from "./components/SelectLanguage";
import { CodeEditorContext } from "../../context/CodeEditorContext";
import { Language } from "../../data/CodeEditorData";

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
      <div className="flex h-full w-full flex-col space-y-1 space-x-0 p-1 md:flex-row md:space-y-0 md:space-x-1">
        <div className="h-full w-full p-3 md:w-4/6">
          <CodeEditorWindow />
        </div>
        <div className="flex w-full flex-col space-y-2 p-2 md:w-2/6">
          <SelectLanguage />
          <OutputBox />
          <InputBox />
          <CompilerButtons />
        </div>
      </div>
    </CodeEditorContext.Provider>
  );
};
