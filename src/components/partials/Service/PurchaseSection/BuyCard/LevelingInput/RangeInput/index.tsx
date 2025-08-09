'use client';
import { useState } from 'react';

interface RangeSliderProps {
  min?: number;
  max?: number;
  step?: number;
  initialMin?: number;
  initialMax?: number;
  onChange?: (values: { min: number; max: number }) => void;
}

export default function RangeSlider({
  min = 1,
  max = 100,
  step = 1,
  initialMin = 25,
  initialMax = 50,
  onChange,
}: RangeSliderProps) {
  const [minVal, setMinVal] = useState(initialMin);
  const [maxVal, setMaxVal] = useState(initialMax);

  const handleMinChange = (value: number) => {
    const newMin = Math.min(value, maxVal - step);
    setMinVal(newMin);
    onChange?.({ min: newMin, max: maxVal });
  };

  const handleMaxChange = (value: number) => {
    const newMax = Math.max(value, minVal + step);
    setMaxVal(newMax);
    onChange?.({ min: minVal, max: newMax });
  };

  return (
    <div className="w-full">
      {/* Track */}
      <div className="relative h-2">
        <div className="absolute w-full h-1 bg-gray-600 rounded" />
        <div
          className="absolute h-1 bg-primary rounded"
          style={{
            left: `${((minVal - min) / (max - min)) * 100}%`,
            width: `${((maxVal - minVal) / (max - min)) * 100}%`,
          }}
        />
        {/* Min handle */}
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={minVal}
          onChange={(e) => handleMinChange(Number(e.target.value))}
          className="absolute w-full appearance-none bg-transparent pointer-events-none
            [&::-webkit-slider-thumb]:appearance-none
            [&::-webkit-slider-thumb]:pointer-events-auto
            [&::-webkit-slider-thumb]:h-6
            [&::-webkit-slider-thumb]:w-6
            [&::-webkit-slider-thumb]:rounded-full
            [&::-webkit-slider-thumb]:bg-primary
            [&::-webkit-slider-thumb]:border-2
            [&::-webkit-slider-thumb]:border-primary
            [&::-moz-range-thumb]:h-6
            [&::-moz-range-thumb]:w-6
            [&::-moz-range-thumb]:rounded-full
            [&::-moz-range-thumb]:bg-primary

            [&::-webkit-slider-thumb]:mt-[-10px]
          "
        />
        {/* Max handle */}
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={maxVal}
          onChange={(e) => handleMaxChange(Number(e.target.value))}
          className="absolute w-full appearance-none bg-transparent pointer-events-none
            [&::-webkit-slider-thumb]:appearance-none
            [&::-webkit-slider-thumb]:pointer-events-auto
            [&::-webkit-slider-thumb]:h-6
            [&::-webkit-slider-thumb]:w-6
            [&::-webkit-slider-thumb]:rounded-full
            [&::-webkit-slider-thumb]:bg-primary
            [&::-webkit-slider-thumb]:border-2
            [&::-webkit-slider-thumb]:border-primary
            [&::-moz-range-thumb]:h-6
            [&::-moz-range-thumb]:w-6
            [&::-moz-range-thumb]:rounded-full
            [&::-moz-range-thumb]:bg-primary

            [&::-webkit-slider-thumb]:mt-[-10px]
            "
        />
      </div>

      {/* Labels */}
      <div className="flex justify-between mt-2 ml-4 text-sm text-gray-400">
        {[0, 0.25, 0.5, 0.75, 1].map((fraction, idx) => {
          const raw = min + (max - min) * fraction;
          const val = idx === 4 ? max : Math.floor(raw); // last index is always max
          return (
            <span
              key={idx}
              className={
                val === minVal || val === maxVal ? 'font-bold text-white' : ''
              }
            >
              {val}
            </span>
          );
        })}
      </div>
    </div>
  );
}
