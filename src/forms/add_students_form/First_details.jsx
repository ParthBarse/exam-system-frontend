import React from "react";

const FirstDetails = ({ nextStep, prevStep }) => {
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
                Enter Your Details 
              </h2>
            </header>
              <div className="overflow-x-auto"> 
              <form className="  rounded px-8 pt-6 pb-8 mb-4">
      <div className="grid grid-cols-3 gap-4">
        {/* Name fields */}
        <div className="mb-4">
          <label htmlFor="firstName" className="block text-sm font-medium text-gray-600">First Name</label>
          <input id="firstName" type="text" className="w-full px-3 py-2 border rounded shadow appearance-none" placeholder="First Name" />
        </div>
        <div className="mb-4">
          <label htmlFor="middleName" className="block text-sm font-medium text-gray-600">Middle Name</label>
          <input id="middleName" type="text" className="w-full px-3 py-2 border rounded shadow appearance-none" placeholder="Middle Name" />
        </div>
        <div className="mb-4">
          <label htmlFor="lastName" className="block text-sm font-medium text-gray-600">Last Name</label>
          <input id="lastName" type="text" className="w-full px-3 py-2 border rounded shadow appearance-none" placeholder="Last Name" />
        </div>
      </div>
      {/* Parents/Guardians and Address */}
      <div className="grid grid-cols-2 gap-4">
        <div className="mb-4">
          <label htmlFor="parentsGuardians" className="block text-sm font-medium text-gray-600">Parents/Guardians</label>
          <input id="parentsGuardians" type="text" className="w-full px-3 py-2 border rounded shadow appearance-none" placeholder="Parents/Guardians" />
        </div>
        <div className="mb-4">
          <label htmlFor="address" className="block text-sm font-medium text-gray-600">Address</label>
          <input id="address" type="text" className="w-full px-3 py-2 border rounded shadow appearance-none" placeholder="Address" />
        </div>
      </div>
      {/* Father's and Mother's Occupation */}
      <div className="grid grid-cols-2 gap-4">
        <div className="mb-4">
          <label htmlFor="fatherOccupation" className="block text-sm font-medium text-gray-600">Father's Occupation</label>
          <input id="fatherOccupation" type="text" className="w-full px-3 py-2 border rounded shadow appearance-none" placeholder="Father's Occupation" />
        </div>
        <div className="mb-4">
          <label htmlFor="motherOccupation" className="block text-sm font-medium text-gray-600">Mother's Occupation</label>
          <input id="motherOccupation" type="text" className="w-full px-3 py-2 border rounded shadow appearance-none" placeholder="Mother's Occupation" />
        </div>
      </div>
      {/* How You Got to Know and MCF Employee */}
      <div className="grid grid-cols-2 gap-4">
        <div className="mb-4">
          <label htmlFor="howYouKnow" className="block text-sm font-medium text-gray-600">How You Got to Know about MCF Camp</label>
          <input id="howYouKnow" type="text" className="w-full px-3 py-2 border rounded shadow appearance-none" placeholder="How You Got to Know" />
        </div>
        <div className="mb-4">
          <label htmlFor="mcfEmployee" className="block text-sm font-medium text-gray-600">Name of the MCF Employee Who Reached Out to You</label>
          <input id="mcfEmployee" type="text" className="w-full px-3 py-2 border rounded shadow appearance-none" placeholder="MCF Employee's Name" />
        </div>
      </div>
      {/* Landmark */}
      <div className="mb-4">
        <label htmlFor="landmark" className="block text-sm font-medium text-gray-600">Landmark</label>
        <input id="landmark" type="text" className="w-full px-3 py-2 border rounded shadow appearance-none" placeholder="Landmark" />
      </div>
      {/* Pick Up Point, District, State, and Pincode */}
      <div className="grid grid-cols-4 gap-4">
        <div className="mb-4">
          <label htmlFor="pickupPoint" className="block text-sm font-medium text-gray-600">Pick Up Point</label>
          <input id="pickupPoint" type="text" className="w-full px-3 py-2 border rounded shadow appearance-none" placeholder="Pick Up Point" />
        </div>
        <div className="mb-4">
          <label htmlFor="district" className="block text-sm font-medium text-gray-600">District</label>
          <input id="district" type="text" className="w-full px-3 py-2 border rounded shadow appearance-none" placeholder="District" />
        </div>
        <div className="mb-4">
          <label htmlFor="state" className="block text-sm font-medium text-gray-600">State</label>
          <input id="state" type="text" className="w-full px-3 py-2 border rounded shadow appearance-none" placeholder="State" />
        </div>
        <div className="mb-4">
          <label htmlFor="pincode" className="block text-sm font-medium text-gray-600">Pincode</label>
          <input id="pincode" type="text" className="w-full px-3 py-2 border rounded shadow appearance-none" placeholder="Pincode" />
        </div>
      </div>
              </form>
              </div>
          </div>
        </div>
      </div>
      <div className='flex justify-around '>
      <button onClick={prevStep} className="btn-secondary mr-2" style={{padding: "5px 10px", background: "#007BFF", color: "white", border: "none", borderRadius: "5px", marginRight: "10px"}}>
        Previous
      </button>
      <button onClick={nextStep} className="btn-primary" style={{padding: "5px 10px", background: "#007BFF", color: "white", border: "none", borderRadius: "5px", marginRight: "10px"}}>
        Next
      </button>
      </div>
    </div>
  );
};

export default FirstDetails;