import { useEffect, useState } from 'react'
import Link from 'next/link'
import axios from 'axios'

import { ActionTypes, useGlobalState } from '../../global_state'
import Footer from '../molecules/Footer'
import Navbar from '../molecules/Navbar'

const LeagueTitle = () => {
  const [{ leagues }, dispatch] = useGlobalState()
  const leaguesToShow = leagues.slice(0, 10)
  useEffect(() => {
    dispatch({ type: ActionTypes.GET_LEAGUES, payload: { dispatch } })
  }, [])
  return (
    <>
      <div className="border-top m-auto  my-2 border-y-2  bg-white py-2 lg:w-2/3">
        <div className="relative m-auto flex w-10/12 items-center py-5 ">
          <div className="flex-grow border-t border-indigo-600"></div>
          <span className="mx-4 flex-shrink text-2xl text-indigo-600">Leagues</span>
          <div className="flex-grow border-t border-indigo-600"></div>
        </div>
        <div className="sm:mx-48">
          <div className="LeagueTitle grid sm:grid-cols-2 ">
            {leaguesToShow.map((item) => (
              <>
                <div className=" leagueName m-2 flex space-y-2">
                  <img
                    className="m-2 inline-block h-5 w-5"
                    src={item.league.logo}
                    width={60}
                    alt="Player"
                  />
                  <Link href={`/League/${item.league.id}`}>
                    <a className="cursor-pointer">{item.league.name} </a>
                  </Link>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default LeagueTitle
