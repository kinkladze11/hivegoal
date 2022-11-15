import React from 'react'

import Navbar from '@components/molecules/Navbar'

import Footer from '../molecules/Footer'

export default function Layout({ children }) {
  return (
    <div className="Layout">
      <Navbar />
      <div className={'flex-grow'}>{children}</div>
      <Footer />
    </div>
  )
}
