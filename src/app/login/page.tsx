"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import z from "zod";

import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import SupermarketLogo from "@/../public/supermarket.png";
import { loginSchema } from "@/schema/loginSchema";

export default function Login() {
  interface FormErrors {
    email?: string;
    password?: string;
  }

  const [errors, setErrors] = useState<FormErrors>({});

  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setLoginForm({ ...loginForm, [name]: value });
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const validValues = loginSchema.parse(loginForm);
      setErrors({});
    } catch (error) {
      if (error instanceof z.ZodError) {
        setErrors(error.flatten().fieldErrors);
      }
    }
  };

  const [isVisible, setIsVisible] = useState(false);
  return (
    <div className='flex flex-col h-screen w-screen'>
      <div className='flex justify-center items-center w-full h-full'>
        <div className='flex flex-col justify-center items-center md:w-2/3 md:h-3/4 lg:w-2/5 lg:h-3/4 border border-slate-300 rounded-md shadow-lg '>
          <div className='flex w-full justify-center items-center mx-10 my-5'>
            <Image
              className='lg:w-1/3 '
              alt='Supermarket'
              src={SupermarketLogo}
              width={150}
              height={150}
            />
          </div>
          <form onSubmit={handleSubmit} className='flex flex-col w-full px-8' >
            <div className='flex flex-col w-full gap-4'>
              <div className='flex flex-col w-full gap-1'>
                <label htmlFor='email' className='font-semibold text-gray-600'>
                  E-mail
                </label>
                <input
                  className='border border-slate-300 rounded-md h-10 p-2 outline-none'
                  type='text'
                  name='email'
                  id='email'
                  placeholder='email@example.com'
                  onChange={handleChange}
                />
                {errors.email && (
                  <span className='error text-xs text-red-500'>{errors.email}</span>
                )}
              </div>
              <div className='flex flex-col w-full gap-1'>
                <label htmlFor='password' className='font-semibold text-gray-600'>
                  Senha
                </label>
                <div className=' flex  items-center border border-slate-300 rounded-md h-10 w-full p-2'>
                  <input
                    className='h-full w-full outline-none rounded-md'
                    type={isVisible ? "text" : "password"}
                    name='password'
                    id='password'
                    placeholder='password'
                    onChange={handleChange}
                  />
                  <div
                    className='cursor-pointer'
                    onClick={() => {
                      setIsVisible(!isVisible);
                    }}>
                    {isVisible ? <VisibilityIcon /> : <VisibilityOffIcon />}
                  </div>
                </div>
                {errors.password && (
                  <span className='error text-xs text-red-500'>{errors.password}</span>
                )}
              </div>
            </div>
            <div className='flex w-full  mt-2 '>
              <Link
                className='font-semibold text-xs text-indigo-500'
                href='/register'>
                Cadastre-se
              </Link>
            </div>
            <div className='flex flex-col w-full '>
              <button
                type='submit'
                className='flex justify-center items-center w-full px-8 bg-green-400 border border-slate-300 shadow-lg text-white font-semibold rounded-md h-10 my-10 '>
                Entrar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
