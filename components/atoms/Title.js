import React from 'react'

const Title = (props) => {
  return (
    <div className="m-auto flex w-2/3 justify-between bg-gradient-to-r from-indigo-600 via-indigo-800 to-indigo-600 p-5 text-center">
      <h1 className="text-3xl text-white">Team1</h1>
      <span className="text-5xl text-white">VS</span>
      <h1 className="text-3xl text-white">Team2</h1>
    </div>
  )
}

export default Title
