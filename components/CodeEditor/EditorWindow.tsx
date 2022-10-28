import Editor from "@monaco-editor/react";
import React from "react";
import { CodeEditorContext } from "../../context/CodeEditorContext";

export const EditorWindow: React.FC = () => {
  const context = React.useContext(CodeEditorContext);

  const { sourceCode, setSourceCode, compilerLanguage } = context!;

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
