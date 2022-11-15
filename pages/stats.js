import { useEffect } from 'react'

import Tab from '@components/atoms/Tab'
import Card from '@components/organisms/Card'
import IndividualStat from '@components/organisms/individual'
import Layout from '@components/organisms/Layout'

import priority from '../config/league_priority.json'
import { ActionTypes, useGlobalState } from '../global_state'

const TO_SHOW = 5

const Stats = () => {
  const [{ league }, dispatch] = useGlobalState()
  const imp_leagues = priority.imp_leagues
  useEffect(() => {
    imp_leagues.forEach((l) => {
      dispatch({ type: ActionTypes.GET_TOP_SCORERS, payload: { id: l, dispatch } })
      dispatch({ type: ActionTypes.GET_TOP_ASSISTS, payload: { id: l, dispatch } })
    })
  }, [])
  let top_goals = [],
    top_assists = [],
    top_ga = []
  imp_leagues.forEach((l) => {
    const topScorers = league[l]?.topScorers
    const topAssists = league[l]?.topAssists
    if (topScorers?.length >= TO_SHOW) {
      for (let i = 0; i < TO_SHOW; i++) {
        top_goals.push(topScorers[i])
        top_ga.push(topScorers[i])
      }
    }
    if (topAssists?.length >= TO_SHOW) {
      for (let i = 0; i < TO_SHOW; i++) {
        top_assists.push(topAssists[i])
        if (
          !topScorers ||
          topScorers.findIndex((x) => x.player.id === topAssists[i].player.id) === -1
        ) {
          top_ga.push(topAssists[i])
        }
      }
    }
  })
  top_goals = top_goals
    .sort((a, b) => b.statistics[0].goals.total - a.statistics[0].goals.total)
    .slice(0, TO_SHOW)
  top_assists = top_assists
    .sort((a, b) => b.statistics[0].goals.assists - a.statistics[0].goals.assists)
    .slice(0, TO_SHOW)
  top_ga = top_ga
    .sort(
      (a, b) =>
        b.statistics[0].goals.assists +
        b.statistics[0].goals.total -
        (a.statistics[0].goals.assists + a.statistics[0].goals.total)
    )
    .slice(0, TO_SHOW)

  return (
    <>
      <Layout>
        <Tab name="Goals+Assists" />
        <div className="mx-auto flex flex-wrap xl:w-2/3">
          {top_goals.length > 0 && (
            <div className="Goals mx-auto w-fit">
              <Card
                category={{ image: '/football.png', name: 'Goals' }}
                player={top_goals[0]}
                stat={top_goals[0].statistics[0].goals.total}
              />
              <table className="w-full">
                <thead>
                  <th></th>
                  <th></th>
                  <th></th>
                  <th></th>
                </thead>
                <tbody>
                  {top_goals.slice(1).map((player, i) => (
                    <IndividualStat
                      stat={player.statistics[0].goals.total}
                      key={player.player.id}
                      pos={i}
                      player={player}
                    />
                  ))}
                </tbody>
              </table>
            </div>
          )}
          {top_assists.length > 0 && (
            <div className="Assists mx-auto w-fit">
              <Card
                category={{ image: '/football.png', name: 'Assists' }}
                player={top_assists[0]}
                stat={top_assists[0].statistics[0].goals.assists}
              />
              <table className="w-full">
                <thead>
                  <th></th>
                  <th></th>
                  <th></th>
                  <th></th>
                </thead>
                <tbody>
                  {top_assists.slice(1).map((player, i) => (
                    <IndividualStat
                      stat={player.statistics[0].goals.assists}
                      key={player.player.id}
                      pos={i}
                      player={player}
                    />
                  ))}
                </tbody>
              </table>
            </div>
          )}
          {top_ga.length > 0 && (
            <div className="Goals+Assists mx-auto w-fit">
              <Card
                category={{ image: '/football.png', name: 'G/A' }}
                player={top_ga[0]}
                stat={`${
                  top_ga[0].statistics[0].goals.total + top_ga[0].statistics[0].goals.assists
                } (${top_ga[0].statistics[0].goals.total} + ${
                  top_ga[0].statistics[0].goals.assists
                })`}
              />
              <table className="w-full">
                <thead>
                  <th></th>
                  <th></th>
                  <th></th>
                  <th></th>
                </thead>
                <tbody>
                  {top_ga.slice(1).map((player, i) => (
                    <IndividualStat
                      stat={`${
                        player.statistics[0].goals.total + player.statistics[0].goals.assists
                      } (${player.statistics[0].goals.total} + ${
                        player.statistics[0].goals.assists
                      })`}
                      key={player.player.id}
                      player={player}
                      pos={i}
                    />
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </Layout>
    </>
  )
}

export default Stats
