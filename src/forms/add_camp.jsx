import React, { useState } from 'react';
import Sidebar from '../partials/Sidebar';
import Header from '../partials/Header';
import { Link } from 'react-router-dom';

function AddCamp() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [formData, setFormData] = useState({
    _id: '654e8bf95490a9b536d89427',
    Name: '',
    Chess_Prefix: '',
    Venue: '',
    Fees: '',
    Description: '',
    Fee_Discount: '',
    Discount_date: '',
    Status: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleCheckboxChange = () => {
    setFormData((prevData) => ({
      ...prevData,
      Status: prevData.Status === 'Active' ? 'Inactive' : 'Active',
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://mcf-backend.vercel.app/api/AddCamp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Camp added successfully!');
        alert('Camp added successfully!');
        window.location.href = '/camp';
        // Optionally, you can redirect the user to another page or perform other actions
      } else {
        console.error('Failed to add camp');
      }
    } catch (error) {
      console.error('Error:', error);
    }
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
          <div className="px-4 sm:px-6 lg:px-8 py-4 w-full max-w-screen-xl mx-auto">
            <div className="col-span-full xl:col-span-12 bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700">
              <header className="px-5 py-4 border-b border-slate-100 dark:border-slate-700" style={{ display: 'flex', justifyContent: 'space-between' }}>
                <h2 className="font-semibold text-slate-800 dark:text-slate-100">Add Camp</h2>
                <Link end to="/camp" className="bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded">Back to camp list</Link>
              </header>
              <div className="p-3 shadow-lg border border-gray-300 rounded-lg">
                <form className="space-y-2" onSubmit={handleSubmit}>
                  <label className="text-lg font-semibold">Camp Name</label>
                  <input
                    type="text"
                    name="Name"
                    value={formData.Name}
                    onChange={handleChange}
                    required
                    className="w-full p-3 border rounded-lg text-gray-800 focus:ring focus:ring-blue-400"
                  />

                  <label className="text-lg font-semibold">Chess Prefix</label>
                  <input
                    type="text"
                    name="Chess_Prefix"
                    value={formData.Chess_Prefix}
                    onChange={handleChange}
                    required
                    className="w-full p-3 border rounded-lg text-gray-800 focus:ring focus:ring-blue-400"
                  />

                  <label className="text-lg font-semibold">Camp Place</label>
                  <input
                    type="text"
                    name="Venue"
                    value={formData.Venue}
                    onChange={handleChange}
                    required
                    className="w-full p-3 border rounded-lg text-gray-800 focus:ring focus:ring-blue-400"
                  />

                  <label className="text-lg font-semibold">Camp Fee</label>
                  <input
                    type="number"
                    name="Fees"
                    value={formData.Fees}
                    onChange={handleChange}
                    required
                    className="w-full p-3 border rounded-lg text-gray-800 focus:ring focus:ring-blue-400"
                  />

                  <label className="text-lg font-semibold">Camp Description</label>
                  <input
                    type="text"
                    name="Description"
                    value={formData.Description}
                    onChange={handleChange}
                    required
                    className="w-full p-3 border rounded-lg text-gray-800 focus:ring focus:ring-blue-400"
                  />

                  <label className="text-lg font-semibold">Fee Discount</label>
                  <input
                    type="text"
                    name="Fee_Discount"
                    value={formData.Fee_Discount}
                    onChange={handleChange}
                    required
                    className="w-full p-3 border rounded-lg text-gray-800 focus:ring focus:ring-blue-400"
                  />

                  <label className="text-lg font-semibold">Discount Date</label>
                  <input
                    type="date"
                    name="Discount_date"
                    value={formData.Discount_date}
                    onChange={handleChange}
                    required
                    className="w-full p-3 border rounded-lg text-gray-800 focus:ring focus:ring-blue-400"
                  />

                  <div className="flex items-center space-x-4">
                    <input
                      type="checkbox"
                      name="Status"
                      checked={formData.Status === 'Active'}
                      onChange={handleCheckboxChange}
                      className="text-blue-500 focus:ring focus:ring-blue-400"
                    />
                    <label className="text-lg">Is Active</label>
                  </div>

                  <button
                    type="submit"
                    className="w-32 p-3 mt-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-400"
                  >
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
