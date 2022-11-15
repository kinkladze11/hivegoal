import React from 'react'

const Tab = (props) => {
  return (
    <div className="text-1xl m-auto w-full bg-gradient-to-r from-indigo-500  via-indigo-900 to-indigo-500 text-center text-white lg:w-2/3">
      <h1>{props.name}</h1>
    </div>
  )
}

export default Tab
