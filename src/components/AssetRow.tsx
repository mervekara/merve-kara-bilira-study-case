import React from "react";
import { AssetProps } from "../types";
import { formatNumber } from "../utils/formatNumber";
import { formatMarketValue } from "../utils/formatMarketValue";
import { GoArrowUpRight, GoArrowDownRight } from "react-icons/go";
import useAssetPriceFlash from "../hooks/useAssetPriceFlash";
import ChartComponent from "./ChartComponent";

const AssetRow: React.FC<AssetProps> = ({ asset }) => {
  const flashClass = useAssetPriceFlash(null, asset.price);
  const percentChange24h = Number(asset.percentChange24h.toFixed(2));

  const sparklineColor =
    percentChange24h > 0 ? "green" : percentChange24h < 0 ? "red" : "gray";

  return (
    <tr className="border-b">
      <td className="py-2 px-4 flex items-center space-x-3 h-18">
        <img
          src={asset.image}
          alt={asset.name}
          className="w-8 h-8 rounded-full"
          onError={(e) => {
            e.currentTarget.src = "/default-image.png";
          }}
        />
        <div className="flex flex-col">
          <span className="font-medium">
            {asset.symbol.toUpperCase()}{" "}
            <span className="text-gray-500"> / USDT</span>
          </span>
          <span className="text-gray-500">{asset.name}</span>
        </div>
      </td>
      <td className="py-2 px-4 h-18">
        <span className={`${flashClass} text-l font-bold`}>
          {formatNumber(asset.price)}
        </span>
        <span className="text-xs text-gray-500"> USDT</span>
      </td>
      <td className="py-2 px-4 h-18">
        <span className="text-l font-bold">
          {formatMarketValue(asset.marketCap)}
        </span>
        <span className="text-xs text-gray-500"> USDT</span>
      </td>
      <td
        className={`py-2 px-4 h-18 ${
          percentChange24h > 0
            ? "text-green-500"
            : percentChange24h < 0
              ? "text-red-500"
              : "text-gray-500"
        }`}
      >
        <span className="text-s">
          {percentChange24h > 0 ? (
            <GoArrowUpRight className="inline" />
          ) : percentChange24h < 0 ? (
            <GoArrowDownRight className="inline" />
          ) : null}
        </span>
        <span className="text-s font-medium">
          {Math.abs(asset.percentChange24h).toFixed(2)}%
        </span>
      </td>
      <td className="py-2 px-4 h-18">
        <ChartComponent
          sparklineData={asset.sparklineData}
          sparklineColor={sparklineColor}
        />
      </td>
    </tr>
  );
};

export default AssetRow;
