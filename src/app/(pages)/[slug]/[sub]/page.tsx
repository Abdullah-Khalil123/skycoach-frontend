import { getServicesByCategory } from '@/actions/services';
import SubGame from '@/components/partials/SubGame';
import { ServicesByCategory } from '@/types/services';
import React from 'react';

const SubGamePage = async ({
  params,
}: {
  params: Promise<{
    slug: string;
    sub: string;
  }>;
}) => {
  const { slug, sub } = await params;

  const data = await getServicesByCategory(slug, sub);
  const services: ServicesByCategory = data?.data || {};

  return (
    <div>
      <SubGame services={services} />
    </div>
  );
};

export default SubGamePage;
