import React from 'react';
import PropTypes from 'prop-types';

const CardComponent = ({ 
  className, 
  imageSrc, 
  productName, 
  productPrice, 
  discountOffer, 
  onAddToCart 
}) => {
  return (
    <div className={`bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden ${className}`}>
      <img src={imageSrc} alt={productName} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">{productName}</h2>
        {discountOffer && (
          <p className="text-white border-transparent rounded-md inline-block bg-red-600 p-1 font-semibold mt-1">{discountOffer}</p>
        )}
        <div className="flex items-center justify-between mt-2">
          <p className="text-gray-700 dark:text-gray-300 font-bold">${productPrice}</p>
          <button 
            onClick={onAddToCart} 
            className="bg-cyan-700 hover:bg-cyan-800 text-white font-bold py-2 px-4 rounded"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

CardComponent.propTypes = {
  className: PropTypes.string,
  imageSrc: PropTypes.string.isRequired,
  productName: PropTypes.string.isRequired,
  productPrice: PropTypes.number.isRequired,
  discountOffer: PropTypes.string,
  onAddToCart: PropTypes.func.isRequired
};

export default CardComponent;
