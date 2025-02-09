import axios from 'axios';

export async function getCryptoData(topic: string) {
  const response = await axios.get(
    `https://api.coingecko.com/api/v3/coins/${topic.toLowerCase()}?localization=false&tickers=false`
  );
  
  return {
    price: response.data.market_data.current_price.usd,
    change24h: response.data.market_data.price_change_percentage_24h,
    marketCap: response.data.market_data.market_cap.usd
  };
}