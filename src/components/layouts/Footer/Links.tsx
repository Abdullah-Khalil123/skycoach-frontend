import Link from 'next/link';
import React from 'react';

const footerLink = [
  {
    title: 'Company',
    links: [
      'About Us',
      'Blog',
      'Contact Us',
      'Become a PRO',
      'Cashback',
      'Legit',
      'Customer Service',
      'Login as PRO',
      'Sitemaps',
      'Epoch billing support',
      'FAQ',
    ],
  },
  {
    title: 'Legal & Policies',
    links: [
      'General Terms and Conditions',
      'Terms of Services for Coaches',
      'Terms of Services for Customers',
      'Privacy policy',
      'Cookie policy',
    ],
  },
  {
    title: 'WoW Boost',
    links: [
      'Gold',
      'Horrific Visions',
      'Liberation of Undermine',
      "Nerub'ar Palace",
      'Manaforge Omega',
      'Raids',
      'Dungeons',
      '8 more',
    ],
  },
  {
    title: 'Destiny 2',
    links: [
      'The Desert Perpetual',
      "Salvation's Edge",
      'The Edge of Fate',
      'Raids',
      'Trials of Osiris & PvP',
      'Portal',
      'Exotic Items',
      '9 more',
    ],
  },
  {
    title: 'WoW Pandaria Classic',
    links: [
      '🔥 Summer Sale',
      'Gold',
      'Powerleveling',
      'Challenge Mode',
      'Driving & Farming',
      'Dungeons',
      'Raids',
      '14 more',
    ],
  },
  {
    title: 'Company',
    links: [
      'About Us',
      'Blog',
      'Contact Us',
      'Become a PRO',
      'Cashback',
      'Legit',
      'Customer Service',
      'Login as PRO',
      'Sitemaps',
      'Epoch billing support',
      'FAQ',
    ],
  },
  {
    title: 'Legal & Policies',
    links: [
      'General Terms and Conditions',
      'Terms of Services for Coaches',
      'Terms of Services for Customers',
      'Privacy policy',
      'Cookie policy',
    ],
  },
  {
    title: 'WoW Boost',
    links: [
      'Gold',
      'Horrific Visions',
      'Liberation of Undermine',
      "Nerub'ar Palace",
      'Manaforge Omega',
      'Raids',
      'Dungeons',
      '8 more',
    ],
  },
  {
    title: 'Destiny 2',
    links: [
      'The Desert Perpetual',
      "Salvation's Edge",
      'The Edge of Fate',
      'Raids',
      'Trials of Osiris & PvP',
      'Portal',
      'Exotic Items',
      '9 more',
    ],
  },
  {
    title: 'WoW Pandaria Classic',
    links: [
      '🔥 Summer Sale',
      'Gold',
      'Powerleveling',
      'Challenge Mode',
      'Driving & Farming',
      'Dungeons',
      'Raids',
      '14 more',
    ],
  },
];

const FooterLinks = () => {
  return (
    <div className="grid gap-4 grid-cols-[repeat(auto-fit,minmax(200px,1fr))] mt-8">
      {footerLink.map((section, index) => (
        <div key={index} className="mb-6">
          <h3 className="text-lg mb-2">{section.title}</h3>
          <ul className="text-secondary-text text-xs">
            {section.links.slice(0, 7).map((link, idx) => (
              <li key={idx} className="mb-2">
                <Link
                  href={link.toLowerCase().replace(' ', '-').toLowerCase()}
                  key={idx}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  {link}
                </Link>
              </li>
            ))}
            {section.links.length > 7 && (
              <Link
                href={section.title}
                className="font-semibold text-secondary-text/40 cursor-pointer hover:text-white"
              >
                {section.links.length - 7} more...
              </Link>
            )}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default FooterLinks;
