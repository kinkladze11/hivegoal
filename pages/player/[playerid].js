import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import axios from "axios";

import Container from "@components/atoms/Container";
import PlayerTitle from "@components/atoms/PlayerTitle";
import Tab from "@components/atoms/Tab";
import Table from "@components/atoms/Table";
import Layout from "@components/organisms/Layout";

import { ActionTypes, useGlobalState } from "../../global_state";
const Playerid = () => {
  const router = useRouter();
  const { playerid } = router.query;
  const [refresh, setRefresh] = useState(false);
  const [current_player, setCurrentPlayer] = useState();
  const [{ player }, dispatch] = useGlobalState();
  useEffect(() => {
    if (playerid) {
      dispatch({
        type: ActionTypes.GET_PLAYER,
        payload: { id: playerid, dispatch },
      });
      dispatch({
        type: ActionTypes.GET_TRANSFERS,
        payload: { id: playerid, dispatch },
      });
      dispatch({
        type: ActionTypes.GET_TROPHIES,
        payload: { id: playerid, dispatch },
      });
      setCurrentPlayer(player[playerid]);
      setRefresh(true);
      console.log(player);
    }
  }, [playerid]);

  console.log(current_player);
  return (
    <Layout>
      {current_player && <PlayerTitle player={current_player.player} />}

      <Tab name="Carrier" />
      <table className="m-auto w-full xl:w-2/3">
        <thead className="m-auto">
          <tr className="border">
            <th className="border border-2 border-black">Team Name</th>

            <th className="border border-2 border-black">League</th>

            <th className="border border-2 border-black">Season</th>

            <th className="border border-2 border-black">Apperarence</th>

            <th className="border border-2 border-black">Minutes played</th>

            <th className="border border-2 border-black">Position</th>

            <th className="border border-2 border-black">Goals</th>

            <th className="border border-2 border-black">Rating</th>
          </tr>
        </thead>
        <tbody className="mx-auto">
          {current_player?.statistics?.map((item, i) => {
            return (
              <tr key={i} className="m-auto">
                <td className="border border-2 border-black text-center ">
                  {item.team.name}
                </td>
                <td className="border border-2 border-black text-center">
                  {item.league.name}
                </td>
                <td className="border border-2 border-black text-center">
                  {item.league.season}
                </td>
                <td className="border border-2 border-black text-center">
                  {item.games.appearences}
                </td>
                <td className="border border-2 border-black text-center">
                  {item.games.minutes}
                </td>
                <td className="border border-2 border-black text-center">
                  {item.games.position}
                </td>
                <td className="border border-2 border-black text-center">
                  {item.goals.total}
                </td>
                <td className="border border-2 border-black text-center">
                  {item.games.rating}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <Tab name="Transfers" />
      <table className="m-auto w-full xl:w-2/3">
        <thead>
          <tr>
            <th className="border border-2 border-black">Date</th>
            <th className="border border-2 border-black">Type</th>
            <th className="border border-2 border-black">In</th>
            <th className="border border-2 border-black">Out</th>
          </tr>
        </thead>
        <tbody>
          {current_player?.transfers?.transfers?.map((item, i) => {
            return (
              <tr key={i}>
                <td className="border border-2 border-black text-center">
                  {item.date}
                </td>
                <td className=" border border-2 border-black text-center">
                  {item.type}
                </td>
                <td className="border border-2 border-black text-center">
                  <span className="justify-center text-center">
                    <Link href={`/team/${item.teams.in.id}`}>
                      <a>
                        <img
                          src={item.teams.in.logo}
                          className="inline-block w-8 justify-center text-center"
                          alt=""
                        />
                        {item.teams.in.name}
                      </a>
                    </Link>
                  </span>
                </td>
                <td className="border border-2 border-black text-center">
                  <span className="justify-center text-center">
                    <Link href={`/team/${item.teams.out.id}`}>
                      <a>
                        <img
                          src={item.teams.out.logo}
                          className="inline-block w-8 justify-center text-center"
                          alt=""
                        />
                        {item.teams.out.name}
                      </a>
                    </Link>
                  </span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <Tab name="Trophies"></Tab>
      <table className="m-auto w-full xl:w-2/3">
        <thead>
          <tr>
            <th className="border border-2 border-black">League</th>
            <th className="border border-2 border-black">Country</th>
            <th className="border border-2 border-black">Season</th>
            <th className="border border-2 border-black">Place</th>
          </tr>
        </thead>
        <tbody>
          {current_player?.trophies?.map((item, i) => {
            return (
              <tr key={i}>
                <td className="border border-2 border-black text-center">
                  {item.league}
                </td>
                <td className="border border-2 border-black text-center">
                  {item.country}
                </td>
                <td className="border border-2 border-black text-center">
                  {item.season}
                </td>
                <td className="border border-2 border-black text-center">
                  {item.place}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Layout>
  );
};

export default Playerid;
