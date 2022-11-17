import React from "react";

const PlayerTitle = ({ player }) => {
  // console.log(player);
  return (
    <div className="mx-auto flex  w-full justify-between bg-indigo-600 xl:w-2/3">
      <div>
        <img src={player.photo} alt="" />
      </div>
      <div>
        <h1 className="m-2 text-4xl text-white">{player.name}</h1>
        <h1 className="m-2 text-2xl text-white">
          <span>{player.firstname} </span> <span>{player.lastname}</span>{" "}
        </h1>
        <h1 className="text-1xl m-2 text-white">
          <span>
            {player.age} / {player.height} / {player.weight}
          </span>
        </h1>
      </div>
      <div className="w-1/5 bg-indigo-800 p-4 text-white">
        <div>
          <h1 className="text-1xl m-2 font-bold">{player.birth.date}</h1>
          <h1 className="text-1xl m-2 font-bold">{player.birth.place}</h1>
          <h1 className="text-1xl m-2 font-bold">{player.birth.country}</h1>
        </div>
      </div>
    </div>
  );
};

export default PlayerTitle;
