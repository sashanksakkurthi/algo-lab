import type { NextPage } from "next";
import { NavBar } from "../common/NavBar";

const Home: NextPage = () => {
  return (
    <div className="h-screen w-screen">
      <NavBar />
    </div>
  );
};

export default Home;
