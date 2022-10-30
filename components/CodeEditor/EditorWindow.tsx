import Editor from "@monaco-editor/react";
import React from "react";
import { useCodeEditorStore } from "../../store/CodeEditorStore";

export const EditorWindow: React.FC = () => {
  const { setSourceCode, compilerLanguage, sourceCode } = useCodeEditorStore(
    (state) => ({
      setSourceCode: state.setSourceCode,
      compilerLanguage: state.compilerLanguage,
      sourceCode: state.sourceCode,
    })
  );

  const handleEditorChange = (sourceCode: string | undefined) => {
    setSourceCode(sourceCode!);
  };

  return (
    <div className="z-0 h-full w-full overflow-hidden rounded-md">
      <Editor
        language={compilerLanguage.language}
        height={"91vh"}
        width={`100%`}
        value={sourceCode}
        theme={"vs-dark"}
        defaultValue={"// Hello world"}
        onChange={handleEditorChange}
        options={{
          fontFamily: "Roboto Mono",
          fontSize: 16,
          lineHeight: 1.5,
          cursorWidth: 1,
          minimap: { enabled: false },
          padding: { top: 10 },
        }}
      />
    </div>
  );
};
