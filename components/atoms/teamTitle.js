import React, { useEffect, useState } from 'react'
import axios from 'axios'

import { ActionTypes, useGlobalState } from '../../global_state'
const TeamTitle = (props) => {
  return (
    <div className="flex w-2/3 bg-red-700 p-5">
      <img src={props.team?.logo} alt="" className="mr-2 h-10" />
      <div className="details">
        <div className="leagueName">{props.team?.name}</div>
        <div className="teamName">Founded: {props.team?.founded}</div>
        <div className="season">Code: {props.team?.code}</div>
        <div className="country">Country: {props.team?.country}</div>
      </div>
    </div>
  )
}

export default TeamTitle
