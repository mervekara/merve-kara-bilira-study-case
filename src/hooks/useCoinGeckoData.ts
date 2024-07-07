import { useQuery } from "react-query";
import { fetchData } from "../api";
import { Asset } from "../types";

export const useCoinGeckoData = (page: number) => {
  const {
    data: assets = [],
    isLoading,
    error,
  } = useQuery<Asset[], Error>(["assets", page], () => fetchData(page), {
    keepPreviousData: true,
    refetchInterval: Number(`${process.env.REACT_APP_POLLING_TIME}`),
  });

  return { data: assets, isLoading, error };
};
