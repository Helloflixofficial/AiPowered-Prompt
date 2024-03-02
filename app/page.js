import React from "react";
import { Feed } from "./components/Feed";
const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        WELCOME TO
        <br className="max-md:hidden" />
        <span className="orange_gradient">The Best Ai-Powered Prompt</span>
      </h1>
      <p>
        WEBSITE FOR SEARCH AI RESULT AND ALSO ITS FREE FOR SO MANY USERS EASY To
        UNDERSTAND
      </p>
      <Feed />
    </section>
  );
};

// https://youtu.be/ALyO4vA7sKU
// https://youtu.be/hrZ_IbE0GFs
// https://hackermovie.club/
export default Home;
