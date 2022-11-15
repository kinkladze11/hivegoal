import React from "react";

const Tab = (props) => {
  return (
    <div className="text-1xl m-auto w-full bg-gradient-to-r from-black   to-gray-100 text-center text-white xl:w-2/5">
      <h1>{props.name}</h1>
    </div>
  );
};

export default Tab;
