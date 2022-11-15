import React from "react";
import Link from "next/link";
const Title = (props) => {
  return (
    <div className="via-indigo-gray mx-auto flex w-full justify-between bg-gradient-to-r from-black  p-5 text-center xl:w-2/5">
      <div className="">
        <h1 className="text-3xl text-white">{props.home}</h1>
      </div>
      <span className="mt-10 text-center text-5xl text-white">VS</span>

      <div className="">
        <h1 className="text-3xl text-white">{props.away}</h1>
      </div>
    </div>
  );
};

export default Title;
