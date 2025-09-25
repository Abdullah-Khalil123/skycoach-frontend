import React from 'react';
import Image from 'next/image';
import { Dot } from 'lucide-react';
import Link from 'next/link';
import { Service } from '@/types/services';
import { getImageUrl } from '@/utils/getImageUrl';
// import ServiceCardLinkWrapper from '../ServiceCardLinkWrapper';

const ServiceCard = ({
  item,
  gameSlug,
  subGame = false,
}: {
  item: Service;
  gameSlug: string;
  subGame?: boolean;
}) => {
  return (
    <Link
      href={
        subGame
          ? '/' + gameSlug + item.url
          : item.url ||
            `${gameSlug}/services/${item.name
              ?.toLowerCase()
              .replace(/\s+/g, '-')}`
      }
      className={'min-h-82 flex flex-col'}
    >
      <div className="flex flex-col bg-secondary min-h-82 rounded-2xl overflow-hidden group cursor-pointer">
        {/* Image */}
        <div className="relative flex-1">
          <Image
            alt="service image"
            className="grayscale"
            src={getImageUrl(item?.image) || '/bg.jpg'}
            fill
            objectFit="cover"
          />
          <Image
            src={getImageUrl(item?.image) || '/globe.svg'}
            alt="svg"
            fill
            objectFit="contain"
            className="group-hover:scale-105 transition-transform"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-secondary from-10% to-transparent"></div>
        </div>

        {/* Body */}
        <div className="h-1/2 bg-secondary md:min-h-42 md:max-h-42 md:h-2/3 flex flex-col justify-between px-4 pb-4 z-20">
          <div>
            <h2 className="text-xl font-semibold mb-2 md:line-clamp-2 text-ellipsis -mt-8">
              {item.name}
            </h2>

            <ul className="mb-4">
              {item?.features?.map((feature: string, index: number) => (
                <li className="flex items-start text-xs" key={index}>
                  <Dot color="#21c11c" size={20} strokeWidth={4} />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Price */}
          <div className="flex justify-between">
            <p className="text-lg font-bold flex items-center">
              {item.start_price == null && 'Free'}
              {item.start_price != null && (
                <>
                  {'$' + String(item.start_price).split('.')[0]}
                  <sup>{String(item.start_price).split('.')[1] ?? '00'}</sup>
                </>
              )}
            </p>
            <button className="cursor-pointer font-semibold bg-primary text-white px-4 py-3 rounded-lg">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ServiceCard;

// import React from 'react';
// import Image from 'next/image';
// import { Dot } from 'lucide-react';

// const ServiceCard = ({ item }: { item: any }) => {
//   return (
//     <div className="rounded-2xl h-86 md:h-92 overflow-hidden group cursor-pointer flex flex-col">
//       {/* Top Image Section */}
//       <div className="relative h-42">
//         <Image
//           src={'/bg.jpg'}
//           className="grayscale"
//           alt={'itemImage'}
//           fill
//           objectFit="cover"
//         />
//         <Image
//           src={'/globe.svg'}
//           alt="svg"
//           fill
//           objectFit="contain"
//           className="group-hover:scale-105 transition-transform"
//         />
//         <div className="absolute inset-0 bg-gradient-to-t from-secondary from-10% to-transparent"></div>
//       </div>

//       {/* Body Content */}
//       <div className="px-4 bg-secondary pt-2 pb-4 flex flex-col h-42 flex-1/2 md:flex-1/2 -mt-5 z-20">
//         <h2 className="text-xl font-semibold mb-2 md:line-clamp-2 text-ellipsis">
//           {item.title}
//         </h2>

//         <ul className="mb-4">
//           {item.features.map((feature: string, index: number) => (
//             <li className="flex items-start text-xs" key={index}>
//               <Dot color="#21c11c" size={20} strokeWidth={4} />
//               <span>{feature}</span>
//             </li>
//           ))}
//         </ul>

// {/* Bottom Section (Stick to bottom) */}
// <div className="mt-auto flex justify-between items-center">
// <p className="text-lg font-bold flex items-center">
//   {item.price == null && 'Free'}
//   {item.price != null && (
//     <>
//       {'$' + String(item.price).split('.')[0]}
//       <sup>{String(item.price).split('.')[1] ?? '00'}</sup>
//     </>
//   )}
// </p>
//   <button className="cursor-pointer font-semibold bg-primary text-white px-4 py-3 rounded-lg">
//     Buy Now
//   </button>
// </div>
//       </div>
//     </div>
//   );
// };

// export default ServiceCard;
