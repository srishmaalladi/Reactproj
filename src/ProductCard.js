import React from 'react';

const ProductCard = () => {
  return (
    <div className="product-card border rounded-lg shadow-md overflow-hidden relative p-4">
      <div className="text-center p-2">
        <a
          className="outline-none"
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.amazon.in/dp/B0CYX1TGRG"
        >
          <img
            className="mx-auto h-auto w-48"
            src="https://m.media-amazon.com/images/I/81GSDOO1BeL._AC_UL320_.jpg"
            alt="Gear Hello Panda School Bag"
          />
        </a>
      </div>

      <div className="px-2">
        <span className="text-sm text-gray-500">Sponsored</span>
        <h2 className="text-lg font-semibold mt-1 text-gray-800">Gear</h2>
        <a
          className="text-blue-700 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.amazon.in/dp/B0CYX1TGRG"
        >
          <h3 className="text-base font-medium mt-1">
            Hello Panda Medium Water Resistant School Bag/Casual Backpack/Daypack/Travel Backpack/Kids Bag for Boys/Girls
          </h3>
        </a>
      </div>

      <div className="px-2 mt-2 text-sm">
        <div className="flex items-center space-x-1">
          <span className="text-yellow-500">★★★☆☆</span>
          <a
            className="text-blue-600 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.amazon.in/dp/B0CYX1TGRG#customerReviews"
          >
            27 ratings
          </a>
        </div>
        <div className="text-gray-500">50+ bought in past month</div>
      </div>
    </div>
  );
};

export default ProductCard;
