'use client';
import React, { JSX, useEffect, useState } from 'react';
import { ChevronRight, Loader } from 'lucide-react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { RegisterSchema, registerSchema } from '@/types/auth.schema';
import { getProviderList, register as RegisterAction } from '@/actions/auth';
import { toast } from 'sonner';
import { signIn } from 'next-auth/react';
import { AxiosError } from 'axios';
import { useRouter } from 'next/navigation';
import { AuthProvider } from '@/types/authProviders';
import { Github, Facebook, Twitch } from 'lucide-react';
import GoogleIcon from '@public/payment/google';
import SteamIcon from '@public/payment/steam';
import DiscordIcon from '@public/payment/discord';
import MicroSoftIcon from '@public/payment/micosoft';

const socialIcons: Record<string, JSX.Element> = {
  google: <GoogleIcon className="w-5 h-5" />,
  github: <Github className="w-5 h-5" />,
  discord: <DiscordIcon className="w-5 h-5 fill-white" />,
  steam: <SteamIcon className="w-5 h-5 fill-white" />,
  twitch: <Twitch className="w-5 h-5" />,
  microsoft: <MicroSoftIcon className="w-5 h-5 fill-white" />,
  facebook: <Facebook className="w-5 h-5" />,
};

const Register = ({ providers }: { providers?: AuthProvider[] }) => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const { register, handleSubmit } = useForm<RegisterSchema>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      email: '',
      password: '',
      password_confirmation: '',
    },
  });
  const onSubmit: SubmitHandler<RegisterSchema> = async (data) => {
    setIsLoading(true);
    try {
      await RegisterAction(data);
      await signIn('credentials', {
        email: data.email,
        password: data.password,
        redirect: false,
      });

      toast.success('Registration successful! You can now log in.');
      router.push('/');
      setIsLoading(false);
    } catch (err: unknown) {
      if (err instanceof AxiosError) {
        const axiosErr = err as AxiosError<{
          data: { email: string[] };
        }>;
        toast.error(
          axiosErr.response?.data?.data.email[0] ?? 'Registration failed'
        );
      } else {
        toast.error('Registration failed. Please try again.');
      }
      setIsLoading(false);
    }
  };

  return (
    <form
      className="px-margin flex lg:justify-center flex-col items-center md:max-w-96 mx-auto"
      onSubmit={handleSubmit(onSubmit)}
    >
      <h2 className="mb-8 text-3xl mt-8 tracking-tight">Create your account</h2>
      <input
        type="email"
        placeholder="Email"
        className="w-full px-4 py-3 bg-secondary rounded-lg placeholder-white"
        {...register('email')}
      />
      <input
        type="password"
        placeholder="Password"
        className="w-full px-4 py-3 bg-secondary rounded-lg placeholder-white mt-4"
        {...register('password')}
      />
      <input
        type="password"
        placeholder="Confirm Password"
        className="w-full px-4 py-3 bg-secondary rounded-lg placeholder-white mt-4"
        {...register('password_confirmation')}
      />
      {providers && providers.length > 0 && (
        <div className="w-full mt-4">
          <p className="text-center text-sm text-gray-400 mb-3">
            Or sign up with
          </p>
          <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
            {providers.map((provider) => (
              <a
                key={provider.name}
                href={provider.redirect_url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center gap-2 p-3 bg-secondary rounded-lg hover:bg-secondary/80 transition"
              >
                <span>
                  {socialIcons[provider.name] ?? (
                    <span className="w-5 h-5">?</span>
                  )}
                </span>
                <span className="text-xxs text-gray-300">
                  {provider.display_name}
                </span>
              </a>
            ))}
          </div>
        </div>
      )}

      <div className="flex justify-center items-center w-full mt-4">
        <button className="flex gap-3 bg-primary px-3 py-2 rounded-md">
          Sign Up
          {isLoading ? <Loader className="animate-spin" /> : <ChevronRight />}
        </button>
      </div>

      <p className="text-secondary-text text-xxs text-center mt-8 mb-8">
        By signing up, you agree to our Terms of Service and Privacy Policy
      </p>
    </form>
  );
};

export default Register;
