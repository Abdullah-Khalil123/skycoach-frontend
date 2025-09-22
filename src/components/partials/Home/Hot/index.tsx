// HotNowSection.tsx
import { getHotServices } from '@/actions/services';
import HotNowClient from './HotNowClient';
import { Service } from '@/types/services';

export default async function HotNowSection({
  services,
}: {
  services: Service[];
}) {
  // Pre-render with server → SEO friendly
  return <HotNowClient initialServices={services} />;
}
