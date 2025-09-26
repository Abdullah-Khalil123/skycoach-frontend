import Register from '@/components/partials/Register';
import AuthLayout from '../AuthLayout';
import { getProviderList } from '@/actions/auth';
import { AuthProvider } from '@/types/authProviders';

export default async function RegisterPage() {
  const data = await getProviderList();
  const providers: AuthProvider[] = data.data;
  return (
    <AuthLayout>
      <Register providers={providers} />
    </AuthLayout>
  );
}
