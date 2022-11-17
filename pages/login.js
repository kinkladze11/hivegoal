import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Router from "next/router";
import { useForm } from "react-hook-form";

import { useGlobalState } from "../global_state";
import { signIn } from "../helpers/firebase";

const Login = () => {
  const { register, handleSubmit } = useForm();
  const [{ user }] = useGlobalState();
  function onSubmit(data) {
    signIn(data.email, data.password);
  }
  if (user) Router.push("/");
  if (user) return null;
  return (
    <div className="form-bg flex h-screen justify-center bg-[url('/foo.jpg')] bg-cover bg-no-repeat ">
      <div className="containerB self-center border-l-8 border-l-blue-500 bg-white p-2 opacity-70 lg:w-1/4">
        <div className="form-box  m-2 w-full">
          <div className="header-form">
            <h4 className="py-5 text-center text-3xl text-blue-500">
              <span className="text-red-500">D</span>Scores
            </h4>

            <div className="image"></div>
          </div>
          <div className="body-form mx-auto flex flex-col ">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 pb-5 ">
              <div className="input-group  flex">
                <input
                  {...register("email")}
                  type="text"
                  className="form-control w-full border-b  border-b-black p-2"
                  placeholder="Email"
                />
              </div>
              <div className="input-group flex">
                <input
                  {...register("password")}
                  type="password"
                  className=" form-control w-full border-b  border-b-black p-2"
                  placeholder="Password"
                />
              </div>

              <div className="button text-center">
                <button
                  type="submit"
                  className=" w-full bg-blue-700 py-2 text-white"
                >
                  LOGIN
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
