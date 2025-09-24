import React from 'react';
import { Star } from 'lucide-react';
import { Review } from '@/types/review';
const ReviewCard = ({ review }: { review: Review }) => {
  return (
    <div>
      <div className="bg-secondary p-6 rounded-xl flex flex-col">
        <div className="flex items-center mb-2">
          {[...Array(review.rating)].map((_, index) => (
            <Star key={index} fill="green" stroke="green" />
          ))}
        </div>
        <h3 className="text-2xl font-semibold mb-4">{review.title}</h3>
        <p className="text-white text-xs mb-1">
          {review.content.length > 100
            ? review.content.substring(0, 100) + '...'
            : review.content}
        </p>
        <span className="text-sm font-semibold text-secondary-text">
          {review.reviewer_name}
        </span>
      </div>
    </div>
  );
};

export default ReviewCard;
