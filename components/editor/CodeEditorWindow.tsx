import React from "react";
import Editor from "@monaco-editor/react";

const CodeEditorWindow = () => {
  const [value, setValue] = React.useState("");

  const handleEditorChange = (value: string | undefined) => {
    setValue(value!);
  };

  return (
    <div className="h-full w-full overflow-hidden rounded-md">
      <Editor
        language={"c"}
        height={"90vh"}
        width={`100%`}
        value={value}
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

export default CodeEditorWindow;
