// All currency figures must be formatted as follows:

// The value is prefixed with a $ sign
// A comma is used to separate every 3 digits in the thousands, millions, billions, and trillions
// Cents are removed
// All percentage values must be formatted to one decimal digit and be prefixed with a % sign. Don't forget to multiply by 100 each time you're tasked with calculating a percentage value.

export const formatCurrency = (value: number): string => {
  return `$${Math.floor(value).toLocaleString()}`;
};

export const parsePercentage = (percentage: number): string => {
  return `${(percentage * 100).toFixed(1)}%`
}