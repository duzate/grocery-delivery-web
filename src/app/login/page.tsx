"use client";

import Image from "next/image";
import SupermarketLogo from "@/../public/supermarket_logo.png";
import { useState } from "react";
export default function Login() {
  const [username, setUsername] = useState(null!);
  const [password, setPassword] = useState(null!);

  return (
    <div className="flex flex-col h-screen w-screen">
      <div className="flex justify-center items-center w-full h-full">
        <div className="flex flex-col justify-center items-center md:w-2/3 md:h-3/4 lg:w-2/5 lg:h-3/4 border border-slate-300 rounded-md shadow-lg">
          <div className="flex w-full justify-center items-center mx-10 my-5">
            <Image
              className="lg:w-1/3 "
              alt="Supermarket"
              src={SupermarketLogo}
              width={150}
              height={150}
            />
          </div>
          <div className="flex flex-col w-full px-8 gap-6">
            <div className="flex flex-col w-full gap-1">
              <label>Usuário</label>
              <input
                className="border border-slate-300 rounded-md h-8"
                type="text"
                name="username"
                id="username"
              />
            </div>
            <div className="flex flex-col w-full gap-1">
              <label>Senha</label>
              <input
                className="border border-slate-300 rounded-md h-8"
                type="text"
                name="username"
                id="username"
              />
            </div>
          </div>
          <div className="flex flex-col w-full px-8">
            <button className="flex justify-center items-center w-full px-8 bg-green-400 border border-slate-300 shadow-lg text-white font-semibold rounded-md h-10 my-10">
              Entrar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
