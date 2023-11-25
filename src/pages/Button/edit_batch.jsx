// import React, { useState } from "react";
// import axios from "axios"; // Import Axios
// import Sidebar from "../partials/Sidebar";
// import Header from "../partials/Header";
// import { Link } from "react-router-dom";

// function EditBatch() {
//   const [sidebarOpen, setSidebarOpen] = useState(false);
//   const [batchData, setBatchData] = useState({
//     Batch_Name: "",
//     Batch_Start_Date: "", // Corrected name
//     Batch_End_Date: "",   // Corrected name
//     Intake: "",
//     Company: "",          // Added Company field
//     Duration: "",         // Added Duration field
//     isActive: false,
//   });

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setBatchData({
//       ...batchData,
//       [name]: type === "checkbox" ? checked : value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       // Make a POST request to the API endpoint
//       const response = await axios.post(
//         "https://mcf-backend.vercel.app/api/addBatchDetails",
//         batchData
//       );

//       if (response.status === 200) {
//         console.log("Batch added successfully!");
//         alert('Batch added successfully!');
//         window.location.href = '/batch-details';
//         // Optionally, you can redirect the user to another page or perform other actions
//       } else {
//         console.error("Failed to add batch");
//       }
//     } catch (error) {
//       console.error("Error adding batch:", error);
//     }
//   };

//   return (
//     <div className="flex h-screen overflow-hidden">
//       {/* Sidebar */}
//       <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

//       {/* Content area */}
//       <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
//         {/* Site header */}
//         <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

//         <main>
//           <div className="px-4 sm:px-6 lg:px-8 py-4 w-full max-w-screen-xl mx-auto">
//             <div className="col-span-full xl:col-span-12 bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700">
//               <header
//                 className="px-5 py-4 border-b border-slate-100 dark:border-slate-700"
//                 style={{ display: "flex", justifyContent: "space-between" }}
//               >
//                 <h2 className="font-semibold text-slate-800 dark:text-slate-100">
//                   Add Batch
//                 </h2>
//                 <Link
//                   end
//                   to="/batch-details"
//                   className="bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded"
//                 >
//                   Back to Batch list
//                 </Link>
//               </header>
//               <div className="p-3 shadow-lg border border-gray-300 rounded-lg">
//                 <form onSubmit={handleSubmit}>
//                   <div className="mb-4">
//                     <label htmlFor="batchName" className="block text-gray-700">
//                       Batch Name
//                     </label>
//                     <input
//                       type="text"
//                       id="batchName"
//                       name="Batch_Name"
//                       value={batchData.Batch_Name}
//                       onChange={handleChange}
//                       className="w-full p-2 border rounded-lg"
//                     />
//                   </div>
//                   <div className="flex flex-row mb-4">
//                     <div className="flex flex-col p-4 w-1/2">
//                       <label htmlFor="startDate" className="block text-gray-700">
//                         Start Date
//                       </label>
//                       <input
//                         type="date"
//                         id="startDate"
//                         name="Batch_Start_Date"
//                         value={batchData.Batch_Start_Date}
//                         onChange={handleChange}
//                         className="w-full border rounded-lg p-2"
//                       />
//                     </div>
//                     <div className="flex flex-col p-4 w-1/2">
//                       <label htmlFor="endDate" className="block text-gray-700">
//                         End Date
//                       </label>
//                       <input
//                         type="date"
//                         id="endDate"
//                         name="Batch_End_Date"
//                         value={batchData.Batch_End_Date}
//                         onChange={handleChange}
//                         className="w-full border rounded-lg p-2"
//                       />
//                     </div>
//                   </div>
//                   <div className="flex flex-row mb-4">
//                     <div className="flex flex-col p-4 w-1/2">
//                       <label htmlFor="Company" className="block text-gray-700">
//                         Company
//                       </label>
//                       <input
//                         type="text"
//                         id="Company"
//                         name="Company"
//                         value={batchData.Company}
//                         onChange={handleChange}
//                         className="w-full p-2 border rounded-lg"
//                       />
//                     </div>
//                     <div className="flex flex-col p-4 w-1/2">
//                       <label htmlFor="Duration" className="block text-gray-700">
//                         Duration
//                       </label>
//                       <input
//                         type="text"
//                         id="Duration"
//                         name="Duration"
//                         value={batchData.Duration}
//                         onChange={handleChange}
//                         className="w-full p-2 border rounded-lg"
//                       />
//                     </div>
//                   </div>
//                   <div className="mb-4">
//                     <label htmlFor="batchIntake" className="block text-gray-700">
//                       Batch Intake
//                     </label>
//                     <input
//                       type="text"
//                       id="batchIntake"
//                       name="Intake"
//                       value={batchData.Intake}
//                       onChange={handleChange}
//                       className="w-full p-2 border rounded-lg"
//                     />
//                   </div>
//                   <div className="mb-4">
//                     <label className="block text-gray-700">
//                       <input
//                         type="checkbox"
//                         name="isActive"
//                         checked={batchData.isActive}
//                         onChange={handleChange}
//                         className="mr-2 leading-tight"
//                       />
//                       Is Active
//                     </label>
//                   </div>
//                   <button
//                     type="submit"
//                     className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
//                   >
//                     Submit
//                   </button>
//                 </form>
//               </div>
//             </div>
//           </div>
//         </main>
//       </div>
//     </div>
//   );
// }

// export default EditBatch;
