import Icon from "@/lib/components/Icon";

interface TestimonialRatingProps {
  rating: number;
}

export default function TestimonialRating({ rating }: TestimonialRatingProps) {
  // Convert rating to number and ensure it's between 0 and 5
  const numRating = Math.min(5, Math.max(0, Number(rating)));

  // Calculate full and half stars
  const fullStars = Math.floor(numRating);
  const hasHalfStar = numRating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className="flex gap-1">
      {[...Array(fullStars)].map((_, i) => (
        <span key={`full-${i}`} className="text-primary text-lg leading-none">
          <Icon name="star" />
        </span>
      ))}

      {/* Half star */}
      {hasHalfStar && (
        <span className="text-primary text-lg leading-none">
          <Icon name="star-half-outline" />
        </span>
      )}

      {/* Empty stars */}
      {[...Array(emptyStars)].map((_, i) => (
        <span key={`empty-${i}`} className="text-primary text-lg leading-none">
          <Icon name="star-outline" />
        </span>
      ))}
    </div>
  );
}
