'use client';
import React, { useState } from 'react';
import RangeSlider from './RangeInput';

const LevelingInput = () => {
  const [currentLevel, setCurrentLevel] = useState(25);
  const [desiredLevel, setDesiredLevel] = useState(50);

  return (
    <>
      <div className="flex gap-2 items-center max-w-96">
        <div className="flex-1 space-y-2">
          <p>Current Level</p>
          <input
            type="number"
            value={currentLevel}
            onChange={(e) => setCurrentLevel(Number(e.target.value))}
            className="py-3 px-4 rounded-lg bg-secondary-foreground w-full"
          />
        </div>
        <span className="translate-y-3">-</span>
        <div className="flex-1 space-y-2">
          <p>Desired Level</p>
          <input
            type="number"
            value={desiredLevel}
            onChange={(e) => setDesiredLevel(Number(e.target.value))}
            className="py-3 px-4 rounded-lg bg-secondary-foreground w-full"
          />
        </div>
      </div>

      {/* Reusable Slider */}
      <div className="mt-6 mb-4">
        <RangeSlider
          min={1}
          max={100}
          step={1}
          initialMin={currentLevel}
          initialMax={desiredLevel}
          onChange={({ min, max }) => {
            setCurrentLevel(min);
            setDesiredLevel(max);
          }}
        />
      </div>

      {/* Platform */}
      <h3 className="mb-2">Choose Your Platform</h3>
      <p className="mb-4 text-secondary-text text-xs">
        Choose at least on option
      </p>
    </>
  );
};

export default LevelingInput;
