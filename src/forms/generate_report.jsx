import React, { useState } from 'react';
import Sidebar from '../partials/Sidebar';
import Header from '../partials/Header';
import { Link } from 'react-router-dom';

const StudentGradingForm = () => {
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
    // Add logic to handle form submission, e.g., API call or local storage
    console.log(formData);
  };

  return (
    <form className="space-y-2" onSubmit={handleSubmit}>
      {/* Student Information */}
      <label>
        Name:
        <input type="text" name="name" value={formData.name} onChange={handleChange} required />
      </label>

      <label>
        Registration ID:
        <input type="text" name="regId" value={formData.regId} onChange={handleChange} required />
      </label>

      <label>
        Rank:
        <input type="text" name="rank" value={formData.rank} onChange={handleChange} required />
      </label>

      <label>
        Date:
        <input type="date" name="date" value={formData.date} onChange={handleChange} required />
      </label>

      <label>
        Camp Name:
        <input type="text" name="campName" value={formData.campName} onChange={handleChange} required />
      </label>

      <label>
        In Charge:
        <input type="text" name="inCharge" value={formData.inCharge} onChange={handleChange} required />
      </label>

      <label>
        CQY:
        <input type="text" name="cqy" value={formData.cqy} onChange={handleChange} required />
      </label>

      <h3>Grading Parameters</h3>
      {Object.keys(formData).map((key) => (
        key !== 'name' &&
        key !== 'regId' &&
        key !== 'rank' &&
        key !== 'date' &&
        key !== 'campName' &&
        key !== 'inCharge' &&
        key !== 'cqy' && (
          <div key={key} className="flex items-center space-x-4">
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
      ))}
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
                <h2 className="font-semibold text-slate-800 dark:text-slate-100">Generate Report</h2>
                <Link end to="/ReportCard" className="bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded">Back to Report Cards</Link>
              </header>
              <div className="p-3 shadow-lg border border-gray-300 rounded-lg">
                <StudentGradingForm />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default GenerateReport;
