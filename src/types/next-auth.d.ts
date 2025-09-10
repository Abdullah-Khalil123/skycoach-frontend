import 'next-auth';
import 'next-auth/jwt';

declare module 'next-auth' {
  interface User {
    id: string;
    name: string;
    email: string;
    token: string;
  }

  interface Session {
    accessToken: string;
    user: User;
    expires: ISODateString;
  }
}
