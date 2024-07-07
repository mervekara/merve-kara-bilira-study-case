import { formatNumber } from '../../../../src/utils/formatNumber';

describe('formatNumber', () => {
  it('formats whole numbers correctly', () => {
    expect(formatNumber(100)).toBe('100.00');
    expect(formatNumber(1000)).toBe('1,000.00');
  });

  it('formats decimal numbers correctly', () => {
    expect(formatNumber(123.45)).toBe('123.45');
    expect(formatNumber(0.01)).toBe('0.01');
  });

  it('formats negative numbers correctly', () => {
    expect(formatNumber(-100)).toBe('-100.00');
    expect(formatNumber(-0.01)).toBe('-0.01');
  });

  it('formats very small decimal values correctly', () => {
    expect(formatNumber(0.0001)).toBe('0.00');
    expect(formatNumber(-0.0001)).toBe('-0.00');
  });

  it('handles zero correctly', () => {
    expect(formatNumber(0)).toBe('0.00');
  });
});
