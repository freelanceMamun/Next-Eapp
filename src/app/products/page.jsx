import Link from 'next/link';
import React from 'react';

const products = () => {
  return (
    <div className="products">
      <div className="flex items-center justify-between">
        <div>All Products</div>
        <Link
          className="flex gap-1 cursor-pointer font-medium bg-green-700/95 text-white px-3 py-2 rounded-md"
          href={'/products/addnewproducts'}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
          Add New Products
        </Link>
      </div>
    </div>
  );
};

export default products;
