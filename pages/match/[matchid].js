import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";

import PercentageDiv from "@components/atoms/PerentageDiv";
import MatchTab from "@components/match/Tab";
import Events from "@components/molecules/Events";
import Standing from "@components/molecules/Standing";
import Lineup from "@components/organisms/Lineup";

import Tab from "../../components/atoms/Tab";
import MatchTable from "../../components/match/ODDS/MatchTable";
import Title from "../../components/match/Title";
import HeadToHead from "@components/match/HeadToHead/Team";
import Layout from "../../components/organisms/Layout";
import { ActionTypes, useGlobalState } from "../../global_state";
import AsianHandicap from "@components/match/ODDS/AsianHandicap";
import Corners from "@components/match/ODDS/Corners";
import Goals from "@components/match/ODDS/Goals";

const MatchId = () => {
  const [state, setstate] = useState(true);
  const router = useRouter();
  const { matchid } = router.query;
  const [{ match }, dispatch] = useGlobalState();
  useEffect(() => {
    if (matchid) {
      dispatch({
        type: ActionTypes.GET_MATCH,
        payload: { id: matchid, dispatch },
      });
      dispatch({
        type: ActionTypes.GET_FIXTURE_PREDICTIONS,
        payload: { id: matchid, dispatch },
      });
      dispatch({
        type: ActionTypes.GET_EVENTS,
        payload: { id: matchid, dispatch },
      });
    }
  }, [matchid]);
  const data = match[matchid];
  let home = null,
    away = null;
  if (data) {
    if (data.teams) {
      if (data.lineups) {
        if (data.lineups[0].team.id === data.teams.home.id) {
          console.log(data);
          home = data.lineups[0];
          away = data.lineups[1];
        } else {
          away = data.lineups[0];
          home = data.lineups[1];
        }
      }
    }
  }
  console.log(match);
  return (
    <Layout>
      {data && data.teams && (
        <Title
          home={data.teams.home.name}
          homelogo={data.teams.home.logo}
          away={data.teams.away.name}
          awaylogo={data.teams.away.logo}
          home_team_id={data.teams.home.id}
          away_team_id={data.teams.away.id}
        />
      )}

      <Tab name="Comparison" />
      <div className="mx-auto flex justify-between px-4 xl:w-2/5">
        <div>Home</div>
        <div>Away</div>
      </div>
      {data && data.predictions && (
        <div className="mx-auto flex justify-between bg-white px-4 xl:w-2/5">
          <div className="">
            <div>{data.predictions.comparison.att.home}</div>
            <div>{data.predictions.comparison.def.home}</div>
            <div>{data.predictions.comparison.form.home}</div>
            <div>{data.predictions.comparison.goals.home}</div>
            <div>{data.predictions.comparison.h2h.home}</div>
            <div>{data.predictions.comparison.total.home}</div>
          </div>
          <div className="text-center">
            <div>Attribute</div>
            <div>Defence</div>
            <div>Form</div>
            <div>Goals</div>
            <div>H2H</div>
            <div>Total</div>
          </div>
          <div className="">
            <div>{data.predictions.comparison.att.away}</div>
            <div>{data.predictions.comparison.def.away}</div>
            <div>{data.predictions.comparison.form.away}</div>
            <div>{data.predictions.comparison.goals.away}</div>
            <div>{data.predictions.comparison.h2h.away}</div>
            <div>{data.predictions.comparison.total.away}</div>
          </div>
        </div>
      )}
      <Tab name="Head To Head" />
      <table class="mx-auto ">
        <thead>
          <tr className="text-center">
            <th className="p-8 text-center font-light">Home</th>
            <th className=" text-center"></th>
            <th className="p-8 text-center font-light">Away</th>
          </tr>
        </thead>
        {data &&
          data.predictions &&
          data.predictions.h2h.map((value, i) => {
            return <HeadToHead value={value} key={i + 1} />;
          })}
      </table>

      <Tab name="Predictions" />
      {data && data.predictions && data.predictions.predictions && (
        <div className="predictions mx-auto text-center xl:w-2/5">
          <h1 className="bg-gray-500 text-white">Goals</h1>

          <div className="goals flex justify-around ">
            <div>
              <div className="home">Home</div>
              {data.predictions.predictions.goals.home}
            </div>
            <div>
              <div className="home">Away</div>
              {data.predictions.predictions.goals.away}
            </div>
          </div>
          <h1 className="bg-gray-500 text-white">percent</h1>
          <div className="percent flex justify-around">
            <div>
              <div className="home">Home</div>
              {data.predictions.predictions.percent.home}
            </div>
            <div>
              <div className="home">Draw</div>
              {data.predictions.predictions.percent.draw}
            </div>
            <div>
              <div className="home">Away</div>
              {data.predictions.predictions.percent.away}
            </div>
          </div>

          {data.predictions.predictions.under_over ? (
            <div className="under_over">
              <h1 className="bg-gray-500 text-white">Under/Over</h1>

              {data.predictions.predictions.under_over}
            </div>
          ) : (
            ""
          )}

          <h1 className="bg-gray-500 text-white">Winner</h1>

          <div className="winner">
            {data.predictions.predictions.winner.name}
          </div>

          <div className="advice">
            <span className="rounded-lg bg-blue-400 px-2">Advice </span> :-
            {data.predictions.predictions.advice}
          </div>
        </div>
      )}
    </Layout>
  );
};

export default MatchId;
