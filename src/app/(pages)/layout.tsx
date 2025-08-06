import SideNav from '@/components/layouts/SideNav';
import React from 'react';

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="flex px-margin">
      <SideNav />
      <div className="min-w-64">{children}</div>
    </div>
  );
};

export default layout;
