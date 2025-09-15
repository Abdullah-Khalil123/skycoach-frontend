'use client';
import { useSession } from 'next-auth/react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setCredentials, clearCredentials } from '@/store/slices/authSlice';

export function useSyncAuth() {
  const { data: session, status } = useSession();
  const dispatch = useDispatch();

  useEffect(() => {
    if (status === 'authenticated' && session?.user) {
      dispatch(
        setCredentials({
          user: session.user,
          accessToken: session.accessToken,
        })
      );
    } else if (status === 'unauthenticated') {
      dispatch(clearCredentials());
    }
  }, [status, session, dispatch]);
}
