"use client"
import { useState } from 'react';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';

const QuantitySelector = ({ min = 1, max = 10, onChange }) => {
  const [quantity, setQuantity] = useState(min);
  const [message, setMessage] = useState("");

  const handleIncrease = () => {
    if (quantity < max) {
      const newQuantity = quantity + 1;
      setQuantity(newQuantity);
      onChange && onChange(newQuantity);
    }

    if (quantity === max) {
      setMessage(`Only ${max} items left in stock`)
    }
  };

  const handleDecrease = () => {
    setMessage("");

    if (quantity > min) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
      onChange && onChange(newQuantity);
    }
  };

  const handleInputChange = (e) => {
    let value = parseInt(e.target.value, 10);
    if (isNaN(value)) value = min;
    value = Math.max(min, Math.min(max, value));
    setQuantity(value);
    onChange && onChange(value);

    if (max > value) {
      setMessage(`Only ${max} items left in stock`);
    }
  };

  return (
    <div className="flex items-center space-x-4 my-4">
      <label className="font-bold text-[#999] ">Quantity: </label>

      <div className=" border border-[#ddd] text-[#999]  w-fit flex items-center">
        {/* Input Field */}
        <input
          type="number"
          value={quantity}
          onChange={handleInputChange}
          className="w-12 text-center border-none outline-none appearance-none text-dark
                    [&::-webkit-inner-spin-button]:appearance-none 
                    [&::-webkit-outer-spin-button]:appearance-none"
          min={min}
          max={max}
        />

        <div className="flex flex-col">
          {/* Increase Button */}
          <button
            onClick={handleIncrease}
            className="px-1.5 py-0.5 border-l border-[#ddd]"
          >
            <FaAngleUp size={14} />
          </button>

          {/* Decrease Button */}
          <button
            onClick={handleDecrease}
            className="px-1.5 py-0.5 border-l border-t border-[#ddd]"
          >
            <FaAngleDown size={14} />
          </button>
        </div>
      </div>
      {/* Message */}
      {message && <p className="text-xs text-secondary">{message}</p>}
    </div>
  );
};

export default QuantitySelector;