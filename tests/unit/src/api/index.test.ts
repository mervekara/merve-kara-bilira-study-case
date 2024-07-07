import { fetchData } from '../../../../src/api';
import { Asset } from '../../../../src/types';

global.fetch = jest.fn();

describe('fetchData', () => {
  beforeEach(() => {
    (fetch as jest.Mock).mockClear();
  });

  it('fetches data successfully and maps to Asset type', async () => {
    const mockResponse = [
      {
        id: 'bitcoin',
        name: 'Bitcoin',
        symbol: 'BTC',
        image: 'https://example.com/bitcoin.png',
        current_price: 45000,
        market_cap: 850000000,
        price_change_percentage_24h: 5,
        sparkline_in_7d: {
          price: [44000, 44500, 45000]
        }
      }
    ];

    (fetch as jest.Mock).mockResolvedValue({
      ok: true,
      json: async () => mockResponse
    });

    const result = await fetchData(1);
    const expected: Asset[] = [
      {
        id: 'bitcoin',
        name: 'Bitcoin',
        symbol: 'BTC',
        image: 'https://example.com/bitcoin.png',
        price: 45000,
        marketCap: 850000000,
        percentChange24h: 5,
        sparklineData: [44000, 44500, 45000]
      }
    ];

    expect(result).toEqual(expected);
    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith(
      `${process.env.REACT_APP_BASE_URL}/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  });

  it('throws an error when fetch fails', async () => {
    (fetch as jest.Mock).mockResolvedValue({
      ok: false,
      statusText: 'Internal Server Error'
    });

    await expect(fetchData(1)).rejects.toThrow('Failed to fetch data: Internal Server Error');
    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith(
      `${process.env.REACT_APP_BASE_URL}/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  });

  it('handles network errors gracefully', async () => {
    (fetch as jest.Mock).mockRejectedValue(new Error('Network Error'));

    await expect(fetchData(1)).rejects.toThrow('Network Error');
    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith(
      `${process.env.REACT_APP_BASE_URL}/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  });
});
