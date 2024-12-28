export default function TestimonialRating({ rating }) {
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
          <ion-icon name="star"></ion-icon>
        </span>
      ))}

      {/* Half star */}
      {hasHalfStar && (
        <span className="text-primary text-lg leading-none">
          <ion-icon name="star-half-outline"></ion-icon>
        </span>
      )}

      {/* Empty stars */}
      {[...Array(emptyStars)].map((_, i) => (
        <span key={`empty-${i}`} className="text-primary text-lg leading-none">
          <ion-icon name="star-outline"></ion-icon>
        </span>
      ))}
    </div>
  );
}
