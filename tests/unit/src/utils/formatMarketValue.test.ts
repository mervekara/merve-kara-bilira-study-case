import { formatMarketValue } from '../../../../src/utils/formatMarketValue';

describe('formatMarketValue', () => {
  it('formats values less than 1000 correctly', () => {
    expect(formatMarketValue(100)).toBe('100.00');
    expect(formatMarketValue(999)).toBe('999.00');
  });

  it('formats values with K units correctly', () => {
    expect(formatMarketValue(1000)).toBe('1.00K');
    expect(formatMarketValue(1500)).toBe('1.50K');
    expect(formatMarketValue(999999)).toBe('1000.00K');
  });

  it('formats values with M units correctly', () => {
    expect(formatMarketValue(1000000)).toBe('1.00M');
    expect(formatMarketValue(1500000)).toBe('1.50M');
    expect(formatMarketValue(999999999)).toBe('1000.00M');
  });

  it('formats values with B units correctly', () => {
    expect(formatMarketValue(1000000000)).toBe('1.00B');
    expect(formatMarketValue(1500000000)).toBe('1.50B');
    expect(formatMarketValue(999999999999)).toBe('1000.00B');
  });

  it('formats values with T units correctly', () => {
    expect(formatMarketValue(1000000000000)).toBe('1.00T');
    expect(formatMarketValue(1500000000000)).toBe('1.50T');
    expect(formatMarketValue(999999999999999)).toBe('1000.00T');
  });

  it('handles zero value', () => {
    expect(formatMarketValue(0)).toBe('0.00');
  });

  it('handles negative values', () => {
    expect(formatMarketValue(-100)).toBe('-100.00');
  });

  it('handles very large values', () => {
    expect(formatMarketValue(1000000000000000)).toBe('1000.00T');
    expect(formatMarketValue(999999999999999999)).toBe('1000000.00T');
  });
});
