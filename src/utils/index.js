const formatNumberToCurrency = number => (
  Number(number).toLocaleString(
    'es-AR',
    {
      style: 'currency',
      currency: 'ARS',
      currencyDisplay: 'symbol',
      maximumFractionDigits: 2,
    },
  )
);

export default formatNumberToCurrency;
