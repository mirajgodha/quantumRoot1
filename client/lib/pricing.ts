export interface PriceInfo {
  originalPrice: number;
  discountedPrice: number;
  discountPercentage: number;
  savingsAmount: number;
}

const defaultDiscountPercentage = 35;

// Course-specific discount overrides
const courseSpecificDiscounts: Record<string, number> = {
  "generative-ai-made-simple-for-everyone-in-business": 75,
};

/**
 * Get discount percentage for a specific course
 * @param courseSlug - Optional course slug to check for specific discount
 * @returns Discount percentage for the course
 */
export function getDiscountPercentage(courseSlug?: string): number {
  if (courseSlug && courseSpecificDiscounts[courseSlug]) {
    return courseSpecificDiscounts[courseSlug];
  }
  return defaultDiscountPercentage;
}

/**
 * Calculate discounted price with course-specific or default discount
 * @param originalPrice - The original price
 * @param courseSlug - Optional course slug to check for specific discount
 * @returns PriceInfo object with pricing details
 */
export function calculateDiscountedPrice(
  originalPrice: number,
  courseSlug?: string,
): PriceInfo {
  const discountPercentage = getDiscountPercentage(courseSlug);
  const discountedPrice = Math.round(
    originalPrice * (1 - discountPercentage / 100),
  );
  const savingsAmount = originalPrice - discountedPrice;

  return {
    originalPrice,
    discountedPrice,
    discountPercentage,
    savingsAmount,
  };
}

/**
 * Format price for display with Indian currency symbol
 * @param price - Price to format
 * @returns Formatted price string
 */
export function formatPrice(price: number): string {
  return `₹${price.toLocaleString("en-IN")}`;
}
