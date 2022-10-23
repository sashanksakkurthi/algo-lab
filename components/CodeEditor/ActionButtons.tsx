import React from "react";
import { useCodeEditorStore } from "../../store/CodeEditorStore";
import { OnSubmitCode } from "../../util/CodeSubmission";

export const CompilerButtons = () => {
  const { sourceCode, language, setStdout, stdin } = useCodeEditorStore(
    (state) => ({
      sourceCode: state.sourceCode,
      language: state.language.id,
      setStdout: state.setStdout,
      stdin: state.stdin,
    })
  );

  return (
    <button
      className="w-52 rounded-md bg-blue-600 py-2 font-inter font-medium text-white hover:bg-blue-700"
      onClick={() => {
        OnSubmitCode({ language, sourceCode, setStdout, stdin });
      }}
    >
      Compile Run
    </button>
  );
};
