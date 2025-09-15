import NextAuth, { CredentialsSignin } from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import axios from 'axios';
import { login } from './actions/auth';

export class InvalidLoginError extends CredentialsSignin {
  code = 'custom';
  constructor(message: string) {
    super(message);
    this.code = message;
  }
}

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials) {
        try {
          const response = await login({
            email: (credentials?.email as string) || '',
            password: (credentials?.password as string) || '',
          });

          const { user, token } = response.data;
          if (user && token) {
            return {
              id: user.id,
              nickname: user.nickname,
              email: user.email,
              email_verified_at: user.email_verified_at,
              vip_level: user.vip_level,
              balance: user.balance,
              last_login_at: user.last_login_at,
              token: token,
            };
          }

          return null;
        } catch (error) {
          if (axios.isAxiosError(error)) {
            const message =
              error.response?.data?.message || 'Something went wrong';
            throw new InvalidLoginError(message);
          }
          return null;
        }
      },
    }),
  ],

  session: {
    strategy: 'jwt',
  },
  callbacks: {
    async jwt({ token, user, account }) {
      if (user && account?.type === 'credentials') {
        token.user = user;
        token.accessToken = user.token;
      }
      return token;
    },
    async session({ session, token }) {
      if (token.user) {
        session.user = token.user as typeof session.user;
      }
      session.accessToken = token.accessToken as string;
      return session;
    },
  },
  trustHost: true,
});
