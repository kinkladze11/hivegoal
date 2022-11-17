import React, { useEffect } from "react";
import { useRouter } from "next/router";

import PlayersCard from "@components/molecules/Playerscard";
import Standing from "@components/molecules/Standing";
import TopAssists from "@components/molecules/Topassist";
import Layout from "@components/organisms/Layout";

import { ActionTypes, useGlobalState } from "../../global_state";

const LeagueID = () => {
  const router = useRouter();
  const { leagueid } = router.query;
  const [{ league }, dispatch] = useGlobalState();
  useEffect(() => {
    if (leagueid) {
      dispatch({
        type: ActionTypes.GET_TOP_SCORERS,
        payload: { id: leagueid, dispatch },
      });
      dispatch({
        type: ActionTypes.GET_STANDINGS,
        payload: { id: leagueid, dispatch },
      });
      dispatch({
        type: ActionTypes.GET_TOP_ASSISTS,
        payload: { id: leagueid, dispatch },
      });
      console.log(league[leagueid]);
    }
  }, [leagueid]);

  return (
    <Layout>
      <Standing league={league[leagueid]} />
      <PlayersCard league={league[leagueid]} />
      <TopAssists league={league[leagueid]} />
    </Layout>
  );
};

export default LeagueID;
