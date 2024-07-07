import { Asset } from "../types";

export const fetchData = async (page: number): Promise<Asset[]> => {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_BASE_URL}/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=${page}&sparkline=true`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      },
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch data: ${response.statusText}`);
    }

    const data = await response.json();
    return data.map((item: any) => ({
      id: item.id,
      name: item.name,
      symbol: item.symbol,
      image: item.image,
      price: item.current_price,
      marketCap: item.market_cap,
      percentChange24h: item.price_change_percentage_24h,
      sparklineData: item.sparkline_in_7d.price,
    }));
  } catch (error) {
    throw error;
  }
};
