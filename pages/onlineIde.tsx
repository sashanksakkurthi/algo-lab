import React from "react";
import { NavBar } from "../components/NavBar";
import { CodeIde } from "../components/CodeEditor";

const OnlineIde = () => {
  return (
    <div className="w-full">
      <NavBar />
      <CodeIde />
    </div>
  );
};

export default OnlineIde;
