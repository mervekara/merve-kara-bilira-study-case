import React from "react";
import { PaginationProps } from "../types";

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  itemsPerPage,
  totalItems,
  onPageChange,
}) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePrevClick = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNextClick = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <div className="flex justify-center py-4 space-x-1">
      <button
        className="px-4 py-2 border rounded-md bg-gray-200 hover:bg-gray-300"
        disabled={currentPage === 1}
        onClick={handlePrevClick}
      >
        Prev
      </button>
      {Array.from({ length: totalPages }, (_, index) => (
        <button
          key={index + 1}
          className={`px-4 py-2 border rounded-md ${currentPage === index + 1 ? "bg-blue-500 text-white" : "bg-gray-200 hover:bg-gray-300"}`}
          onClick={() => onPageChange(index + 1)}
        >
          {index + 1}
        </button>
      ))}
      <button
        className="px-4 py-2 border rounded-md bg-gray-200 hover:bg-gray-300"
        disabled={currentPage === totalPages}
        onClick={handleNextClick}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
