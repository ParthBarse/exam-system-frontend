import React from 'react';
import DoughnutChart from '../../charts/DoughnutChart';

// Import utilities
import { tailwindConfig } from '../../utils/Utils';

function DashboardCard06() {

  const chartData = {
    labels: ['Success', 'Pending', 'Cancelled'],
    datasets: [
      {
        label: 'Fees Paid',
        data: [
          45, 20, 35,
        ],
        backgroundColor: [
          tailwindConfig().theme.colors.emerald[500],
          tailwindConfig().theme.colors.blue[400],
          tailwindConfig().theme.colors.red[500],
        ],
        hoverBackgroundColor: [
          tailwindConfig().theme.colors.green[600],
          tailwindConfig().theme.colors.blue[500],
          tailwindConfig().theme.colors.red[900],
        ],
        borderWidth: 0,
      },
    ],
  };

  return (
    <div className="flex flex-col col-span-full sm:col-span-6 xl:col-span-4 bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700">
      <header className="px-5 py-4 border-b border-slate-100 dark:border-slate-700">
        <h2 className="font-semibold text-slate-800 dark:text-slate-100">Student Payment Status</h2>
      </header>
      {/* Chart built with Chart.js 3 */}
      {/* Change the height attribute to adjust the chart height */}
      <DoughnutChart data={chartData} width={389} height={260} />
    </div>
  );
}

export default DashboardCard06;
