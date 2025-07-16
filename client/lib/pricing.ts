export interface PriceInfo {
  originalPrice: number;
  discountedPrice: number;
  discountPercentage: number;
  savingsAmount: number;
}

  const discountPercentage = 35;
/**
 * Calculate discounted price with 35% discount
 * @param originalPrice - The original price
 * @returns PriceInfo object with pricing details
 */
export function calculateDiscountedPrice(originalPrice: number): PriceInfo {

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

/** Return discount % */
export function getDiscountPercentage(): number {
  return discountPercentage;
}

/**
 * Format price for display with Indian currency symbol
 * @param price - Price to format
 * @returns Formatted price string
 */
export function formatPrice(price: number): string {
  return `₹${price.toLocaleString("en-IN")}`;
}
