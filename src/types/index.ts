export interface Asset {
  id: string;
  name: string;
  symbol: string;
  image: string;
  price: number;
  marketCap: number;
  percentChange24h: number;
  sparklineData: number[];
}

export interface AssetProps {
  asset: Asset;
}

export interface PaginationProps {
  currentPage: number;
  itemsPerPage: number;
  totalItems: number;
  onPageChange: (page: number) => void;
}

export interface ChartProps {
  sparklineData: number[];
  sparklineColor: string;
}
