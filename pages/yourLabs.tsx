import React from "react";
import CoursesCard from "../components/Courses/CoursesCard";
import { NavBar } from "../components/NavBar";

const YourLabs = () => {
  return (
    <div className="h-screen w-screen">
      <NavBar />
      <div className="grid grid-cols-4 place-items-center pt-6">
        <CoursesCard />
        <CoursesCard />
        <CoursesCard />
        <CoursesCard />
      </div>
    </div>
  );
};

export default YourLabs;
