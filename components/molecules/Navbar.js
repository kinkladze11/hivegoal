import { useState } from 'react'
import Link from 'next/link'

import Container from '@components/atoms/Container'
import Wrapper from '@components/atoms/Wrapper'

import { useGlobalState } from '../../global_state'

export const Navbar = () => {
  const [{ user }] = useGlobalState()
  const [active, setActive] = useState(false)

  const handleClick = () => {
    setActive(!active)
  }

  return (
    <Wrapper className="solorized">
      <Container className="solorized flex  flex-wrap   items-center p-3  ">
        <Link href="/">
          <a className="mr-4 inline-flex items-center p-2 ">
            <span className="text-xl font-bold uppercase tracking-wide text-white">DScore</span>
          </a>
        </Link>
        <button
          className=" ml-auto inline-flex rounded p-3 text-white outline-none hover:bg-gray-400 hover:text-white lg:hidden"
          onClick={handleClick}
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        {/*Note that in this div we will use a ternary operator to decide whether or not to display the content of the div  */}
        <div className={`${active ? '' : 'hidden'}   w-full lg:inline-flex lg:w-auto lg:flex-grow`}>
          <div className="flex w-full flex-col items-start lg:ml-auto lg:inline-flex lg:h-auto  lg:w-auto lg:flex-row lg:items-center">
            {user && (
              <Link href="/logout">
                <a className="w-full items-center justify-center rounded px-3 py-2 font-bold text-white hover:bg-gray-400 hover:text-white lg:inline-flex  lg:w-auto">
                  LOGOUT
                </a>
              </Link>
            )}
            {!user && (
              <Link href="/login">
                <a className="w-full items-center justify-center rounded px-3 py-2 font-bold text-white hover:bg-gray-400 hover:text-white lg:inline-flex  lg:w-auto">
                  LOGIN
                </a>
              </Link>
            )}
            {!user && (
              <Link href="/signup">
                <a className="w-full items-center justify-center rounded px-3 py-2 font-bold text-white hover:bg-gray-400 hover:text-white lg:inline-flex  lg:w-auto">
                  SIGN UP
                </a>
              </Link>
            )}
          </div>
        </div>
      </Container>
    </Wrapper>
  )
}

export default Navbar
