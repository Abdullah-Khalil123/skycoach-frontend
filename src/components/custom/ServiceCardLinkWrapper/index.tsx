'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';

export default function ServiceCardLinkWrapper({
  href,
  children,
  className,
}: {
  href: string;
  children: React.ReactNode;
  className: string;
}) {
  const params = useParams();
  const slug = params.slug as string;

  return (
    <Link href={`${slug}/${href}`} className={className}>
      {children}
    </Link>
  );
}
