import { useEffect } from "react";
import Link from "next/link";
import Router, { useRouter } from "next/router";
import axios from "axios";

import Navbar from "@components/molecules/Navbar";
import Tab from "@components/atoms/Tab";

import Carousel from "../components/molecules/Carousel";
import Layout from "../components/organisms/Layout";
import Table from "../components/organisms/Livescoretable";
import { ActionTypes, useGlobalState } from "../global_state";
import { updateUser } from "../helpers/firebase";

export default function Index() {
  const [{ fixtures, match, user }, dispatch] = useGlobalState();
  useEffect(() => {
    dispatch({ type: ActionTypes.GET_FIXTURES, payload: { dispatch } });
  }, []);
  // useEffect(() => {
  //   if (fixtures) {
  //     // fixtures.forEach((fix) => {
  //     //   dispatch({
  //     //     type: ActionTypes.GET_FIXTURE_STATISTICS,
  //     //     payload: {
  //     //       dispatch,
  //     //       id: fix.fixture.id,
  //     //       team1: fix.teams.home.id,
  //     //       team2: fix.teams.away.id,
  //     //     },
  //     //   })
  //     // })
  //   }
  // }, [fixtures]);
  const coloumns = [
    {
      Header: "",
      accessor: `teams.home.name`,
      Cell: (props) => (
        <div className="text-right">
          <div>
            <div>
              <span>
                <img
                  className=" inline-block w-5"
                  src={props.row.original.teams.home.logo}
                  alt="Player"
                />
              </span>

              <span>
                <Link href={`/match/${props.row.original.teams.home.id}`}>
                  <a>{props.row.original.teams.home.name}</a>
                </Link>
              </span>
            </div>
          </div>
        </div>
      ),
    },
    {
      Header: "Score",
      accessor: "score",
      Cell: (props) => {
        if (props.row.original.score.fulltime.home != null) {
          return (
            <div className="text-center">
              <span className=" text-red-700">
                {props.row.original.score.fulltime.home}-
                {props.row.original.score.fulltime.away}
              </span>
            </div>
          );
        } else {
          return (
            <div className="text-center">
              <span className=" text-green-700">
                {props.row.original.score.halftime.home}-
                {props.row.original.score.halftime.away}
              </span>
            </div>
          );
        }
      },
    },
    {
      Header: "",
      accessor: `teams.away.name`,
      Cell: (props) => (
        <div className="text-left">
          <div>
            <div>
              <span>
                <Link href={`/match/${props.row.original.teams.home.id}`}>
                  <a>{props.row.original.teams.away.name}</a>
                </Link>
              </span>

              <span>
                <img
                  className=" inline-block w-5"
                  src={props.row.original.teams.away.logo}
                  alt="Player"
                />
              </span>
            </div>
          </div>
        </div>
      ),
    },

    {
      Header: "League",
      accessor: "league.name",
      Cell: (props) => {
        return (
          <div className="text-center">
            <img
              src={props.row.original.league.logo}
              className="mr-1 inline-block w-5"
              alt=""
            />
            <Link href={`/match/${props.row.original.league.id}`}>
              <a>
                <span>{props.row.original.league.name}</span>
              </a>
            </Link>
          </div>
        );
      },
    },
    {
      Header: <img src="/TS.png" className="text mx-auto w-5" alt="" />,
      accessor: "totalShots",
      Cell: (props) => {
        let val = 0,
          type = "Shots on Goal";
        match[props.row.original.fixture.id]?.stats?.forEach((stat) => {
          for (let i = 0; i < stat.statistics.length; i++) {
            if (stat.statistics[i].type === type) {
              val += stat.statistics[i].value;
              break;
            }
          }
        });
        return <div className=" text-center">{val}</div>;
      },
    },
    {
      Header: <img src="/S.jpg" className="text mx-auto w-5" alt="" />,
      accessor: "Shots",
      Cell: (props) => {
        return <div className=" text-center">2</div>;
      },
    },
    {
      Header: <img src="/CR.jpeg" className="text mx-auto w-5" alt="" />,
      accessor: "Corners",
      Cell: (props) => {
        return <div className="  text-center">3</div>;
      },
    },
    {
      Header: <img src="/danger.png" className="text mx-auto w-5" alt="" />,
      accessor: "dangerAttack",
      Cell: (props) => {
        return <div className=" text-center">3</div>;
      },
    },
  ];
  return (
    <Layout>
      <Tab name="Livescore" />
      <Table columns={coloumns} data={fixtures} />
    </Layout>
  );
}
