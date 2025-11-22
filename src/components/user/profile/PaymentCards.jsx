const PaymentCards = ({ cardNumber, cardHolder, expiry, cardType }) => {
  const formattedCardNumber = cardNumber.replace(/\d{4}(?=.)/g, "$& ");

  return (
    <div className="max-w-80 bg-gradient-to-r from-blue to-indigo-600 text-white rounded-xl p-6 shadow-lg">
      <div className="flex justify-between items-center mb-8">
        <div className="text-xl font-semibold">{cardType}</div>
      </div>

      <div className="text-lg tracking-widest mb-6 font-mono">
        {formattedCardNumber}
      </div>

      <div className="flex justify-between text-sm">
        <div>
          <div className="text-xs opacity-75">Card Holder</div>
          <div className="font-medium">{cardHolder}</div>
        </div>
        <div>
          <div className="text-xs opacity-75">Expires</div>
          <div className="font-medium">{expiry}</div>
        </div>
      </div>
    </div>
  );
};

export default PaymentCards;