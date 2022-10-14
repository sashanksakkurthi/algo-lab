import React from "react";

const CourseCard: React.FC<{}> = ({}) => {
  return (
    <div className="mt-20 grid w-full grid-cols-1 place-items-center content-start gap-6 md:grid-cols-2 xl:grid-cols-4">
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
};

const Card = () => {
  return (
    <a
      href=""
      className="h-60 w-80 rounded-md border border-gray-300 hover:shadow-lg"
    ></a>
  );
};
export default CourseCard;
