export interface PriceInfo {
  originalPrice: number;
  discountedPrice: number;
  discountPercentage: number;
  savingsAmount: number;
}

/**
 * Calculate discounted price with 55% discount
 * @param originalPrice - The original price
 * @returns PriceInfo object with pricing details
 */
export function calculateDiscountedPrice(originalPrice: number): PriceInfo {
  const discountPercentage = 55;
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
