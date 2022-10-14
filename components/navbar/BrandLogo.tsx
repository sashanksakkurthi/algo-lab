import React from "react";
import MenuButton from "./MenuButton";

const BrandLogo: React.FC<{}> = () => {
  return (
    <div className="flex items-center">
      <MenuButton />
      <div className="font-signika text-3xl font-bold text-indigo-600">
        AlgoLab
      </div>
    </div>
  );
};

export default BrandLogo;
