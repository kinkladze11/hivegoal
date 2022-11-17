import React from 'react'

import Table from '../atoms/Table'

const columns = [
  {
    Header: 'Europa Champions League',
    accessor: 'teamsName',
    Cell: (props) => {
      return ''
    },
  },
  {
    Header: 'TS',
    accessor: 'totalShots',
  },
  {
    Header: 'BS',
    accessor: 'totalShots2',
  },
  {
    Header: 'QS',
    accessor: 'totalShots3',
  },
]

const data = [
  {
    teamsName: 'Sporting tottenham',
    totalShots: 4,
    totalShots2: 4,
    totalShots3: 4,
  },
  {
    teamsName: 'Sporting tottenham',
    totalShots: 4,
    totalShots2: 4,
    totalShots3: 4,
  },
  {
    teamsName: 'Sporting tottenham',
    totalShots: 4,
    totalShots2: 4,
    totalShots3: 4,
  },
]

export default function LiveScoreMatchTable(props) {
  return (
    <div className={''}>
      <Table columns={columns} data={data} />
    </div>
  )
}
