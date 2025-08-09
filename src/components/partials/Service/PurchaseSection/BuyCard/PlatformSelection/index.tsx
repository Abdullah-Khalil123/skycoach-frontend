'use client';
import React, { useState } from 'react';

const PlatformSelection = ({
  platforms,
  primary = 'bg-primary',
  secondary = 'bg-secondary-foreground',
  color = 'bg-white',
  textColor = 'text-secondary-text',
  borderColor = 'border-gray-300',
}: {
  platforms: { name: string; price: number }[];
  primary?: string;
  secondary?: string;
  color?: string;
  textColor?: string;
  borderColor?: string;
}) => {
  const [selectedPlatform, setSelectedPlatform] = useState(0);

  return (
    <div className="mb-4">
      {platforms.map((platform, index) => (
        <div
          key={index}
          className={`flex items-center py-4 justify-between ${
            platforms.length == index + 1 ? '' : `border-b ${borderColor}`
          }`}
        >
          <div className="flex items-center">
            <label className="flex items-center cursor-pointer">
              <input
                className="hidden"
                type="radio"
                name="platform"
                checked={selectedPlatform === index}
                onChange={() => setSelectedPlatform(index)}
              />
              <span
                className={`size-5 rounded-full relative flex items-center justify-center ${
                  selectedPlatform === index
                    ? `${primary} border-primary `
                    : `border-gray-300 ${secondary} `
                }`}
              >
                {selectedPlatform === index && (
                  <span className={`size-2 rounded-full ${color}`}></span>
                )}
              </span>
              <p className="ml-2 text-xs">{platform.name}</p>
            </label>
          </div>

          {platform.price > 0 && (
            <p className={`text-xs ${textColor}`}>
              +{platform.price.toFixed(2)}
            </p>
          )}
        </div>
      ))}
    </div>
  );
};

export default PlatformSelection;
