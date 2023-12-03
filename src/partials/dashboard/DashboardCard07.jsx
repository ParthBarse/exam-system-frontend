import React, { useState, useEffect } from 'react';
import axios from 'axios';

function DashboardCard07() {
  const itemsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);
  const [campData, setCampData] = useState([]);
  const [totalPages, setTotalPages] = useState(0);

  const fetchData = async () => {
    try {
      const response = await axios.get('https://mcf-backend-main.vercel.app/getAllCamps');
      setCampData(response.data.camps); // Update to match the response structure
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    setTotalPages(Math.ceil(campData.length / itemsPerPage));
  }, [campData]);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const itemsToDisplay = campData.slice(startIndex, endIndex);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="col-span-full xl:col-span-8 bg-white dark-bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700">
      <header className="px-5 py-4 border-b border-slate-100 dark:border-slate-700" style={{ display: 'flex', justifyContent: 'space-between' }}>
        {/* Pagination */}
        <button
          className="px-3 py-1 mr-2 bg-blue-500 text-white rounded"
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          {'<'}
        </button>
        <h2 className="text-xl font-semibold text-slate-800 dark:text-slate-100">Active Camps</h2>
        <button
          className="px-3 py-1 ml-2 bg-blue-500 text-white rounded"
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          {'>'}
        </button>
      </header>
      <div className="p-3">
        {/* Table */}
        <div className="overflow-x-auto">
          <table className="table-auto w-full dark-text-slate-300">
            {/* Table header */}
            <thead className="text-xs uppercase text-slate-400 dark-text-slate-500 bg-slate-50 dark-bg-slate-700 dark-bg-opacity-50 rounded-sm">
              <tr>
                <th className="p-2">
                  <div className="font-semibold text-left">Name</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">Venue</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">Status</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">Date</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">Batches</div>
                </th>
              </tr>
            </thead>
            {/* Table body */}
            <tbody className="text-sm font-medium divide-y divide-slate-100 dark-divide-slate-700">
              {itemsToDisplay.map((camp, index) => (
                <tr key={index}>
                  <td className="p-2">
                    <div className="flex items-center">
                      <div className="text-slate-800 dark-text-slate-100">{camp.camp_name}</div>
                    </div>
                  </td>
                  <td className="p-2">
                    <div className="text-center">{camp.camp_place}</div>
                  </td>
                  <td className="p-2">
                    <div className="text-center text-emerald-500">{camp.camp_status}</div>
                  </td>
                  <td className="p-2">
                    <div className="text-center">{camp.camp_date}</div>
                  </td>
                  <td className="p-2">
                    <div className="text-center">{camp.camp_total_batches}</div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default DashboardCard07;
