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
  console.log(fixture)
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
          <div>29.6</div>
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
      <td className="text-center">
        <div className="flex justify-between">
          <div className="border-2 border-red-600 p-1">
            {pred.comparison.def.home}
          </div>
          <div className="border-2 border-red-600 p-1">
            {pred.comparison.att.home}
          </div>
          <div className="border-2 border-red-600 p-1">
            {pred.comparison.goals.home}
          </div>
        </div>
        <div className="flex justify-between">
          <div className="p-1">DEF</div>
          <div className="p-1">MID</div>
          <div className="p-1">GOAL</div>
        </div>
        <div className="flex justify-between">
          <div className="border-2 border-red-600 p-1">
            {pred.comparison.def.away}
          </div>
          <div className="border-2 border-red-600 p-1">
            {pred.comparison.att.away}
          </div>
          <div className="border-2 border-red-600 p-1">
            {pred.comparison.goals.away}
          </div>
        </div>
      </td>
      <td className="space-y-4 text-center">
        <div className="home mx-auto w-fit border-2 border-blue-400 text-center">
          {pred.comparison.h2h.home}
        </div>
        <div className="away mx-auto w-fit border-2 border-blue-400 text-center">
          {pred.comparison.h2h.away}
        </div>
      </td>
    </tr>
  );
}
const PredTable = (props) => {
  console.log(props)
  return (
    <center>
      <table className=" w-full text-sm xl:w-2/3 ">
        <thead>
          <tr className="bg-slate-300">
            <th className="flex  flex-wrap  border-2 border-white p-2 font-light">
              <img
                src={props.item.flag}
                className="h-10 w-fit"
                alt="img"
              />
              <div>
                <div>{props.item.country}</div>
                <div>{props.item.name}</div>
              </div>
            </th>
            <th className="border border-2 border-white p-2 font-light">
              Win or Draw
            </th>
            <th className="border border-2 border-white p-2 font-light">
              Under/Over
            </th>
            <th className="border border-2 border-white p-2 font-light">
              Goals Home
            </th>
            <th className="border border-2 border-white p-2 font-light">
              Goals Away
            </th>
            <th className="border border-2 border-white p-2 font-light">
              Comparison
            </th>
            <th className="border border-2 border-white p-2 font-light">H2H</th>
          </tr>
        </thead>
        <tbody>
          {props.fixtures.map((item, i) => {
            return <PredictionMatchRow fixture={item} />;
          })}
        </tbody>
      </table>
    </center>
  );
};

export default PredTable;
