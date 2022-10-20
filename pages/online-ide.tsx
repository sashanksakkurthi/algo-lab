import React from "react";
import CodeEditorWindow from "../components/editor/CodeEditorWindow";
import CompilerButtons from "../components/editor/CompilerButtons";
import OutputBox from "../components/editor/OutputBox";
import NavBar from "../components/navbar/NavBar";

const OnlineIde = () => {
  return (
    <div className="w-full">
      <div className="">
        <NavBar />
      </div>
      <div className="z-0 flex h-full w-full flex-col space-x-0 px-2 pt-2 md:flex-row md:space-x-2">
        <div className="flex h-full  w-full md:w-4/6">
          <CodeEditorWindow />
        </div>
        <div className="flex w-full flex-col space-y-2 py-2 md:w-2/6">
          <OutputBox />
          <CompilerButtons />
        </div>
      </div>
    </div>
  );
};

export default OnlineIde;
