import { useEffect } from "react";
import Router, { useRouter } from "next/router";
import axios from "axios";

import Tab from "@components/atoms/Tab";
import Layout from "@components/organisms/Layout";
import PredTable from "@components/organisms/PredTable";

//fetch all leagues
import { ActionTypes, useGlobalState } from "../global_state";
const Predictions = () => {
  const [{ fixtures, leagues, user, match }, dispatch] = useGlobalState();
  const leaguesToShow = [];
  const categorised_fixtures = {};

  useEffect(() => {
    dispatch({ type: ActionTypes.GET_FIXTURES, payload: { dispatch } });
    // dispatch({ type: ActionTypes.GET_LEAGUES, payload: { dispatch } });
  }, []);
  useEffect(() => {
    if (fixtures)
      fixtures.map((fix) => {
        dispatch({
          type: ActionTypes.GET_FIXTURE_PREDICTIONS,
          payload: { dispatch, id: fix.fixture.id },
        });
      });
  }, [fixtures]);
  console.log(match);
  if (fixtures) {
    fixtures.forEach((fix) => {
      if (match[fix.fixture.id]?.predictions) {
        fix = { ...fix, ...match[fix.fixture.id] };
        if (!leaguesToShow.includes(fix.league.id)) {
          leaguesToShow.push(fix.league.id);
        }
        if (categorised_fixtures[fix.league.id])
          categorised_fixtures[fix.league.id].push(fix);
        else categorised_fixtures[fix.league.id] = [fix];
      }
    });
  }
  console.log(categorised_fixtures, leaguesToShow);
  return (
    <>
      <Layout>
        <Tab name="Predictions" />
        {leaguesToShow.length > 0 &&
          leaguesToShow.map((item, i) => {
            return (
              <PredTable
                key={i}
                item={categorised_fixtures[item][0].league}
                fixtures={categorised_fixtures[item]}
              />
            );
          })}
      </Layout>
    </>
  );
};

export default Predictions;
