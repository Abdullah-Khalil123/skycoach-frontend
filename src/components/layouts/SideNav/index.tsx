import React from 'react';

const links = [
  '🔥 Summer Sale',
  '🔥 Season 04',
  'Accounts',
  'Black Ops 6',
  'Modern Warfare 3',
  'Warzone',
  'Warzone Mobile',
];

const SideNav = () => {
  return (
    <div className="min-w-64 h-screen text-white p-4 hidden lg:block">
      <h3 className="text-sm mb-4 font-bold text-secondary-text">
        CALL OF DUTY
      </h3>
      <ul>
        {links.map((link, index) => (
          <li
            key={index}
            className="px-2 cursor-pointer border-b border-secondary-foreground/70 py-2 hover:bg-secondary-foreground rounded"
          >
            {link}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideNav;
