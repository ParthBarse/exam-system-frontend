import React, { useState } from 'react';
import Sidebar from '../partials/Sidebar';
import Header from '../partials/Header';
import data from '../data/RegStudents.json';
import { Link } from 'react-router-dom';

function RegStudent() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10; // Number of items to display per page

  const totalItems = data.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  // Calculate the range of items to display on the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const itemsToDisplay = data.slice(startIndex, endIndex);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        {/* Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <main>
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-screen-xl mx-auto">
            <div className="grid grid-cols-12 gap-6">
              <div className="col-span-full xl:col-span-12 bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700">
                <header className="px-5 py-4 border-b border-slate-100 dark:border-slate-700" style={{display:'flex', justifyContent:'space-between'}}>
                  <h2 className="font-semibold text-slate-800 dark:text-slate-100">Registered Students List</h2>
                  <Link end to="/add-student" className="bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded">Add Student</Link>
                </header>
                <div className="p-4">
                  {/* Table */}
                  <div className="overflow-x-auto">
                    <table className="dark:text-slate-300" style={{ width: '100%' }}>
                      {/* Table header */}
                      <thead className="text-xs uppercase text-slate-400 dark:text-slate-500 bg-slate-50 dark:bg-slate-700 dark:bg-opacity-50 rounded-sm">
                        <tr>
                          <th className="p-2">
                            <div className="font-semibold text-left">Sr.</div>
                          </th>
                          <th className="p-2">
                            <div className="font-semibold text-center">Reg. Id</div>
                          </th>
                          <th className="p-2">
                            <div className="font-semibold text-center">Name</div>
                          </th>
                          <th className="p-2">
                            <div className="font-semibold text-center">Camp</div>
                          </th>
                          <th className="p-2">
                            <div className="font-semibold text-center">Batch</div>
                          </th>
                          <th className="p-2">
                            <div className="font-semibold text-center">Status</div>
                          </th>
                          <th className="p-2">
                            <div className="font-semibold text-center">Misc</div>
                          </th>
                          <th className="p-2">
                            <div className="font-semibold text-center">Action</div>
                          </th>
                        </tr>
                      </thead>
                      {/* Table body */}
                      <tbody className="text-sm font-medium divide-y divide-slate-100 dark:divide-slate-700">
                        {itemsToDisplay.map((item, index) => (
                          <tr key={index}>
                            <td>
                              <div className="text-left" style={{ fontWeight: 'bold' }}>
                                {item.id}
                              </div>
                            </td>
                            <td className="p-2">
                              <div className="flex items-center">
                                <div className="text-slate-800 dark:text-slate-100">{item['reg-id']}</div>
                              </div>
                            </td>
                            <td className="p-2">
                              <div className="flex items-center">
                                <div className="text-slate-800 dark:text-slate-100">{item.name}</div>
                              </div>
                            </td>
                            <td className="p-2">
                              <div className="text-center">{item.camp}</div>
                            </td>
                            <td className="p-2">
                              <div className="text-center">{item.Batch}</div>
                            </td>
                            <td className="p-2">
                              <div className={`text-center ${item.status === 'Inactive' ? 'text-red-500' : 'text-emerald-500'}`}>{item.status}</div>
                            </td>
                            <td className="p-2">
                              <div className="text-center">{item.misc}</div>
                            </td>
                            <td className="p-4">
                              <div className="text-center grid grid-cols-3 grid-rows-2 gap-2 h-full">
                                <button
                                  className="text-sm text-white px-2 bg-yellow-500"
                                  style={{ padding: '1px', fontSize: '13px' }}
                                >
                                  View Form
                                </button>
                                <button
                                  className="text-sm text-white px-2 bg-blue-500"
                                  style={{ padding: '1px', fontSize: '13px' }}
                                >
                                  View & Edit
                                </button>
                                <button className="text-sm text-white px-1 py-2 bg-gray-500"
                                  style={{ padding: '1px', fontSize: '13px' }}>
                                  Edit
                                </button>
                                <button
                                  className="text-sm text-white px-2 bg-indigo-500"
                                  style={{ padding: '1px', fontSize: '13px' }}
                                >
                                  Entrance Card
                                </button>
                                <button
                                  className="text-sm text-white px-2 bg-indigo-500"
                                  style={{ padding: '1px', fontSize: '13px' }}
                                >
                                  Receipt
                                </button>
                                <button className="text-sm text-white px-2 bg-red-500 rounded-full"
                                  style={{ padding: '1px', fontSize: '13px' }}>
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
                    {/* Previous and Next Buttons */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "20px",
          }}
        >
          <button
            style={{
              padding: "5px 10px",
              background: "#007BFF",
              color: "white",
              border: "none",
              borderRadius: "5px",
              marginRight: "10px",
              cursor: currentPage > 1 ? "pointer" : "not-allowed",
            }}
            onClick={() => {
              if (currentPage > 1) {
                handlePageChange(currentPage - 1);
              }
            }}
          >
            &lt;
          </button>
          <button
            style={{
              padding: "5px 10px",
              background: "#007BFF",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: currentPage < totalPages ? "pointer" : "not-allowed",
            }}
            onClick={() => {
              if (currentPage < totalPages) {
                handlePageChange(currentPage + 1);
              }
            }}
          >
            &gt;
          </button>
        </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default RegStudent;
