import { getHighlightClass } from '../../../../src/utils/highlightClass';

describe('getHighlightClass', () => {
  it('returns an empty string when prevPrice is null', () => {
    const result = getHighlightClass(null, 100);
    expect(result).toBe('text-gray-700');
  });

  it('returns an empty string when currentPrice equals prevPrice', () => {
    const result = getHighlightClass(100, 100);
    expect(result).toBe('text-gray-700');
  });

  it('returns "text-red-700" when currentPrice is less than prevPrice', () => {
    const result = getHighlightClass(110, 100);
    expect(result).toBe('text-red-700');
  });

  it('returns "text-green-700" when currentPrice is greater than prevPrice', () => {
    const result = getHighlightClass(100, 110);
    expect(result).toBe('text-green-700');
  });
});
