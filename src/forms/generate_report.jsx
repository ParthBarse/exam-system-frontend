import React, { useState } from 'react';
import Sidebar from '../partials/Sidebar';
import Header from '../partials/Header';
import { Link } from 'react-router-dom';

const StudentGradingForm = ({ formData, handleChange, handleSubmit }) => {
  return (
    <form className="space-y-2" onSubmit={handleSubmit}>
      <div className="flex flex-wrap -mx-2">
        <div className="w-full md:w-1/2 px-2 mb-4">
          <label className="block text-gray-700">Name:</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} required className="w-full p-2 border rounded-lg" />
        </div>
        <div className="w-full md:w-1/2 px-2 mb-4">
          <label className="block text-gray-700">Registration ID:</label>
          <input type="text" name="regId" value={formData.regId} onChange={handleChange} required className="w-full p-2 border rounded-lg" />
        </div>
        <div className="w-full md:w-1/2 px-2 mb-4">
          <label className="block text-gray-700">Rank:</label>
          <input type="text" name="rank" value={formData.rank} onChange={handleChange} required className="w-full p-2 border rounded-lg" />
        </div>
        <div className="w-full md:w-1/2 px-2 mb-4">
          <label className="block text-gray-700">Date:</label>
          <input type="date" name="date" value={formData.date} onChange={handleChange} required className="w-full p-2 border rounded-lg" />
        </div>
        <div className="w-full md:w-1/2 px-2 mb-4">
          <label className="block text-gray-700">Camp Name:</label>
          <input type="text" name="campName" value={formData.campName} onChange={handleChange} required className="w-full p-2 border rounded-lg" />
        </div>
        <div className="w-full md:w-1/2 px-2 mb-4">
          <label className="block text-gray-700">In Charge:</label>
          <input type="text" name="inCharge" value={formData.inCharge} onChange={handleChange} required className="w-full p-2 border rounded-lg" />
        </div>
        <div className="w-full md:w-1/2 px-2 mb-4">
          <label className="block text-gray-700">CQY:</label>
          <input type="text" name="cqy" value={formData.cqy} onChange={handleChange} required className="w-full p-2 border rounded-lg" />
        </div>
      </div>
      <hr></hr>
      <h3 className="text-center font-bold text-xl pb-6">Grading Parameters</h3>
      <div className="grid grid-cols-2 gap-4">
        {Object.keys(formData).map(
          (key) =>
            key !== 'name' &&
            key !== 'regId' &&
            key !== 'rank' &&
            key !== 'date' &&
            key !== 'campName' &&
            key !== 'inCharge' &&
            key !== 'cqy' && (
              <div key={key} className="flex items-center space-x-4 mb-2">
                <span>{key.charAt(0).toUpperCase() + key.slice(1)}:</span>
                {[1, 2, 3, 4, 5].map((rating) => (
                  <label key={rating} className="inline-flex items-center">
                    <input
                      type="checkbox"
                      name={`${key}_${rating}`}
                      checked={formData[key] === rating.toString()}
                      onChange={() => handleChange({ target: { name: key, value: rating.toString() } })}
                      className="form-checkbox text-blue-500"
                    />
                    <span className="ml-2 text-gray-700">{rating}</span>
                  </label>
                ))}
              </div>
            )
        )}
      </div>
      <button
        type="submit"
        className="w-32 p-3 mt-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-400"
      >
        Submit
      </button>
    </form>
  );
};

const GenerateReport = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    regId: '',
    rank: '',
    date: '',
    campName: '',
    inCharge: '',
    cqy: '',
    discipline: 'average',
    physicalFitness: 'average',
    courage: 'average',
    leadership: 'average',
    initiative: 'average',
    interpersonal_Relations: 'average',
    teamBuilding: 'average',
    training: 'average',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // Add logic for form submission
  };

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <main>
          <div className="px-4 sm:px-6 lg:px-8 py-4 w-full max-w-screen-xl mx-auto">
            <div className="col-span-full xl:col-span-12 bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700">
              <header className="px-5 py-4 border-b border-slate-100 dark:border-slate-700" style={{ display: 'flex', justifyContent: 'space-between' }}>
                <h2 className="font-semibold text-slate-800 dark:text-slate-100">Generate Report</h2>
                <Link end to="/ReportCard" className="bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded">Back to Report Cards</Link>
              </header>
              <div className="p-3 shadow-lg border border-gray-300 rounded-lg">
                <StudentGradingForm formData={formData} handleChange={handleChange} handleSubmit={handleSubmit} />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default GenerateReport;