import React from "react";
import Typed from "react-typed";

const Hero = () => {
  return (
    <div>
      <div className=" bg-slate-400 w-full h-screen mx-auto text-center flex flex-col justify-center">
        <p className="text-red-400	font-bold p-2">Being Software Developer</p>
        <h1 classaname="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">
          Building my future
        </h1>
        <div className="flex justify-center items-center">
          <p className="md:text-5xl sm:text-4xl text-xl font-bold pl-2">
            texto ramdon
          </p>
          <Typed
            strings={["BTB", "BTC", "SASS"]}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
