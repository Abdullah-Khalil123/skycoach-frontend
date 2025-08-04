import SideNav from '@/components/layouts/SideNav';
import ReviewSection from '@/components/partials/Home/Reviews';
import React from 'react';

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="flex px-margin">
      <SideNav />

      <div className="min-w-64">
        {children}
        <ReviewSection />
      </div>
    </div>
  );
};

export default layout;
