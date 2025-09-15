'use client';
import { AnimatePresence, motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div className="lg:flex lg:items-center lg:my-auto lg:h-screen">
      {/* Animated Image Section */}
      <div className="md:px-16 md:mt-8 lg:mt-0 lg:w-1/2">
        <div className="relative aspect-video lg:aspect-square h-full w-full overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={`image-${pathname}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
              className="absolute inset-0"
            >
              <Image
                src={
                  pathname === '/auth/login'
                    ? '/login-image.png'
                    : '/login-image.png'
                }
                alt="auth"
                fill
                className="md:rounded-t-4xl lg:rounded-4xl object-cover"
                priority
              />
              <div className="lg:hidden absolute bg-gradient-to-t from-black/70 to-transparent inset-0" />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Animated Form Section */}
      <div className="flex-1 flex justify-center items-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={`form-${pathname}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="w-full flex justify-center"
          >
            <div className="flex flex-col items-center">
              <Image
                alt="logo"
                className="invert"
                src={'/next.svg'}
                width={150}
                height={20}
                priority
              />
              <div className="flex items-center text-xs gap-2 mt-4">
                {pathname === '/auth/register' ? (
                  <p>First time here?</p>
                ) : (
                  <p>Already have an account?</p>
                )}
                <Link
                  href={
                    pathname === '/auth/register'
                      ? '/auth/login'
                      : '/auth/register'
                  }
                  className="bg-secondary px-3 py-2 rounded-md"
                >
                  {pathname === '/auth/register' ? 'Sign In' : 'Sign up'}
                </Link>
              </div>
              {children}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
