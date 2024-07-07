export const getHighlightClass = (
  prevPrice: number | null,
  currentPrice: number,
): string => {
  if (prevPrice === null) return "text-gray-700";

  if (currentPrice === prevPrice) {
    return "text-gray-700";
  }

  return currentPrice > prevPrice ? "text-green-700" : "text-red-700";
};
