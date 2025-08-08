import React from 'react';

const Details = () => {
  return (
    <div className="flex px-margin gap-4 mt-4">
      <div className="flex-1 md:flex-none">
        <h4 className="text-2xl mb-2">10-15 min</h4>
        <p className="text-xs">Estimated Start Time</p>
      </div>
      <div className="flex-1">
        <h4 className="text-2xl mb-2 md:flex-none">Flexible</h4>
        <p className="text-xs">Estimated Completion Time</p>
      </div>
    </div>
  );
};

export default Details;
