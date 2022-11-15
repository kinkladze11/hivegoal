import React, { useEffect } from "react";
import Link from "next/link";

import { ActionTypes, useGlobalState } from "../../global_state";

import Table from "./ScorerTable";
import Tab from "@components/atoms/Tab";
const PlayersCard = (props) => {
  const columns = [
    {
      Header: "Score",
      accessor: "player.name",
      Cell: (props) => {
        return (
          <Link href={`/player/${props.row.original.player.id}`}>
            <a>
              <span>
                <img
                  className="inline-block w-10"
                  src={props.row.original.player.photo}
                ></img>
                {props.value}
              </span>
            </a>
          </Link>
        );
      },
    },
    {
      Header: "Goals",
      accessor: "goals",
      Cell: (props) => {
        return <a>{props.row.original.statistics[0].goals.total}</a>;
      },
    },
    {
      Header: "Team",
      accessor: "team",
      Cell: (props) => {
        return (
          <Link href={`/team/${props.row.original.statistics[0].team.id}`}>
            <a>
              <span>
                <img
                  className="inline-block  w-10"
                  src={props.row.original.statistics[0].team.logo}
                />
                <span>{props.row.original.statistics[0].team.name}</span>
              </span>
            </a>
          </Link>
        );
      },
    },
  ];

  return (
    <>
      <Tab name="Top Goals" />
      <div className="">
        {props.league?.topScorers && (
          <Table columns={columns} data={props.league.topScorers} />
        )}
      </div>
    </>
  );
};

export default PlayersCard;
