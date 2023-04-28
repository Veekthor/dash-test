import React from 'react';
import ReactApexChart from 'react-apexcharts';

const WeeklyChart = () => {
  const chartData = {
    series: [
      {
        name: 'Month Sales',
        data: [2200, 2000, 1500, 1800, 2500, 3000],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: 'area',
        toolbar: {
          show: false,
        },
        zoom: {
          enabled: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: 'smooth',
      },
      xaxis: {
        categories: [
          '20 Aug',
          '21 Aug',
          '22 Aug',
          '23 Aug',
          '24 Aug',
          '25 Aug',
        ],
        labels: {
          show: false,
        },
        axisBorder: {
          show: false,
        },
      },
      yaxis: {
        labels: {
          show: false,
        },
        axisBorder: {
          show: false,
        },
      },
      tooltip: {
        enabled: false,
      },
      colors: ['#EF2C5A'],
    },
  };

  return (
    <div id="chart">
      <ReactApexChart
        options={chartData.options}
        series={chartData.series}
        type="area"
        height={170}
      />
    </div>
  );
};

export default WeeklyChart;
