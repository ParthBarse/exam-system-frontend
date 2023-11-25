import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Sidebar from '../../partials/Sidebar';
import Header from '../../partials/Header';
import { Link } from 'react-router-dom';

function Batchdetails() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('https://mcf-backend.vercel.app/api/getBatchDetails');
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleDelete = async (Batch_id) => {
    try {
      const response = await axios.delete(`https://mcf-backend-main.vercel.app/deleteBatch?batch_id=${Batch_id}`);
      if (response.status === 200) {
        console.log('Batch deleted successfully!');
        alert('Batch deleted successfully!');
        fetchData(); // Refresh the data after deletion
      } else {
        console.error('Failed to delete batch. Status:', response.status);
      }
    } catch (error) {
      console.error('Error deleting batch:', error.message); // Log the error message
      console.error(error.response.data); // Log the response data if available
    }
  };
  

  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <main>
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-screen-xl mx-auto">
            <div className="grid grid-cols-12 gap-6">
              <div className="col-span-full xl:col-span-12 bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700">
                <header
                  className="px-5 py-4 border-b border-slate-100 dark:border-slate-700"
                  style={{ display: 'flex', justifyContent: 'space-between' }}
                >
                  <h2 className="font-semibold text-slate-800 dark:text-slate-100">Camp Batch details</h2>
                  <div>
                    <Link to="/add-batch" className="bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded mr-2">
                      Add Batch
                    </Link>
                    <Link to="/camp" className="bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded">
                      Back to Camp List
                    </Link>
                  </div>
                </header>
                <div className="p-4">
                  {/* Table */}
                  <div className="overflow-x-auto">
                    <table className="dark:text-slate-300" style={{ width: '100%' }}>
                      {/* Table header */}
                      <thead className="text-xs uppercase text-slate-400 dark:text-slate-500 bg-slate-50 dark:bg-slate-700 dark:bg-opacity-50 rounded-sm">
                        <tr>
                          <th className="p-4">
                            <div className="font-semibold text-left">Sr.</div>
                          </th>
                          <th className="p-2">
                            <div className="font-semibold text-left">Batch</div>
                          </th>
                          <th className="p-2">
                            <div className="font-semibold text-center">Batch Start</div>
                          </th>
                          <th className="p-2">
                            <div className="font-semibold text-center">Batch End</div>
                          </th>
                          <th className="p-2">
                            <div className="font-semibold text-center">Company</div>
                          </th>
                          <th className="p-2">
                            <div className="font-semibold text-center">Duration</div>
                          </th>
                          <th className="p-2">
                            <div className="font-semibold text-center">Intake</div>
                          </th>
                          <th className="p-2">
                            <div className="font-semibold text-center">Action</div>
                          </th>
                        </tr>
                      </thead>
                      {/* Table body */}
                      <tbody className="text-sm font-medium divide-y divide-slate-100 dark:divide-slate-700">
                        {/* Rows */}
                        {data.map((item, index) => (
                          <tr style={{ padding: '2px' }} key={index}>
                            <td>
                              <div className="text-left" style={{ fontWeight: 'bold' }}>
                                {index + 1}
                              </div>
                            </td>
                            <td className="p-2">
                              <div className="text-left">
                                <div className="text-slate-800 dark:text-slate-100">{item.Batch_Name}</div>
                              </div>
                            </td>
                            <td className="p-2">
                              <div className="text-center">{item.Batch_Start_Date}</div>
                            </td>
                            <td className="p-2">
                              <div className="text-center">{item.Batch_End_Date}</div>
                            </td>
                            <td className="p-2">
                              <div className="text-center">{item.Company}</div>
                            </td>
                            <td className="p-2">
                              <div className="text-center">{item.Duration}</div>
                            </td>
                            <td className="p-2">
                              <div className="text-center">{item.Intake}</div>
                            </td>
                            <td className="p-2">
                              <div className="text-center">
                              <Link
                                  to={`/edit-batch-details?id=${item.camp_id}`}
                                  className="text-sm text-white px-2 bg-yellow-500 rounded"
                                  style={{
                                    padding: "5px",
                                    fontSize: "13px",
                                    marginLeft: "1px",
                                    marginRight: "2px",
                                  }}
                                >
                                  View & Edit
                                </Link>
                                <button
                                  onClick={() => handleDelete(item.Batch_Name)}
                                  className="text-sm text-white px-2 bg-red-500 rounded"
                                  style={{ marginLeft: '10px', padding: '3px 10px 3px 10px' }}
                                >
                                  Delete
                                </button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Batchdetails;
