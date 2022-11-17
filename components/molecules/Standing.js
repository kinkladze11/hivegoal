import React from 'react'
import { useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

import Tab from '@components/atoms/Tab'
import Table from '@components/atoms/Table'
import TitleLeague from '@components/atoms/Titlelegue'

import { ActionTypes, useGlobalState } from '../../global_state'

const Standing = (props) => {
  const router = useRouter()

  let info = null,
    data = null

  if (props.league) {
    data = props.league.standings
  }

  const coloums = [
    {
      Header: '#',
      accessor: 'rank',
      Cell: (props) => (
        <div className=" justify-between ">
          <h1>{props.row.original.rank}</h1>
        </div>
      ),
    },
    {
      Header: 'Team',
      accessor: 'team',
      Cell: (props) => {
        return (
          <div>
            <Link href={`/team/${props.row.original.team.id}`}>
              <a>
                <img
                  width={60}
                  className="m-2 inline-block w-5"
                  src={props.row.original.team.logo}
                  alt=""
                />
                <span>{props.row.original.team.name}</span>
              </a>
            </Link>
          </div>
        )
      },
    },
    {
      Header: 'Points',
      accessor: 'points',
      Cell: (props) => {
        return (
          <div>
            <h1>{props.row.original.points}</h1>
          </div>
        )
      },
    },
    {
      Header: 'Played',
      accessor: 'all',
      Cell: (props) => {
        return (
          <div>
            <h1>{props.row.original.all.played}</h1>
          </div>
        )
      },
    },
    {
      Header: 'Won',
      accessor: 'all.win',
      Cell: (props) => {
        return (
          <div>
            <h1>{props.row.original.all.win}</h1>
          </div>
        )
      },
    },
    {
      Header: 'Lost',
      accessor: 'all.lose',
      Cell: (props) => {
        return (
          <div>
            <h1>{props.row.original.all.lose}</h1>
          </div>
        )
      },
    },
    {
      Header: 'Draw',
      accessor: 'all.draw',
      Cell: (props) => {
        return (
          <div>
            <h1>{props.row.original.all.draw}</h1>
          </div>
        )
      },
    },
  ]
  return (
    <div>
      {props.league && (
        <TitleLeague
          name={props.league.name}
          logo={props.league.logo}
          country={props.league.country}
          season={props.league.season}
          league_id={props.league.id}
        />
      )}
      <Tab name="Standing" />
      <br />
      {!props.league ||
        (!props.league.standings && <h1 className="text-center">NO STANDINGS AVAILABLE</h1>)}
      {props.league?.standings?.map((item) => {
        return (
          <>
            <Table columns={coloums} data={item} />
            <br />
          </>
        )
      })}
    </div>
  )
}

export default Standing
