import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";

import { ActionTypes, useGlobalState } from "../../global_state";
import Link from "next/link";

const Lineup = ({ home, away }) => {
  return (
    <div className="grid- mx-auto grid w-full grid-cols-1 flex-wrap justify-between gap-4 xl:w-2/3 xl:grid-cols-2">
      <div className="w-full p-4">
        <div className="Title flex justify-between border-l-8  border-green-400 bg-slate-200 p-2">
          <div className="team ">
            <div className="name mr-2 inline-block text-xl">
              {home.team.name}
            </div>
            <div className="formation inline-block text-sm">
              {home.formation}
            </div>
          </div>
          <Link href={`/team/${home.team.id}`}>
            <a>
              <img src={home.team.logo} alt="" className="h-10" />
            </a>
          </Link>
        </div>

        <table className="w-full">
          <thead>
            <th className="text-left">COACH</th>
          </thead>
          <tbody>
            <tr>
              <td className=" flex justify-between">
                <img src={home.coach.photo} className=" h-10" alt="" />
                <div className=""> {home.coach.name}</div>
              </td>
            </tr>
          </tbody>
          <thead>
            <th className="text-left">START-XI</th>
          </thead>
          <tbody>
            {home.startXI.map((item, i) => {
              return (
                <tr key={i}>
                  <td className=" flex justify-between">
                    <div className="name">{item.player.number} </div>
                    <Link href={`/player/${item.player.id}`}>
                      <a>
                        <div className="number">{item.player.name}</div>
                      </a>
                    </Link>
                  </td>
                </tr>
              );
            })}
            <th className="text-left">SUBSTITUTE</th>
            {home.substitutes.map((item, i) => {
              return (
                <tr key={i}>
                  <td className="around flex justify-between">
                    <div className="name">{item.player.number} </div>
                    <Link href={`/player/${item.player.id}`}>
                      <a>
                        <div className="number">{item.player.name}</div>
                      </a>
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="w-full p-4">
        <div className="Title flex justify-between border-l-8  border-green-400 bg-slate-200 p-2">
          <div className="team ">
            <div className="name mr-2 inline-block text-xl">
              {away.team.name}
            </div>
            <div className="formation inline-block text-sm">
              {away.formation}
            </div>
          </div>
          <Link href={`/team/${away.team.id}`}>
            <a>
              <img src={away.team.logo} alt="" className="h-10" />
            </a>
          </Link>
        </div>

        <table className="w-full">
          <thead>
            <th className="text-left">COACH</th>
          </thead>
          <tbody>
            <tr>
              <td className=" flex justify-between">
                <img src={away.coach.photo} className=" h-10" alt="" />
                <div className=""> {away.coach.name}</div>
              </td>
            </tr>
          </tbody>
          <thead>
            <th className="text-left">START-XI</th>
          </thead>
          <tbody>
            {away.startXI.map((item, i) => {
              return (
                <tr key={i}>
                  <td className=" flex justify-between">
                    <div className="name">{item.player.number} </div>
                    <Link href={`/player/${item.player.id}`}>
                      <a>
                        <div className="number">{item.player.name}</div>
                      </a>
                    </Link>
                  </td>
                </tr>
              );
            })}
            <th className="text-left">SUBSTITUTE</th>
            {away.substitutes.map((item, i) => {
              return (
                <tr key={i}>
                  <td className="around flex justify-between">
                    <div className="name">{item.player.number} </div>
                    <Link href={`/player/${item.player.id}`}>
                      <a>
                        <div className="number">{item.player.name}</div>
                      </a>
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Lineup;
