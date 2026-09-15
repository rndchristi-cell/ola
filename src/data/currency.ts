export const currencyConfig = {
  baseCurrency: 'IDR',
  displayCurrency: 'USD',
  // Perbarui berkala sesuai kurs bisnis yang ingin digunakan. Harga transaksi tetap dikonfirmasi melalui WhatsApp.
  idrPerUsd: 17000,
};

export const formatPrice = (priceInIdr: number, lang: 'id' | 'en' = 'id') => {
  if (lang === 'en') {
    const usd = priceInIdr / currencyConfig.idrPerUsd;
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(usd);
  }
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
  }).format(priceInIdr);
};
