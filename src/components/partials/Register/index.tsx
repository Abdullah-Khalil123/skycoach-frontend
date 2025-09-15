'use client';
import React, { useState } from 'react';
import { ChevronRight, Loader } from 'lucide-react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { RegisterSchema, registerSchema } from '@/types/auth.schema';
import { register as RegisterAction } from '@/actions/auth';
import { toast } from 'sonner';
import { signIn } from 'next-auth/react';
import { AxiosError } from 'axios';
import { useRouter } from 'next/navigation';

const Register = () => {
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
      const res = await signIn('credentials', {
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

      <div className="flex justify-between items-center w-full mt-4">
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
