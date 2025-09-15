'use client';
import React, { useState } from 'react';
import { ChevronRight, Loader2 as Loader } from 'lucide-react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { LoginSchema, loginSchema } from '@/types/auth.schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { getSession, signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

const Login = () => {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: 'test@admin.com',
      password: 'password123',
    },
  });

  const onSubmit: SubmitHandler<LoginSchema> = async (data) => {
    setIsSubmitting(true);
    const res = await signIn('credentials', {
      email: data.email,
      password: data.password,
      redirect: false,
    });
    if (res?.error) {
      setIsSubmitting(false);
      toast.error(res.code || 'Login failed', {
        description: 'Please check your credentials and try again.',
      });
    } else {
      router.push('/');
      setIsSubmitting(false);
    }
  };

  return (
    <form
      className="px-margin flex lg:justify-center flex-col items-center md:max-w-96 mx-auto"
      onSubmit={handleSubmit(onSubmit)}
    >
      <h2 className="mb-8 text-3xl mt-8 tracking-tight">Welcome back</h2>
      <input
        type="text"
        placeholder="Email"
        className="w-full px-4 py-3 bg-secondary rounded-lg placeholder-white"
        {...register('email')}
      />
      {errors.email && (
        <p className="text-red-500 text-xs w-full mt-2">
          {errors.email.message}
        </p>
      )}
      <input
        type="password"
        placeholder="Password"
        className="w-full px-4 py-3 bg-secondary rounded-lg placeholder-white mt-4"
        {...register('password')}
      />
      {errors.password && (
        <p className="text-red-500 text-xs w-full mt-2">
          {errors.password.message}
        </p>
      )}

      <div className="flex justify-between items-center w-full mt-4">
        <button
          type="button"
          className="bg-secondary px-3 py-1 rounded h-fit text-xs"
        >
          Forgot password
        </button>
        <button
          type="submit"
          disabled={isSubmitting}
          className="flex gap-3 bg-primary px-3 py-2 rounded-md outline-none cursor-pointer"
        >
          Login
          {isSubmitting ? (
            <Loader className="animate-spin" />
          ) : (
            <ChevronRight />
          )}
        </button>
      </div>

      <p className="text-secondary-text text-xxs text-center mt-8 mb-8">
        By logging in, you agree to our Terms of Service and Privacy Policy
      </p>
    </form>
  );
};

export default Login;
