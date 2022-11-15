/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import StadiumName from "@components/atoms/stadiumName";
import Tab from "@components/atoms/Tab";
import TeamStats from "@components/atoms/teamStats";
import TeamTitle from "@components/atoms/teamTitle";
import Layout from "@components/organisms/Layout";
import Squad from "@components/organisms/Squad";

import { ActionTypes, useGlobalState } from "../../global_state";

const team = () => {
  const router = useRouter();
  const { teamid } = router.query;
  const [{ team }, dispatch] = useGlobalState();
  const [data, setdata] = useState(null);
  const [refresh, setRefresh] = useState(false);
  useEffect(() => {
    if (teamid) {
      dispatch({
        type: ActionTypes.GET_TEAM,
        payload: { id: teamid, dispatch },
      });

      dispatch({
        type: ActionTypes.GET_SQUAD,
        payload: { id: teamid, dispatch },
      });
      setdata(team[teamid]);
      setRefresh(true);
      console.log(team);
    }
  }, []);
  return (
    <>
      <Layout>
        <div className="my-2 mx-auto flex w-full text-white lg:w-2/3">
          {data && <TeamTitle team={data.team} />}
          {data && <StadiumName stadium={data.venue} />}
        </div>
        <Tab name="Current Squad" />
        {data && <Squad squad={data.squad} />}
      </Layout>
    </>
  );
};

export default team;
