import React, { useEffect } from 'react'
import Link from 'next/link'

import { ActionTypes, useGlobalState } from '../../global_state'

import Table from './ScorerTable'
import Tab from '@components/atoms/Tab'
const TopAssists = (props) => {
  const columns = [
    {
      Header: 'Name',
      accessor: 'name',
      Cell: (props) => {
        return (
          <Link href={`/player/${props.row.original.player.name}`}>
            <a>
              <span>
                <img className="inline-block w-10" src={props.row.original.player.photo}></img>
                {props.row.original.player.name}
              </span>
            </a>
          </Link>
        )
      },
    },
    {
      Header: 'Goals',
      accessor: 'statistics[0].goals.assists',
    },
    {
      Header: 'Team',
      accessor: 'team',
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
        )
      },
    },
  ]

  return (
    <>
      <Tab name="Top Assists" />
      <div className="">
        {props.league?.topAssists && <Table columns={columns} data={props.league?.topAssists} />}
      </div>
    </>
  )
}

export default TopAssists
