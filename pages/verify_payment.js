import React, { useEffect } from 'react'
import Router, { useRouter } from 'next/router'
import axios from 'axios'

import plans from '../config/plans.json'
import { ActionTypes, useGlobalState } from '../global_state'
import { updateUser } from '../helpers/firebase'
export default function VerifyPayment() {
  const router = useRouter()
  const [{ user }, dispatch] = useGlobalState()

  const { session_id } = router.query
  function verifySessionID(id) {
    if (!user) return
    axios.post('/api/verify_session_id', { id }).then(({ data }) => {
      console.log(data)

      if (data?.email === user?.email) {
        const plan = plans.plans.find((plan) => plan.amount * 100 === data.amount)
        let { duration } = plan
        if (user.premium) {
          const oldDate = new Date(user.premium).getTime()
          const timeLeft = oldDate - new Date().getTime()
          if (timeLeft > duration * 24 * 60 * 60 * 1000) return
        }
        const createdAt = new Date(data.createdAt)
        createdAt.setDate(createdAt.getDate() + duration)
        updateUser({ premium: createdAt.toISOString() }, user.email)
          .then(() => {
            Router.push('/')
            dispatch({
              type: ActionTypes.SET_USER,
              payload: { ...user, premium: createdAt.toISOString() },
            })
          })
          .catch((e) => {
            console.error(e)
            alert('ERROR VERIFYING PAYMENT')
          })
      } else alert('ERROR VERIFYING PAYMENT')
    })
  }
  useEffect(() => {
    verifySessionID(session_id)
  }, [session_id, user])
  return <div className={''}></div>
}
