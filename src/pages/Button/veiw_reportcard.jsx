import React from 'react';
import pic from './favicon.png';

function ViewReportCard() {
  return (
    <div className="w-full max-w-screen-xl mx-auto bg-white rounded-md overflow-hidden shadow-md">
      <header className="px-5 py-4 border-b border-slate-100 dark:border-slate-700 text-center">
  <h2 className="font-bold text-3xl text-slate-800 dark:text-slate-100">MCF Report Card</h2>
</header>

      <div className="mx-auto my-8 p-4 bg-white">
        <div className=" gap-6">
          <div className="col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3">
            {/* Left side - Photo and Sign */}
          <div className='grid grid-cols-3 flex flex-col  mb-8'>
  <div className="col-span-1 flex ">
    <div className="bg-blue-200 p-2 flex-2 mr-4">
      <h3 className="mb-2">Photo</h3>
      <div className="bg-white"><img src={pic} alt="A descriptive text" /></div>
      <div className="mt-2">
        <h3 className="mb-2">Sign</h3>
        <div className="bg-white  p-4">Content for Sign</div>
      </div>
    </div>
  </div>
  <div className="flex flex-col h-full col-span-2">
    <table className="w-full table-auto mt-4 mx-auto border mb-4">
      <thead>
        <tr>
          <th colSpan="2" className="p-4 bg-gray-200">Student Details</th>
        </tr>
      </thead>
      <tbody>
          <tr>
            <td colSpan="1" className="border p-2 col-span-1">Name</td>
            <td colSpan="2" className="border p-2 col-span-2 text-left">Value 1</td>
          </tr>
          <tr>
            <td className="border p-2 col-span-1">Reg id</td>
            <td colSpan="2" className="border p-2 col-span-2 text-left">Value 1</td>
          </tr>
          <tr>
            <td className="border p-2 col-span-1">adress</td>
            <td colSpan="2" className="border p-2 col-span-2 text-left">Value 1</td>
          </tr>
          <tr>
            <td className="border p-2 col-span-1">mobile number</td>
            <td colSpan="2" className="border p-2 col-span-2 text-left">Value 1</td>
          </tr>
          <tr>
            <td className="border p-2 col-span-1">Camp name</td>
            <td colSpan="2" className="border p-2 col-span-2 text-left">Value 1</td>
          </tr>
          <tr>
            <td className="border p-2 col-span-1">Camp place</td>
            <td colSpan="2" className="border p-2 col-span-2 text-left">Value 1</td>
          </tr>
          <tr>
            <td className="border p-2 col-span-1">Camp Date</td>
            <td colSpan="2" className="border p-2 col-span-2 text-left">Value 1</td>
          </tr>
          <tr>
            <td className="border p-2 col-span-1">Incharge</td>
            <td colSpan="2" className="border p-2 col-span-2 text-left">Value 1</td>
          </tr>
          <tr>
            <td className="border p-2 col-span-1">CQY</td>
            <td colSpan="2" className="border p-2 col-span-2 text-left">Value 1</td>
          </tr>
          <tr>
            <td className="border p-2 col-span-1">Parameter 2</td>
            <td colSpan="2" className="border p-2 col-span-2 text-left">Value 1</td>
          </tr>
          {/* Repeat for other parameters and values */}
        </tbody>

          </table>
              </div>
          </div>
        </div>
          <hr style={{ fontWeight: '800' }} />
          <div className=" flex justify-center mt-8">
          {/* Lower part - Table full width for another set of 8 fields and their values */}
          <table className="w-2/3 table-auto mb-4 border text-center">
          <thead>
              <tr>
                <th colSpan="2" className="p-4 bg-blue-200">Grading parameters</th>
              </tr>
            </thead>
          <thead>
            <tr>
              <th className="p-4 border-b border-r bg-gray-200">Parameter</th>
              <th className="p-4 border-b bg-gray-200">Value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-4 border-r border-b">Parameter : data</td>
              <td className="p-4 border-b">Parameter : data</td>
            </tr>
            <tr>
              <td className="p-4 border-r border-b">Parameter : data</td>
              <td className="p-4 border-b">Parameter : data</td>
            </tr>
            <tr>
              <td className="p-4 border-r border-b">Parameter : data</td>
              <td className="p-4 border-b">Parameter : data</td>
            </tr>
            <tr>
              <td className="p-4 border-r border-b">Parameter : data</td>
              <td className="p-4 border-b">Parameter : data</td>
            </tr>
            <tr>
              <td className="p-4 border-r border-b">Parameter : data</td>
              <td className="p-4 border-b">Parameter : data</td>
            </tr>
            <tr>
              <td className="p-4 border-r border-b">Parameter : data</td>
              <td className="p-4 border-b">Parameter : data</td>
            </tr>
            <tr>
              <td className="p-4 border-r border-b">Parameter : data</td>
              <td className="p-4 border-b">Parameter : data</td>
            </tr>
            {/* Repeat for other parameters and ratings */}
          </tbody>
          </table>

          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewReportCard;
