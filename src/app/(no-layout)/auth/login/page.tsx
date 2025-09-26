import AuthLayout from '../AuthLayout';
import Login from '@/components/partials/Login';

import { getProviderList } from '@/actions/auth';
import { AuthProvider } from '@/types/authProviders';

export default async function LoginPage() {
  const data = await getProviderList();
  const providers: AuthProvider[] = data.data;
  return (
    <AuthLayout>
      <Login providers={providers} />
    </AuthLayout>
  );
}
