import React from 'react'

const Summary = () => {
  return (
    <div>
      <div className="flex     w-2/12 justify-between bg-indigo-800">
        <img
          className="inline-block h-10 w-10"
          src="https://cdn.redscores.com/images/team/19_m.png"
        />
        <h1 className="inline-block text-center text-white">Summary</h1>
        <img
          className="inline-block h-10 w-10"
          src="https://cdn.redscores.com/images/team/13_m.png"
        />
      </div>
      <div>
        <div
          className={`bg-gradient-to-r from-red-${700}  to-green-${600} flex w-2/12 justify-between`}
        >
          <li className="list-none">5</li>
          <li className="list-none">3</li>
        </div>
      </div>
    </div>
  )
}

export default Summary
