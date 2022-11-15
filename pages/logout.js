import React from 'react'
import Router from 'next/router'

import { useGlobalState } from '../global_state'
import { signOut } from '../helpers/firebase'

export default function Logout() {
  const [{ user }] = useGlobalState()
  if (user) signOut().then(() => Router.push('/'))
  if (user === null) Router.push('/')
  return null
}
