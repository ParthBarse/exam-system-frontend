import React, { useState } from 'react';
import Sidebar from '../partials/Sidebar';
import Header from '../partials/Header';
import { Link } from 'react-router-dom';

function AddCamp() {
  const [sidebarOpen, setSidebarOpen] = useState(false);


  return (
    <div className="flex h-screen overflow-hidden">

      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">

        {/*  Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <main>
        <div className="px-4 sm:px-6 lg:px-8 py-4 w-full max-w-screen-xl mx-auto">
        <div className="col-span-full xl:col-span-12 bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700">
      <header className="px-5 py-4 border-b border-slate-100 dark:border-slate-700" style={{display:'flex', justifyContent:'space-between'}}>
        <h2 className="font-semibold text-slate-800 dark:text-slate-100">Add Camp</h2>
        <Link end to="/camp" className="bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded">Back to camp list</Link>
      </header>
        <div className="p-3 shadow-lg border border-gray-300 rounded-lg">
                <form className="space-y-2">
                    <label className="text-lg font-semibold">Camp Name</label>
                    <input type="text" name="campName" required className="w-full p-3 border rounded-lg text-gray-800 focus:ring focus:ring-blue-400" />

            <label className="text-lg font-semibold">Chess Prefix</label>
            <input type="text" name="chessPrefix" required className="w-full p-3 border rounded-lg text-gray-800 focus:ring focus:ring-blue-400" />

            <label className="text-lg font-semibold">Camp Place</label>
            <input type="text" name="campPlace" required className="w-full p-3 border rounded-lg text-gray-800 focus:ring focus:ring-blue-400" />

            <label className="text-lg font-semibold">Camp Fee</label>
            <input type="number" name="campFee" required className="w-full p-3 border rounded-lg text-gray-800 focus:ring focus:ring-blue-400" />

            <label className="text-lg font-semibold">Camp Fee Description</label>
            <div className="flex items-center space-x-4">
            <input
                type="text" 
                placeholder="Enter Description"
                className="w-1/2 p-3 border rounded-lg text-gray-800 focus:ring focus:ring-blue-400"
            />
            <input
                type="text"
                placeholder="Enter Fee Amount"
                className="w-1/2 p-3 border rounded-lg text-gray-800 focus:ring focus:ring-blue-400"
            />
            <button type="button" className="p-3 text-blue-600 hover:text-blue-800 focus:outline-none focus:ring focus:ring-blue-400">
                Add More Fields
            </button>
            </div>

            <label className="text-lg font-semibold">Camp Fee Discount</label>
            <div className="flex items-center space-x-4">
            <input type="date" className="w-1/2 p-3 border rounded-lg text-gray-800 focus:ring focus:ring-blue-400" />
            <input
                type="text"
                placeholder="Enter the Discount"
                className="w-1/2 p-3 border rounded-lg text-gray-800 focus:ring focus:ring-blue-400"
            />
            <button type="button" className="p-3 text-blue-600 hover:text-blue-800 focus:outline-none focus:ring focus:ring-blue-400">
                Add More Fields
            </button>
            </div>
            <div className="flex items-center space-x-4">
            <input type="checkbox" name="isActive" className="text-blue-500 focus:ring focus:ring-blue-400" />
            <label className="text-lg">Is Active</label>
            </div>
            <button type="submit" className="w-32 p-3 mt-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-400">
            Submit
            </button>
        </form>
        </div>
          </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default AddCamp;