import React, { useState } from "react";
import Sidebar from "../partials/Sidebar";
import Header from "../partials/Header";
import data from "../data/RegStudents.json";

function Filter() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        {/* Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <main>
          <div className="text-center my-8">
            <h2 className="text-2xl font-bold">Filter Students by</h2>
          </div>
          <div className="flex justify-center">
            <div className="grid grid-cols-4 grid-rows-2 gap-4">
              <div>
                <label className="block text-gray-600">Name</label>
                <input
                  type="text"
                  className="w-full p-2 border rounded-md"
                  placeholder="name"
                />
              </div>
              <div>
                <label className="block text-gray-600">Reg Id</label>
                <input
                  type="text"
                  className="w-full p-2 border rounded-md"
                  placeholder="Reg Id"
                />
              </div>
              <div>
                <label className="block text-gray-600">E-mail</label>
                <input
                  type="email"
                  className="w-full p-2 border rounded-md"
                  placeholder="email"
                />
              </div>
              <div>
                <label className="block text-gray-600">City</label>
                <input
                  type="text"
                  className="w-full p-2 border rounded-md"
                  placeholder="City"
                />
              </div>
              <div>
                <label className="block text-gray-600">Payment</label>
                <input
                  type="text"
                  className="w-full p-2 border rounded-md"
                  placeholder="Payment-mode"
                />
              </div>
              <div>
                <label className="block text-gray-600">CQY</label>
                <input
                  type="text"
                  className="w-full p-2 border rounded-md"
                  placeholder="CQY"
                />
              </div>
              <div className="text-center">
                <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
                Filter
                </button>
              </div>
            </div>
          </div>
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-screen-xl mx-auto">
            <div className="grid grid-cols-12 gap-6">
              <div className="col-span-full xl:col-span-12 bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700">
                <header className="px-5 py-4 border-b border-slate-100 dark:border-slate-700">
                  <h2 className="font-semibold text-slate-800 dark:text-slate-100">
                    Filterd Students
                  </h2>
                </header>
                <div className="p-4">
                  {/* Table */}
                  <div className="overflow-x-auto">
                    <table
                      className="dark:text-slate-300"
                      style={{ width: "100%" }}
                    >
                      {/* Table header */}
                      <thead className="text-xs uppercase text-slate-400 dark:text-slate-500 bg-slate-50 dark:bg-slate-700 dark:bg-opacity-50 rounded-sm">
                        <tr>
                          <th className="p-2">
                            <div className="font-semibold text-left">Sr.</div>
                          </th>
                          <th className="p-2">
                            <div className="font-semibold text-center">
                              Reg. Id
                            </div>
                          </th>
                          <th className="p-2">
                            <div className="font-semibold text-center">
                              Name
                            </div>
                          </th>
                          <th className="p-2">
                            <div className="font-semibold text-center">
                              Camp
                            </div>
                          </th>
                          <th className="p-2">
                            <div className="font-semibold text-center">
                              E-mail
                            </div>
                          </th>
                          <th className="p-2">
                            <div className="font-semibold text-center">
                              Contact
                            </div>
                          </th>
                          <th className="p-2">
                            <div className="font-semibold text-center">
                              City
                            </div>
                          </th>
                          <th className="p-2">
                            <div className="font-semibold text-center">CQY</div>
                          </th>
                        </tr>
                      </thead>
                      {/* Table body */}
                      <tbody className="text-sm font-medium divide-y divide-slate-100 dark:divide-slate-700">
                        {data.map((item, index) => (
                          <tr key={index}>
                            <td>
                              <div
                                className="text-left"
                                style={{ fontWeight: "bold" }}
                              >
                                {item.id}
                              </div>
                            </td>
                            <td className="p-2">
                              <div className="flex items-center">
                                <div className="text-slate-800 dark:text-slate-100">
                                  {item["reg-id"]}
                                </div>
                              </div>
                            </td>
                            <td className="p-2">
                              <div className="flex items-center">
                                <div className="text-slate-800 dark:text-slate-100">
                                  {item.name}
                                </div>
                              </div>
                            </td>
                            <td className="p-2">
                              <div className="text-center">{item.camp}</div>
                            </td>
                            <td className="p-2">
                              <div className="text-center">{item.email}</div>
                            </td>
                            <td className="p-2">
                              <div className={`text-center`}>
                                {item.contact}
                              </div>
                            </td>
                            <td className="p-2">
                              <div className={`text-center`}>
                                {item.city}
                              </div>
                            </td>
                            <td className="p-2">
                              <div className={`text-center`}>
                                {item.CQY}
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

export default Filter;
