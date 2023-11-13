import React, { useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "../partials/Sidebar";
import Header from "../partials/Header";
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';


function UpdateStudentDetails() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [studentId, setStudentId] = useState('')
  const location = useLocation();


  const [formData, setFormData] = useState({
    First: '',
    middle: '',
    last: '',
    parents: '',
    Address: '',
    Fathers_Occupation: '',
    Mothers_Occupation: '',
    How_You_Got_to_Know: '',
    Employee_Who_Reached_Out_to_You: '',
    Landmark: '',
    Pick_Up_Point: '',
    District: '',
    State: '',
    Pincode: '',
  });
  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const id = queryParams.get('id');
    setStudentId(id);
    axios.get(`https://mcf-backend.vercel.app/api/getStudent/${studentId}`)
      .then(res => res.data)
      .then(data => setFormData((prevData) => ({
        ...prevData,
        uuid:data.uuid,
        First: data.First,
        middle: data.middle,
        last: data.last,
        parents: data.parents,
        Address: data.Address,
        Fathers_Occupation: data.Fathers_Occupation,
        Mothers_Occupation: data.Mothers_Occupation,
        How_You_Got_to_Know: data.How_You_Got_to_Know,
        Employee_Who_Reached_Out_to_You: data.Employee_Who_Reached_Out_to_You,
        Landmark: data.Landmark,
        Pick_Up_Point: data.Pick_Up_Point,
        District: data.District,
        State: data.State,
        Pincode: data.Pincode,
      })))
  }, [location.search,studentId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    console.log(name, value)
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Make a POST request using axios
      const response = await axios.put(`https://mcf-backend.vercel.app/api/updateStudent/${studentId}`, formData);

      console.log(response.data); // Log the response from the server
      alert('student details updated successfully')

      // After successfully adding a student, you might want to reset the form
      setFormData({
        First: '',
        middle: '',
        last: '',
        parents: '',
        Address: '',
        Fathers_Occupation: '',
        Mothers_Occupation: '',
        How_You_Got_to_Know: '',
        Employee_Who_Reached_Out_to_You: '',
        Landmark: '',
        Pick_Up_Point: '',
        District: '',
        State: '',
        Pincode: '',
      });
      nextStep()
    } catch (error) {
      console.error('Error adding student:', error);
    }
  };

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
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
                        <input id="firstName" name='First' value={formData.First} type="text" className="w-full px-3 py-2 border rounded shadow appearance-none" placeholder="First Name" onChange={handleChange} />
                      </div>
                      <div className="mb-4">
                        <label htmlFor="middleName" className="block text-sm font-medium text-gray-600">Middle Name</label>
                        <input id="middleName" name='middle' value={formData.middle} type="text" className="w-full px-3 py-2 border rounded shadow appearance-none" placeholder="Middle Name" onChange={handleChange} />
                      </div>
                      <div className="mb-4">
                        <label htmlFor="lastName" className="block text-sm font-medium text-gray-600">Last Name</label>
                        <input id="lastName" name='last' value={formData.last} type="text" className="w-full px-3 py-2 border rounded shadow appearance-none" placeholder="Last Name" onChange={handleChange} />
                      </div>
                    </div>
                    {/* Parents/Guardians and Address */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="mb-4">
                        <label htmlFor="parentsGuardians" className="block text-sm font-medium text-gray-600">Parents/Guardians</label>
                        <input id="parentsGuardians" name='parents' value={formData.parents} type="text" className="w-full px-3 py-2 border rounded shadow appearance-none" placeholder="Parents/Guardians" onChange={handleChange} />
                      </div>
                      <div className="mb-4">
                        <label htmlFor="address" className="block text-sm font-medium text-gray-600">Address</label>
                        <input id="address" name='Address' value={formData.Address} type="text" className="w-full px-3 py-2 border rounded shadow appearance-none" placeholder="Address" onChange={handleChange} />
                      </div>
                    </div>
                    {/* Father's and Mother's Occupation */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="mb-4">
                        <label htmlFor="fatherOccupation" className="block text-sm font-medium text-gray-600">Father's Occupation</label>
                        <input id="fatherOccupation" name='Fathers_Occupation' value={formData.Fathers_Occupation} type="text" className="w-full px-3 py-2 border rounded shadow appearance-none" placeholder="Father's Occupation" onChange={handleChange} />
                      </div>
                      <div className="mb-4">
                        <label htmlFor="motherOccupation" className="block text-sm font-medium text-gray-600">Mother's Occupation</label>
                        <input id="motherOccupation" name='Mothers_Occupation' value={formData.Mothers_Occupation} type="text" className="w-full px-3 py-2 border rounded shadow appearance-none" placeholder="Mother's Occupation" onChange={handleChange} />
                      </div>
                    </div>
                    {/* How You Got to Know and MCF Employee */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="mb-4">
                        <label htmlFor="howYouKnow" className="block text-sm font-medium text-gray-600">How You Got to Know about MCF Camp</label>
                        <input id="howYouKnow" name='How_You_Got_to_Know' value={formData.How_You_Got_to_Know} type="text" className="w-full px-3 py-2 border rounded shadow appearance-none" placeholder="How You Got to Know" onChange={handleChange} />
                      </div>
                      <div className="mb-4">
                        <label htmlFor="mcfEmployee" className="block text-sm font-medium text-gray-600">Name of the MCF Employee Who Reached Out to You</label>
                        <input id="mcfEmployee" name='Employee_Who_Reached_Out_to_You' value={formData.Employee_Who_Reached_Out_to_You} type="text" className="w-full px-3 py-2 border rounded shadow appearance-none" placeholder="MCF Employee's Name" onChange={handleChange} />
                      </div>
                    </div>
                    {/* Landmark */}
                    <div className="mb-4">
                      <label htmlFor="landmark" className="block text-sm font-medium text-gray-600">Landmark</label>
                      <input id="landmark" name='Landmark' value={formData.Landmark} type="text" className="w-full px-3 py-2 border rounded shadow appearance-none" placeholder="Landmark" onChange={handleChange} />
                    </div>
                    {/* Pick Up Point, District, State, and Pincode */}
                    <div className="grid grid-cols-4 gap-4">
                      <div className="mb-4">
                        <label htmlFor="pickupPoint" className="block text-sm font-medium text-gray-600">Pick Up Point</label>
                        <input id="pickupPoint" name='Pick_Up_Point' value={formData.Pick_Up_Point} type="text" className="w-full px-3 py-2 border rounded shadow appearance-none" placeholder="Pick Up Point" onChange={handleChange} />
                      </div>
                      <div className="mb-4">
                        <label htmlFor="district" className="block text-sm font-medium text-gray-600">District</label>
                        <input id="district" name='District' value={formData.District} type="text" className="w-full px-3 py-2 border rounded shadow appearance-none" placeholder="District" onChange={handleChange} />
                      </div>
                      <div className="mb-4">
                        <label htmlFor="state" className="block text-sm font-medium text-gray-600">State</label>
                        <input id="state" name='State' value={formData.State} type="text" className="w-full px-3 py-2 border rounded shadow appearance-none" placeholder="State" onChange={handleChange} />
                      </div>
                      <div className="mb-4">
                        <label htmlFor="pincode" className="block text-sm font-medium text-gray-600">Pincode</label>
                        <input id="pincode" name='Pincode' value={formData.Pincode} type="text" className="w-full px-3 py-2 border rounded shadow appearance-none" placeholder="Pincode" onChange={handleChange} />
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className='flex justify-around '>

            <button onClick={handleSubmit} className="btn-primary" style={{ padding: "5px 10px", background: "#007BFF", color: "white", border: "none", borderRadius: "5px", marginRight: "10px" }}>
              Update
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UpdateStudentDetails;
