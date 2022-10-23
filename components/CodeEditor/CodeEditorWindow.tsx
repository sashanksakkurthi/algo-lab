import Editor from "@monaco-editor/react";
import { useCodeEditorStore } from "../../store/CodeEditorStore";

export const CodeEditorWindow = () => {
  const { sourceCode, setSourceCode, language } = useCodeEditorStore(
    (state) => ({
      sourceCode: state.sourceCode,
      setSourceCode: state.setSourceCode,
      language: state.language,
    })
  );

  const handleEditorChange = (sourceCode: string | undefined) => {
    setSourceCode(sourceCode!);
  };

  return (
    <div className="z-0 h-full w-full overflow-hidden rounded-md">
      <Editor
        language={language.language}
        height={"88vh"}
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
