import React from 'react';
import { Star } from 'lucide-react';
const ReviewCard = () => {
  return (
    <div>
      <div className="bg-secondary p-6 rounded-xl flex flex-col">
        <div className="flex items-center mb-2">
          {[...Array(5)].map((_, index) => (
            <Star key={index} fill="green" stroke="green" />
          ))}
        </div>
        <h3 className="text-2xl font-semibold mb-4">Awesome Gaming Service</h3>
        <p className="text-white text-sm font-semibold mb-1">
          "I've had the pleasure of working with and I must are exceptional.
          Their is fast and making the entire experience a breeze. they is
          nothing short of excellent, meeting all my expectations and more. I
          highly recommend Skycoach their outstmding service and top- products."
        </p>
        <span className="text-sm font-semibold text-secondary-text">
          John Doe
        </span>
      </div>
    </div>
  );
};

export default ReviewCard;
