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
            <div className="p-4">
              <div className="overflow-x-auto"> 
              {/* change */}
              <div >
      
      
      <form >
      
      <h1>Admission form</h1>
      <div >
        {/* Name table */}
      <table>
          <tr><th><label>First name</label></th>
          <th><label>middle name</label></th>
          <th><label>last name</label></th>
          </tr>
        <td><input type="text"/></td>
        <td><input type="text"/></td>
          <td><input type="text"/></td>
        </table>
         {/* parents/guardian and address */}
         <table>
         <tr><th><label>Parents/Guardians</label></th>
          <th><label>Address</label></th>
          </tr>
        <td><input type="text"/></td>
        <td><input type="text"/></td>
        </table>
          
        {/* Occupation */}
        <table>
         <tr><th><label>Father's Occupation</label></th>
          <th><label>Mother's Occupation</label></th>
          </tr>
        <td><input type="text"/></td>
        <td><input type="text"/></td>
        </table>
        {/* employee and how did you know */}
        <table>
         <tr><th><label>How You got to know about MCF Camp</label></th>
          <th><label>Name of the MCF employee who reached out to you</label></th>
          </tr>
          {/* create drop down */}
        <td><input type=""/></td>
        <td><input type="Dropdown"/></td>
        </table>
        {/* LandMark*/}
        <label>Land Mark</label>
        <input type="text"/>
        {/* pick dis state pincode */}
        <table className='address'>
          <tr><th><label>Pick up Point</label></th>
          <th><label>Dist</label></th>
          <th><label>State</label></th>
          <th><label>Pincode</label></th>
          </tr>
          <tr>
        <td><input type="text"/></td>
        <td><input type="text"/></td>
          <td><input type="text"/></td>
          <td><input type="text"/></td>
          </tr>
        </table>
        </div>    
      </form>
    </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button onClick={prevStep} className="btn-secondary mr-2" style={{padding: "5px 10px", background: "#007BFF", color: "white", border: "none", borderRadius: "5px", marginRight: "10px"}}>
        Previous
      </button>
      <button onClick={nextStep} className="btn-primary" style={{padding: "5px 10px", background: "#007BFF", color: "white", border: "none", borderRadius: "5px", marginRight: "10px"}} >
        Next
      </button>
    </div>
  );
};

export default FirstDetails;
