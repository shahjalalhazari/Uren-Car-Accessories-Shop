"use client"
import { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

const QuantitySelector = ({ min=1, max }) => {
  const [quantity, setQuantity] = useState(min);
  const [message, setMessage] = useState("");

  // HANDLE QUANTITY INCREASE BY BUTTON.
  const handleIncrease = () => {
    setMessage("");
    if (quantity < max) {
      const newQuantity = quantity + 1;
      setQuantity(newQuantity);
    }

    if (quantity === max) {
      setMessage(`Only ${max} items left in stock`)
    }
  };

  // HANDLE QUANTITY DECREASE BY BUTTON.
  const handleDecrease = () => {
    setMessage("");

    if (quantity > min) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
    }

    if (quantity === min) {
      setMessage(`Minimum order quantity is ${min}`);
    }
  };

  // GET THE QUANTITY FROM INPUT FIELD.
  const handleInputChange = (e) => {
    let value = e.target.value;
    
  // ALLOW EMPTY INPUT
    if (value === "") {
      setQuantity("");
      return;
    }

    let numericValue = parseInt(value);

    // HANDLE NON-NUMERIC INPUT.
    if (isNaN(numericValue)) {
      setMessage("Please enter a valid number");
      return;
    };

    // ENFORCE MIN/MAX LIMITS.
    numericValue = Math.max(min, Math.min(max, numericValue));
    setQuantity(numericValue);
    
    if (numericValue >= max) {
      setMessage(`Only ${max} items left in stock`);
    }
    if (numericValue <= min) {
      setMessage(`Minimum order quantity is ${min}`);
    }
  };


  return (
    <div className="qty-selector">
      <label>Quantity: </label>

      {/* INPUT AND BUTTONS */}
      <div className="qty-selector-box">
        {/* INPUT FIEND */}
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
          {/* INCREASE BUTTON */}
          <button onClick={handleIncrease} className="qty-inc-dec-btn">
            <FaAngleUp size={14} />
          </button>

          {/* DECREASE BUTTON */}
          <button onClick={handleDecrease} className="border-t qty-inc-dec-btn">
            <FaAngleDown size={14} />
          </button>
        </div>
      </div>

      {/* DISPLAY MESSAGE */}
      {message && <p className="text-xs text-secondary">{message}</p>}
    </div>
  );
};

export default QuantitySelector;