import { Search } from 'lucide-react';

const SmallLeftNav = () => {
  return (
    <div className="hidden ml-4 lg:flex flex-col bg-secondary rounded-2xl px-4 py-4 col-start-4 row-span-full">
      <div className="relative">
        <Search className="absolute top-1/2 -translate-y-1/2 left-2 " />
        <input
          type="text"
          className="block pl-10 w-60 bg-secondary-foreground rounded-lg h-fit px-4 py-3 placeholder-white"
          placeholder="Search by games"
        />
      </div>
      <ul className="mt-4">
        {Array.from({ length: 15 }).map((_, index) => (
          <li
            className="text-secondary-text hover:text-white py-2 cursor-pointer transition-colors duration-200"
            key={index}
          >
            Item {index}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SmallLeftNav;
