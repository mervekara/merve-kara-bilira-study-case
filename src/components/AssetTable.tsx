import React, { useState } from "react";
import { useCoinGeckoData } from "../hooks/useCoinGeckoData";
import AssetRow from "./AssetRow";
import Pagination from "./Pagination";
import { FaSpinner } from "react-icons/fa";

const AssetTable: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { data: assets = [], isLoading, error } = useCoinGeckoData(currentPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-full">
        <FaSpinner className="animate-spin text-4xl" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto p-4">
        Error fetching data: {error.message}
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <table className="min-w-full bg-white shadow-md rounded-lg">
        <thead className="bg-gray-50 border-b">
          <tr>
            <th className="py-2 px-8 text-left text-sm font-medium text-gray-500">
              Crypto
            </th>
            <th className="py-2 px-4 text-left text-sm font-medium text-gray-500">
              Price
            </th>
            <th className="py-2 px-4 text-left text-sm font-medium text-gray-500">
              Market Value
            </th>
            <th className="py-2 px-4 text-left text-sm font-medium text-gray-500">
              24h Change
            </th>
            <th className="py-2 px-4 text-left text-sm font-medium text-gray-500"></th>
          </tr>
        </thead>
        <tbody>
          {assets.map((asset) => (
            <AssetRow key={asset.id} asset={asset} />
          ))}
        </tbody>
      </table>
      <Pagination
        currentPage={currentPage}
        itemsPerPage={10}
        totalItems={100}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default AssetTable;
