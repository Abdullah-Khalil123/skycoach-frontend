import Footer from '@/components/layouts/Footer';
import NavBar from '@/components/layouts/NavBar';
import React from 'react';

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="pt-18 md:pt-0">
      <NavBar />
      {children}
      <Footer />
    </div>
  );
};

export default layout;
