import { useState } from "react";
import Link from "next/link";

import Container from "@components/atoms/Container";
import Wrapper from "@components/atoms/Wrapper";

import { useGlobalState } from "../../global_state";

export const Navbar = () => {
  const [{ user }] = useGlobalState();
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <div className="flex justify-between bg-black">
      <div>
        <Link href="/">
          <a className="mr-4 inline-flex items-center p-2 ">
            <span className="text-xl font-bold uppercase tracking-wide text-white">
              DScore
            </span>
          </a>
        </Link>
      </div>

     
        <div className="flex justify-around">
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
                SIGNUP
              </a>
            </Link>
          )}
        </div>
    </div>
  );
};

export default Navbar;
