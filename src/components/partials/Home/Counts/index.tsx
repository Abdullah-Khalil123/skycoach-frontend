import React from 'react';

const items = [
  {
    title: 'Unique Offers',
    count: '1,234',
  },
  {
    title: 'in-house PROs',
    count: '3,000',
  },
  {
    title: 'Completed Orders',
    count: '1.2M',
  },
  {
    title: 'Happy Customers',
    count: '200K',
  },
];

const CountsSection = () => {
  return (
    <div className=" mt-8 grid gap-4 grid-cols-2 lg:grid-cols-4">
      {items.map((item, index) => (
        <div
          key={index}
          className="rounded-3xl border border-secondary-foreground p-4 w-full"
        >
          <h3 className="text-3xl">{item.count}</h3>
          <p>{item.title}</p>
        </div>
      ))}
    </div>
  );
};

export default CountsSection;
