// HotNowSection.tsx
import { getHotServices } from '@/actions/services';
import HotNowClient from './HotNowClient';

export default async function HotNowSection() {
  const data = await getHotServices();
  const services = data.data.all_services;

  // Pre-render with server → SEO friendly
  return <HotNowClient initialServices={services} />;
}
