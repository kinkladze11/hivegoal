import React from 'react'
import Link from 'next/link'
const Title = (props) => {
  return (
    <div className="mx-auto flex w-full justify-between bg-gradient-to-r from-indigo-600 via-indigo-800 to-indigo-600 p-5 text-center xl:w-2/3">
      <Link href={`/team/${props.home_team_id}`}>
        <a>
          <span>
            <img src={props.homelogo} className="text-center" alt="" />
          </span>
          <h1 className="text-3xl text-white">{props.home}</h1>
        </a>
      </Link>
      <span className="mx-3 mt-10 text-5xl text-white">VS</span>
      <Link href={`/team/${props.away_team_id}`}>
        <a className="">
          <span>
            <img src={props.awaylogo} className="text-center" alt="" />
          </span>
          <h1 className="text-3xl text-white">{props.away}</h1>
        </a>
      </Link>
    </div>
  )
}

export default Title
