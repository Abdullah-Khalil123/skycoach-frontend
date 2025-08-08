'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';

export default function ServiceCardLinkWrapper({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  const params = useParams();
  const slug = params.slug as string;

  return <Link href={`${slug}/${href}`}>{children}</Link>;
}
