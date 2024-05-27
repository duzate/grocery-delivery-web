"use client";

import Image from "next/image";
import { useState } from "react";
import z from "zod";

import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import SupermarketLogo from "@/../public/supermarket.png";
import { registerSchema } from "@/schema/registerSchema";

export default function Register() {
  interface FormErrors {
    name?: string;
    email?: string;
    password?: string;
    confirmPassword?: string;
  }

  const [errors, setErrors] = useState<FormErrors>({});

  const [registerForm, setRegisterForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setRegisterForm({ ...registerForm, [name]: value });
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const validValues = registerSchema.parse(registerForm);
      setErrors({});
    } catch (error) {
      if (error instanceof z.ZodError) {
        setErrors(error.flatten().fieldErrors);
        console.log(error.flatten());
        
      }
    }
  };

  const [isVisiblePassword, setIsVisiblePassword] = useState(false);
  const [isVisibleConfirmPassword, setIsVisibleConfirmPassword] = useState(false);
  
  return (
    <div className='flex flex-col h-screen w-screen'>
      <div className='flex justify-center items-center w-full h-full'>
        <div className='flex flex-col justify-center items-center md:w-2/3 lg:w-2/5 w-11/12 border border-slate-300 rounded-md shadow-lg '>
          <div className='flex w-full justify-center items-center mx-10 my-5'>
            <Image
              className='lg:w-1/4 lg:h-1/4 w-40 h-40'
              alt='Supermarket'
              src={SupermarketLogo}
              width={100}
              height={100}
              objectFit='fit'
            />
          </div>
          <form onSubmit={handleSubmit} className='flex flex-col w-full px-8' >
          <div className='flex flex-col w-full gap-1'>
                <label htmlFor='name' className='font-semibold text-gray-600'>
                  Nome
                </label>
                <input
                  className='border border-slate-300 rounded-md h-10 p-2 outline-none'
                  type='name'
                  name='name'
                  id='name'
                  placeholder='name'
                  onChange={handleChange}
                />
                {errors.name && (
                  <span className='error text-xs text-red-500'>{errors.name}</span>
                )}
              </div>
            <div className='flex flex-col w-full gap-4'>
              <div className='flex flex-col w-full gap-1'>
                <label htmlFor='email' className='font-semibold text-gray-600'>
                  E-mail
                </label>
                <input
                  className='border border-slate-300 rounded-md h-10 p-2 outline-none'
                  type='email'
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
                    type={isVisiblePassword ? "text" : "password"}
                    name='password'
                    id='password'
                    placeholder='password'
                    onChange={handleChange}
                  />
                  <div
                    className='cursor-pointer'
                    onClick={() => {
                      setIsVisiblePassword(!isVisiblePassword);
                    }}>
                    {isVisiblePassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                  </div>
                </div>
                {errors.password && (
                  <span className='error text-xs text-wrap text-red-500'>{errors.password}</span>
                )}
              </div>
              <div className='flex flex-col w-full gap-1'>
                <label htmlFor='confirmPassword' className='font-semibold text-gray-600'>
                  Confirme senha
                </label>
                <div className=' flex  items-center border border-slate-300 rounded-md h-10 w-full p-2'>
                  <input
                    className='h-full w-full outline-none rounded-md'
                    type={isVisibleConfirmPassword ? "text" : "password"}
                    name='confirmPassword'
                    id='confirmPassword'
                    placeholder='password'
                    onChange={handleChange}
                  />
                  <div
                    className='cursor-pointer'
                    onClick={() => {
                      setIsVisibleConfirmPassword(!isVisibleConfirmPassword);
                    }}>
                    {isVisibleConfirmPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                  </div>
                </div>
                {errors.confirmPassword && (
                  <span className='error text-xs w-full text-red-500'>{errors.confirmPassword}</span>
                )}
              </div>
            </div>
            <div className='flex flex-col w-full '>
              <button
                type='submit'
                className='flex justify-center items-center w-full px-8 bg-green-400 border border-slate-300 shadow-lg text-white font-semibold rounded-md h-10 my-10 '>
                Cadastrar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
