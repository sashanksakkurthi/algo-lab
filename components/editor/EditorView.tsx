import React from "react";
import Editor from "@monaco-editor/react";

const EditorView = () => {
  const [value, setValue] = React.useState("");

  const handleEditorChange = (value: string | undefined) => {
    setValue(value!);
  };
  return (
    <div>
      <Editor
        height="85vh"
        width={`100%`}
        language={"javascript"}
        value={value}
        theme={"vs-dark"}
        defaultValue="// some comment"
        onChange={handleEditorChange}
      />
    </div>
  );
};

export default EditorView;
