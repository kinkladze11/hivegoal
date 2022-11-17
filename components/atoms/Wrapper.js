import React from 'react'
export default function Wrapper({ children, className }) {
  return <div className={className + ' px-5'}>{children}</div>
}
