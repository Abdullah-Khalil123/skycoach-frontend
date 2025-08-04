import React from 'react';
import Image from 'next/image';
import { Facebook, Instagram } from 'lucide-react';
import FooterLinks from './Links';
import FooterBottom from './footerBottom';

const Footer = () => {
  return (
    <footer className="py-6 px-8 border-t border-secondary mt-8">
      <div className="flex items-center justify-between">
        <Image
          className="invert"
          alt="logo"
          src={'/next.svg'}
          width={150}
          height={15}
        />
        <div className="flex gap-4">
          <div className="bg-secondary-foreground w-fit p-4 rounded-xl">
            <Instagram />
          </div>

          <div className="bg-secondary-foreground w-fit p-4 rounded-xl">
            <Facebook />
          </div>
        </div>
      </div>
      <FooterLinks />
      <FooterBottom />
    </footer>
  );
};

export default Footer;
