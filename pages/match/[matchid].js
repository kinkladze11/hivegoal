import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'

import PercentageDiv from '@components/atoms/PerentageDiv'
import MatchTab from '@components/match/Tab'
import Events from '@components/molecules/Events'
import Standing from '@components/molecules/Standing'
import Lineup from '@components/organisms/Lineup'

import Tab from '../../components/atoms/Tab'
import MatchTable from '../../components/match/ODDS/MatchTable'
import Title from '../../components/match/Title'
import Layout from '../../components/organisms/Layout'
import { ActionTypes, useGlobalState } from '../../global_state'
import AsianHandicap from '@components/match/ODDS/AsianHandicap'
import Corners from '@components/match/ODDS/Corners'
import Goals from '@components/match/ODDS/Goals'

const MatchId = () => {
  const router = useRouter()
  const { matchid } = router.query
  const [{ match }, dispatch] = useGlobalState()
  useEffect(() => {
    if (matchid) {
      dispatch({ type: ActionTypes.GET_MATCH, payload: { id: matchid, dispatch } })
      dispatch({ type: ActionTypes.GET_FIXTURE_PREDICTIONS, payload: { id: matchid, dispatch } })
      dispatch({ type: ActionTypes.GET_EVENTS, payload: { id: matchid, dispatch } })
    }
  }, [matchid])
  const data = match[matchid]
  let home = null,
    away = null
  if (data) {
    if (data.teams) {
      if (data.lineups) {
        if (data.lineups[0].team.id === data.teams.home.id) {
          home = data.lineups[0]
          away = data.lineups[1]
        } else {
          away = data.lineups[0]
          home = data.lineups[1]
        }
      }
    }
  }
  console.log(match   )
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

      <Tab name="Odds" />

      <div className="space-y-4">
        <MatchTable matchid={matchid} />
        <AsianHandicap />
        <Corners />
        <Goals />
      </div>

      <Events events={data?.events} />
      {home && away && <Lineup home={home} away={away} />}

      {data && data.league && <Standing leagueid={data.league.id} />}
    </Layout>
  )
}

export default MatchId
