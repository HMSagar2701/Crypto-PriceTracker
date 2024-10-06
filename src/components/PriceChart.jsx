import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import axios from 'axios';

const PriceChart = ({ coinId }) => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchChartData = async () => {
      try {
        const response = await axios.get(`https://api.coingecko.com/api/v3/coins/${coinId}/market_chart`, {
          params: {
            vs_currency: 'usd',
            days: '30', // Last 30 days
          },
        });

        const prices = response.data.prices;
        const labels = prices.map(price => new Date(price[0]).toLocaleDateString());
        const priceValues = prices.map(price => price[1]);

        setData({
          labels: labels,
          datasets: [
            {
              label: 'Price in USD',
              data: priceValues,
              fill: false,
              backgroundColor: 'rgba(75,192,192,0.4)',
              borderColor: 'rgba(75,192,192,1)',
            },
          ],
        });
        setLoading(false);
      } catch (error) {
        console.error("Error fetching chart data: ", error);
        setLoading(false);
      }
    };

    fetchChartData();
  }, [coinId]);

  if (loading) {
    return <div className="text-center text-xl font-bold">Loading Chart...</div>;
  }

  return (
    <div className={`bg-gray-800 p-4 rounded-lg shadow-lg`}>
      <Line
        data={data}
        options={{
          responsive: true,
          plugins: {
            legend: {
              labels: {
                color: 'rgba(255, 255, 255, 0.87)', // Adjust color for dark mode
              },
            },
          },
          scales: {
            x: {
              ticks: {
                color: 'rgba(255, 255, 255, 0.87)', // X-axis ticks color
              },
            },
            y: {
              ticks: {
                color: 'rgba(255, 255, 255, 0.87)', // Y-axis ticks color
              },
            },
          },
        }}
      />
    </div>
  );
};

export default PriceChart;
