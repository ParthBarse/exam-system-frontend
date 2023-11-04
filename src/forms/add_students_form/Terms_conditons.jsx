import React from 'react';

const Agreement = ({ nextStep, prevStep }) => {
  return (
    <div>
      {/* Payment Form */}
      <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-screen-xl mx-auto">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-full xl:col-span-12 bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700">
            <header
              className="px-5 py-4 border-b border-slate-100 dark:border-slate-700"
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <h2 className="font-semibold text-slate-800 dark:text-slate-100">
                Terms and condition
              </h2>
            </header>
            <div className="p-4">
              <div className="overflow-x-auto"></div>
            </div>
          </div>
        </div>
      </div>
      <button onClick={prevStep} className="btn-secondary mr-2" style={{padding: "5px 10px", background: "#007BFF", color: "white", border: "none", borderRadius: "5px", marginRight: "10px"}}>
        Previous
      </button>
      <button onClick={nextStep} className="btn-primary" style={{padding: "5px 10px", background: "#007BFF", color: "white", border: "none", borderRadius: "5px", marginRight: "10px"}}>
        Next
      </button>
    </div>
  );
};

export default Agreement;