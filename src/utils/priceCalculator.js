export const calculatePrice = (price, discountPercentage) => {
    if (!discountPercentage || discountPercentage <= 0) {
    return {
      originalPrice: price,
      discountedPrice: price,
      hasDiscount: false,
      discountAmount: 0,
      discountPercentage: 0
    };
  }

  const discountAmount = price * (discountPercentage / 100);
  const discountedPrice = price - discountAmount;

  return {
    originalPrice: price,
    discountedPrice: discountedPrice,
    hasDiscount: true,
    discountAmount: discountAmount,
    discountPercentage: discountPercentage
  };
}