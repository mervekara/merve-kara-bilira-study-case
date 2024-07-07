export const formatMarketValue = (value: number): string => {
  const units = ["", "K", "M", "B", "T"];
  let unitIndex = 0;
  let formattedValue = value;

  while (formattedValue >= 1000 && unitIndex < units.length - 1) {
    formattedValue /= 1000;
    unitIndex++;
  }

  return `${formattedValue.toFixed(2)}${units[unitIndex]}`;
};
