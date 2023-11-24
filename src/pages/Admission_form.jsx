import React, { useState } from 'react';
import axios from 'axios';
import DatePicker from 'react-flatpickr';
import dayjs from 'dayjs';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import { Alert } from '@mui/material';

const baseurl = 'https://mcf-backend-main.vercel.app';

const admission_form = () => {
  const [state, setState] = React.useState({
    open: false,
    vertical: 'top',
    horizontal: 'center',
  });

  const [errorState, setErrorState] = useState({
    open: false,
    vertical: 'top',
    horizontal: 'center',
  });

  const { vertical, horizontal, open } = state;

  const handleClose = () => {
    setState({ ...state, open: false });
  };

  const handleErrorClose = () => {
    setErrorState({ ...errorState, open: false });
  };

  const [formData, setFormData] = useState({
    first_name: '',
    middle_name: '',
    last_name: '',
    email: '',
    phn: '',
    dob: '',
    address: '',
    fathers_occupation: '',
    mothers_occupation: '',
    how_you_got_to_know: '',
    employee_who_reached_out_to_you: '',
    district: '',
    state: '',
    pincode: '',
  });

  const [admissionFormData, setAdmissionFormData] = useState({
    admissionType: '',
    campCategory: '',
    batch: '',
    selectedDate: '',
    foodOption: '',
    dressCode: '',
  });

  const handleAdmissionChange = (name, value) => {
    setAdmissionFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Format the date
      let date = new Date(formData['dob']);
      let day = ('0' + date.getDate()).slice(-2);
      let month = ('0' + (date.getMonth() + 1)).slice(-2);
      let year = date.getFullYear();
      let formattedDate = `${day}-${month}-${year}`;
      formData['dob'] = formattedDate;

      const reqData = new FormData();

      // Append form data to request data
      for (let key in formData) {
        reqData.append(key, formData[key]);
      }

      const response = await axios.post(`${baseurl}/registerStudent`, reqData);

      console.log(response.data);

      // Reset form data after successful submission
      setFormData({
        first_name: '',
        middle_name: '',
        last_name: '',
        email: '',
        phn: '',
        dob: '',
        address: '',
        fathers_occupation: '',
        mothers_occupation: '',
        how_you_got_to_know: '',
        employee_who_reached_out_to_you: '',
        district: '',
        state: '',
        pincode: '',
      });

      // Show success message
      setState({ vertical: 'bottom', horizontal: 'right', open: true });
    } catch (error) {
      // Show error message
      setErrorState({ vertical: 'bottom', horizontal: 'right', open: true });
      console.error('Error adding student:', error);
    }
  };

  return (
    <div>
      {/* Admission Form */}
      <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-screen-xl mx-auto">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-full xl:col-span-12 bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700">
            <header
              className="px-5 py-4 border-b border-slate-100 dark:border-slate-700"
              style={{ display: 'flex', justifyContent: 'space-between' }}
            >
              <h2 className="font-semibold text-slate-800 dark:text-slate-100">
                Enter Your Details
              </h2>
            </header>
            <div className="overflow-x-auto">
              <form className="  rounded px-8 pt-6 pb-8 mb-4">
                {/* Existing form fields */}
                {/* ... */}
                {/* New Admission Form fields */}
                <div className="mb-4">
                  <label htmlFor="admissionType" className="block text-sm font-medium text-gray-600">
                    Admission Type
                  </label>
                  <select
                    id="admissionType"
                    name="admissionType"
                    value={admissionFormData.admissionType}
                    onChange={(e) => handleAdmissionChange('admissionType', e.target.value)}
                    className="w-full px-3 py-2 border rounded shadow appearance-none"
                  >
                    <option value="">Select Admission Type</option>
                    <option value="newRegistration">New Registration</option>
                    <option value="alreadyRegistered">Already Registered</option>
                    <option value="updateInformation">Update Information</option>
                  </select>
                </div>
                <div className="mb-4">
                  <label htmlFor="campCategory" className="block text-sm font-medium text-gray-600">
                    Camp Category
                  </label>
                  <select
                    id="campCategory"
                    name="campCategory"
                    value={admissionFormData.campCategory}
                    onChange={(e) => handleAdmissionChange('campCategory', e.target.value)}
                    className="w-full px-3 py-2 border rounded shadow appearance-none"
                  >
                    {/* Options for Camp Category */}
                  </select>
                </div>
                <div className="mb-4">
                  <label htmlFor="batch" className="block text-sm font-medium text-gray-600">
                    Batch
                  </label>
                  <select
                    id="batch"
                    name="batch"
                    value={admissionFormData.batch}
                    onChange={(e) => handleAdmissionChange('batch', e.target.value)}
                    className="w-full px-3 py-2 border rounded shadow appearance-none"
                  >
                    {/* Options for Batch */}
                  </select>
                </div>
                <div className="mb-4">
                  <label htmlFor="selectedDate" className="block text-sm font-medium text-gray-600">
                    Select Date
                  </label>
                  <DatePicker
                    label="Controlled picker"
                    value={admissionFormData.selectedDate}
                    placeholder="Select Date"
                    name="selectedDate"
                    onChange={(date) => handleAdmissionChange('selectedDate', date)}
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="foodOption" className="block text-sm font-medium text-gray-600">
                    Food Option
                  </label>
                  <select
                    id="foodOption"
                    name="foodOption"
                    value={admissionFormData.foodOption}
                    onChange={(e) => handleAdmissionChange('foodOption', e.target.value)}
                    className="w-full px-3 py-2 border rounded shadow appearance-none"
                  >
                    {/* Options for Food Option */}
                  </select>
                </div>
                <div className="mb-4">
                  <label htmlFor="dressCode" className="block text-sm font-medium text-gray-600">
                    Dress Code
                  </label>
                  <select
                    id="dressCode"
                    name="dressCode"
                    value={admissionFormData.dressCode}
                    onChange={(e) => handleAdmissionChange('dressCode', e.target.value)}
                    className="w-full px-3 py-2 border rounded shadow appearance-none"
                  >
                    {/* Options for Dress Code */}
                  </select>
                </div>
                {/* ... */}
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-around ">
        <button
          className="btn-secondary mr-2"
          style={{
            padding: '5px 10px',
            background: '#007BFF',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            marginRight: '10px',
          }}
        >
          Previous
        </button>
        <button
          onClick={handleSubmit}
          className="btn-primary"
          style={{
            padding: '5px 10px',
            background: '#007BFF',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            marginRight: '10px',
          }}
        >
          Next
        </button>
      </div>
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={open}
        onClose={handleClose}
        key={vertical + horizontal}
        autoHideDuration={3000}
      >
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          Student Added Successfully
        </Alert>
      </Snackbar>
      {/* Error Snackbar */}
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={errorState.open}
        onClose={handleErrorClose}
        key={vertical + horizontal}
        autoHideDuration={3000}
      >
        <Alert onClose={handleErrorClose} severity="error" sx={{ width: '100%' }}>
          Enter details first!!
        </Alert>
      </Snackbar>
    </div>
  );
};

export default admission_form;
