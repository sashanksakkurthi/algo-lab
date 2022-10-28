import React from "react";
import { BsArrowLeftShort } from "react-icons/bs";
import { useRouter } from "next/router";
import { CodeEditorContext } from "../../context/CodeEditorContext";
import { Language } from "../../data/CodeEditorData";
import { CompileButtons } from "./CompileButtons";
import { EditorWindow } from "./EditorWindow";
import InputOutputWindow from "./InputOutputWindow";
import { SelectLanguage } from "./SelectLanguage";

export const CodeIde = () => {
  const [sourceCode, setSourceCode] = React.useState("");
  const [compilerLanguage, setCompilerLanguage] = React.useState(Language[0]);
  const [customInput, setCustomInput] = React.useState("");
  const [outputDetails, setOutputDetails] = React.useState({ stdout: "" });

  const router = useRouter();

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
      }}
    >
      <div className="h-full w-full">
        <div className="flex h-12 w-full items-center justify-between border-b border-gray-300 px-2">
          <button className="text-gray-700" onClick={() => router.push("/")}>
            <BsArrowLeftShort size={35} />
          </button>
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
    </CodeEditorContext.Provider>
  );
};
