import 'next-auth';
import 'next-auth/jwt';

declare module 'next-auth' {
  export interface User {
    id: string;
    nickname: string;
    email: string;
    email_verified_at: string | null;
    vip_level: number | string;
    balance: number | string;
    last_login_at: string | null;
    token: string;
  }

  interface Session {
    accessToken: string;
    user: User;
    expires: ISODateString;
  }
}
