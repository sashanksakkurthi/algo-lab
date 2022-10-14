import React from "react";
import CourseCard from "../components/courses/CourseCard";
import NavBar from "../components/navbar/NavBar";

const HomePage: React.FC<{}> = (props) => {
  return (
    <div className="h-screen w-screen">
      <NavBar />
      <CourseCard />
    </div>
  );
};

export default HomePage;
