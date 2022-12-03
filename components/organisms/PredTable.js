import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import axios from "axios";

import { useGlobalState } from "../../global_state";
import Link from "next/link";

function PredictionMatchRow({ fixture }) {
  const router = useRouter();
  const [{ user, match }] = useGlobalState();
  const active =
    user?.premium && new Date().getTime() < new Date(user?.premium).getTime();
  console.log(fixture);
  const handleClick = (item) => {
    if (active) router.push("/match/" + item.fixture.id);
    else router.push("/subscription");
  };
  const pred = match[fixture.fixture.id]?.predictions;
  if (!pred) return null;
  return (
    <tr
      onClick={() => handleClick(fixture)}
      className={
        "cursor-pointer " +
        (!active
          ? "bg-[url('/lock.png')] bg-[length:40px_50px] bg-center bg-no-repeat blur-sm"
          : "")
      }
    >
      <td className="flex flex-wrap space-x-4 p-2 ">
        <div className="data ">
          <div>{fixture.fixture.date}</div>
          <div className="bg-green-500 text-white"> preview</div>
          <div>00.15 </div>
        </div>
        <div>
          <a>
            <div className="data flex flex-col space-y-4">
              <div className="home flex flex-wrap ">
                <div>{fixture.teams.home.name}</div>
              </div>

              <div className="away flex flex-wrap">
                <div>{fixture.teams.away.name}</div>
              </div>
            </div>
          </a>
        </div>
      </td>
      <td className="text-center text-green-500">
        {pred.predictions?.winner?.name}
      </td>
      <td className="text-center">{pred.predictions?.under_over}</td>
      <td className="text-center">{pred.predictions?.goals.home}</td>
      <td className="text-center">{pred.predictions?.goals.away}</td>
     
    </tr>
  );
}
const PredTable = (props) => {
  console.log(props);
  return (
    <table className=" mx-auto w-full bg-white  text-xs xl:w-2/5">
      <tr className="bg-slate-100">
        <th className="flex flex-col space-x-2 p-2 font-light">
          <div className="flex">
            <div className="self-center">{props.item.country}</div>
          </div>
          <div className="  text-left">{props.item.name}</div>
        </th>
        <th className=" p-2 font-light">Win or Draw</th>
        <th className="p-2 font-light">Under/Over</th>
        <th className="p-2 font-light">Goals Home</th>
        <th className=" p-2 font-light">Goals Away</th>
       
      </tr>

      {props.fixtures.map((item, i) => {
        return <PredictionMatchRow fixture={item} />;
      })}
    </table>
  );
};

export default PredTable;
