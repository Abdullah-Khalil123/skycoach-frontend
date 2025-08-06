// components/FooterBottom.tsx
import { MessageCircleMore } from 'lucide-react';

export default function FooterBottom() {
  return (
    <div>
      <div className="w-full md:flex justify-between mb-4 gap-4">
        <div>
          <div className="flex gap-4 mb-8">
            <button className="flex gap-2 items-center bg-secondary px-4 py-2 rounded-md">
              Chat with us
              <MessageCircleMore size={20} />
            </button>
            <button className="flex gap-2 items-center bg-secondary px-4 py-2 rounded-md">
              Chat with us
              <MessageCircleMore size={20} />
            </button>
          </div>
          <div className="text-secondary-text text-xs mb-4">
            <p className="mb-2">
              © 2020 — 2025 All rights reserved DEVAL LIMITED 25 Martiou, 27 D.
              Michael Tower, flat/office 105A, Egkomi, 2408 Nicosia, Cyprus
              Reg.No. HE 432317
            </p>
            <p>
              The Platform is not endorsed by, directly affiliated with,
              maintained, or sponsored by Blizzard Entertainment, Bungie,
              Electronic Arts, Grinding Gear Games, Activision Publishing,
              Square Enix Co., Valve, Battlestate Games, Wargaming.net Limited,
              Amazon Technologies, Jagex Limited, Riot Games, Smilegate RPG,
              Digital Extremes. The views and opinions expressed by the Platform
              do not reflect those of anyone officially associated with
              producing or managing their game franchises. Copyrighted art
              submitted to or through the Platform remains the intellectual
              property of the respective copyright holder.
            </p>
          </div>
        </div>

        <div>
          <button className="h-12 w-fit text-nowrap flex gap-2 items-center bg-secondary px-4 py-2 rounded-md">
            Chat with us
            <MessageCircleMore size={20} />
          </button>
          <div className="flex flex-col mt-6 gap-8 text-secondary-text text-xs">
            <p className="mb-2 text-white">+1 234 123 23 43</p>
            <p>support@skycoach.gg</p>
            <p>copyright@skycoach.gg</p>
          </div>
        </div>
      </div>
    </div>
  );
}
