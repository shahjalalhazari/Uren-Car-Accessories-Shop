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
    <div className="qty-selector">
      <label>Quantity: </label>

      <div className="qty-selector-box">
        {/* Input Field */}
        <input
          type="number"
          value={quantity}
          onChange={handleInputChange}
          className="qty-input-field
                    [&::-webkit-inner-spin-button]:appearance-none 
                    [&::-webkit-outer-spin-button]:appearance-none"
          min={min}
          max={max}
        />

        <div className="flex flex-col">
          {/* Increase Button */}
          <button onClick={handleIncrease} className="qty-inc-dec-btn">
            <FaAngleUp size={14} />
          </button>

          {/* Decrease Button */}
          <button onClick={handleDecrease} className="border-t qty-inc-dec-btn">
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