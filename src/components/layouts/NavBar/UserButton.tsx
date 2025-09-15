'use client';
import { cn } from '@/lib/utils';
import { User } from 'lucide-react';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import React from 'react';

const UserButton = ({ styles = true }) => {
  const { status } = useSession();
  return (
    <Link
      href={status === 'authenticated' ? '#' : '/auth/login'}
      className={cn(
        styles && 'px-3 rounded cursor-pointer hover:bg-secondary py-2'
      )}
    >
      <User />
    </Link>
  );
};

export default UserButton;
