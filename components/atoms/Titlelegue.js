import React from 'react'
import Link from 'next/link'

import Table from './Table'

const TitleLeague = (props) => {
  return (
    <div>
      <div className="m-auto flex w-full justify-between bg-gradient-to-r from-indigo-600 via-indigo-800 to-indigo-600 xl:w-2/3">
        <div className=" bg-white ">
          <Link href={`/League/${props.league_id}`}>
            <a>
              <img className="m-auto mt-4  w-32 p-5  text-center" src={props.logo} />
            </a>
          </Link>
        </div>
        <div className=" lg:p-5">
          <h1 className="left-0 font-mono text-4xl text-white">{props.name}</h1>
          <h1 className="text-1xl left-0 text-white">{props.country}</h1>
          <h1 className="text-1xl text-white">{props.season}</h1>
        </div>
      </div>
    </div>
  )
}

export default TitleLeague
