import React, { useEffect, useState } from 'react'
import axios from 'axios'

const MatchTable = (props) => {
  const [data, setData] = useState([
    {
      id: 59,
      name: 'Fulltime Result',
      values: [
        {
          value: 'Home',
          odd: '1.3',
          handicap: null,
          main: null,
          suspended: false,
        },
        {
          value: 'Draw',
          odd: '4.333',
          handicap: null,
          main: null,
          suspended: false,
        },

        {
          value: 'Away',
          odd: '17',
          handicap: null,
          main: null,
          suspended: false,
        },
      ],
    },
  ])
  // useEffect(() => {
  //   axios
  //     .get(`https://v3.football.api-sports.io/odds/live?fixture=${parseInt(props.matchid)}`, {
  //       headers: {
  //         'x-rapidapi-host': 'v3.football.api-sports.io',
  //         'x-rapidapi-key': '19c2100ce7eecbfe24019d46fd1215a7',
  //       },
  //     })
  //     .then((response) => {
  //       console.log(response.data)
  //       console.log(response.data.response)
  //       setData(response.data.response.odds)
  //     })
  //     .catch((err) => {
  //       console.log(err)
  //     })
  // }, [])

  return (
    <div className="table-data-wrapper font-Fira Sans ">
      <div className="table-data ps">
        <table className="table-data__table table-data__table--odds mx-auto h-full w-full xl:w-2/3">
          <thead>
            <tr>
              <th className="border-collapse border border-slate-400 " rowSpan={2}>
                <span className="text-base font-light">Odds by</span>
              </th>
              <th
                className="border-collapse border border-slate-400 bg-indigo-800 text-center font-light  text-white"
                colSpan={5}
              >
                Match
              </th>
            </tr>
            <tr>
              <th className="border-collapse border border-slate-400  text-center ">1</th>
              <th className="border-collapse border border-slate-400  text-center ">X</th>
              <th className="border-collapse border border-slate-400  text-center ">2</th>
            </tr>
          </thead>
          <tbody className="border-collapse border border-slate-400  text-center">
            {data.map((item, i) => {
              if (item.name == 'Fulltime Result')
                return (
                  <tr key={i}>
                    <th className="border-collapse border border-slate-400  font-light">
                      Opening Odds
                    </th>
                    <td className="border-collapse border border-slate-400">
                      {item.values[0].odd}
                    </td>
                    <td className="border-collapse border border-slate-400">
                      {item.values[1].odd}
                    </td>
                    <td className="border-collapse border border-slate-400">
                      {item.values[2].odd}
                    </td>
                  </tr>
                )
            })}
          </tbody>
        </table>

        <div className=" left-0 bottom-0">
          <div className="ps__thumb-x" tabIndex={0}></div>
        </div>
        <div className="top-0 right-0">
          <div className="top-0 h-0" tabIndex={0}></div>
        </div>
      </div>
    </div>
  )
}

export default MatchTable
