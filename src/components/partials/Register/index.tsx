import React from 'react';
import Image from 'next/image';
import { ChevronRight } from 'lucide-react';

const Register = () => {
  return (
    <div className="lg:flex lg:items-center lg:my-auto lg:h-screen">
      <div className="md:px-16 md:mt-8 lg:mt-0 lg:w-1/2">
        <div className="relative aspect-video lg:aspect-square h-[100%] w-full">
          <Image
            src={'/login-image.png'}
            alt={'register'}
            className="md:rounded-t-4xl lg:rounded-4xl"
            fill
            objectFit="cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority
          />
          <div className="lg:hidden absolute bg-gradient-to-t from-black to-40% to-transparent inset-0" />
        </div>
      </div>
      {/*  */}
      <div className="px-margin flex lg:justify-center flex-col items-center md:max-w-96 mx-auto">
        <Image
          alt="logo"
          className="invert"
          src={'/next.svg'}
          width={150}
          height={20}
          priority
        />
        <div className="flex items-center text-xs gap-2 mt-4">
          <p>First time here?</p>
          <button className="bg-secondary px-3 py-2 rounded-md">Sign up</button>
        </div>

        <h2 className="mb-8 text-3xl mt-8 tracking-tight">Welcome back</h2>
        <input
          type="email"
          placeholder="Email"
          className="w-full px-4 py-3 bg-secondary rounded-lg placeholder-white"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full px-4 py-3 bg-secondary rounded-lg placeholder-white mt-4"
        />

        <div className="flex justify-between items-center w-full mt-4">
          <button className="bg-secondary px-3 py-1 rounded h-fit text-xs">
            Forgot password
          </button>
          <button className="flex gap-3 bg-primary px-3 py-2 rounded-md">
            Login <ChevronRight />
          </button>
        </div>

        <p className="text-secondary-text text-xxs text-center mt-8 mb-8">
          By logging in, you agree to our Terms of Service and Privacy Policy
        </p>
      </div>
    </div>
  );
};

export default Register;
