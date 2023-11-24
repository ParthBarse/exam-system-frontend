import React, { useEffect, useState } from 'react';
import Sidebar from '../partials/Sidebar';
import Header from '../partials/Header';
import axios from 'axios';
import DatePicker from 'react-flatpickr';
import Snackbar from '@mui/material/Snackbar';
import Alert  from '@mui/material/Alert';
import { useLocation } from 'react-router-dom';



export default function AddStudent() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [step, setStep] = useState(1);



  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        {/*  Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <main>
          <div className="w-full max-w-l mx-auto p-4">
            <FirstDetails />

          </div>
        </main>
      </div>
    </div>
  );
}

const baseurl = 'https://mcf-backend-main.vercel.app'

const FirstDetails = () => {

  const [studentId, setStudentId] = useState('');
  const location = useLocation();

  const [state, setState] = React.useState({
    open: false,
    vertical: 'top',
    horizontal: 'center',
  });

  const [errorState, setErrorState] = useState({ open: false, vertical: 'top', horizontal: 'center' });


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
    pincode: '', // New camp field
  });

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const sid = queryParams.get('id');
    setStudentId(sid);
    axios.get(`${baseurl}/getStudent?sid=${sid}`).then(x => setFormData(x.data.student)).then(x => console.log(formData))
  }, [location.search])

  useEffect(() => {
    if (typeof formData['dob'] === 'string') {
      let parts = formData['dob'].split('-'); // split the date string on '-'
      let date = new Date(parts[2], parts[1] - 1, parts[0]); // create a new Date object
      console.log(date)
      setFormData(prevData => ({...prevData, dob: date}));
    }
  }, [formData])

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {


      const reqData = new FormData();
      
      for (let key in formData) {
        if (key === 'dob') {
          let date = new Date(formData[key]);
          let day = ("0" + date.getDate()).slice(-2); // get the day as a string in the format DD
          let month = ("0" + (date.getMonth() + 1)).slice(-2); // get the month as a string in the format MM
          let year = date.getFullYear(); // get the year as a string in the format YYYY
  
          let formattedDate = `${day}-${month}-${year}`; // combine them all together in the format DD-MM-YYYY
          reqData.append(key, formattedDate);
        } else {
          reqData.append(key, formData[key])
        }
      }
      

      for (let key in formData) {
        reqData.append(key, formData[key])
      }

      // Make a POST request using axios

      const response = await axios.put(`${baseurl}/updateStudent`, reqData);

      console.log(response.data); // Log the response from the server

      // // After successfully adding a student, you might want to reset the form
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
        pincode: '', // New camp field
      });

      setState({ vertical: 'bottom', horizontal: 'right', open: true });

    } catch (error) {
      setErrorState({ vertical: 'bottom', horizontal: 'right', open: true });
      console.error('Error adding student:', error);

    }
  };

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
                    <input id="firstName" name='first_name' value={formData.first_name} type="text" className="w-full px-3 py-2 border rounded shadow appearance-none" placeholder="First Name" onChange={handleChange} />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="middlename" className="block text-sm font-medium text-gray-600">Middle Name</label>
                    <input id="middlename" name='middle_name' value={formData.middle_name} type="text" className="w-full px-3 py-2 border rounded shadow appearance-none" placeholder="Middle Name" onChange={handleChange} />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-600">Last Name</label>
                    <input id="lastName" name='last_name' value={formData.last_name} type="text" className="w-full px-3 py-2 border rounded shadow appearance-none" placeholder="Last Name" onChange={handleChange} />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-600">Email</label>
                    <input id="emial" name='email' value={formData.email} type="text" className="w-full px-3 py-2 border rounded shadow appearance-none" placeholder="Email" onChange={handleChange} />
                  </div>
                </div>
                {/* Parents/Guardians and Address */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="mb-4">
                    <label htmlFor="Phone" className="block text-sm font-medium text-gray-600">Phone</label>
                    <input id="Phone" name='phn' value={formData.phn} type="text" className="w-full px-3 py-2 border rounded shadow appearance-none" placeholder="Phone" onChange={handleChange} />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="address" className="block text-sm font-medium text-gray-600">Address</label>
                    <input id="address" name='address' value={formData.address} type="text" className="w-full px-3 py-2 border rounded shadow appearance-none" placeholder="Address" onChange={handleChange} />
                  </div>
                </div>
                <div className="mb-4">
                  <label htmlFor="dob" className="block text-sm font-medium text-gray-600">Date of Birth</label>
                  <DatePicker
                    label="Controlled picker"
                    value={formData.dob}
                    placeholder='dob'
                    name='dob'
                    onChange={(date) => setFormData({ ...formData, dob: date })}
                  />

                </div>
                {/* Father's and Mother's Occupation */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="mb-4">
                    <label htmlFor="fatherOccupation" className="block text-sm font-medium text-gray-600">Father's Occupation</label>
                    <input id="fatherOccupation" name='fathers_occupation' value={formData.fathers_occupation} type="text" className="w-full px-3 py-2 border rounded shadow appearance-none" placeholder="Father's Occupation" onChange={handleChange} />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="motherOccupation" className="block text-sm font-medium text-gray-600">Mother's Occupation</label>
                    <input id="motherOccupation" name='mothers_occupation' value={formData.mothers_occupation} type="text" className="w-full px-3 py-2 border rounded shadow appearance-none" placeholder="Mother's Occupation" onChange={handleChange} />
                  </div>
                </div>
                {/* How You Got to Know and MCF Employee */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="mb-4">
                    <label htmlFor="howYouKnow" className="block text-sm font-medium text-gray-600">How You Got to Know about MCF Camp</label>
                    <input id="howYouKnow" name='how_you_got_to_know' value={formData.how_you_got_to_know} type="text" className="w-full px-3 py-2 border rounded shadow appearance-none" placeholder="How You Got to Know" onChange={handleChange} />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="mcfEmployee" className="block text-sm font-medium text-gray-600">Name of the MCF Employee Who Reached Out to You</label>
                    <input id="mcfEmployee" name='employee_who_reached_out_to_you' value={formData.employee_who_reached_out_to_you} type="text" className="w-full px-3 py-2 border rounded shadow appearance-none" placeholder="MCF Employee's Name" onChange={handleChange} />
                  </div>
                </div>

                {/* District, State, and Pincode */}
                <div className="grid grid-cols-4 gap-4">

                  <div className="mb-4">
                    <label htmlFor="district" className="block text-sm font-medium text-gray-600">District</label>
                    <input id="district" name='district' value={formData.district} type="text" className="w-full px-3 py-2 border rounded shadow appearance-none" placeholder="District" onChange={handleChange} />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="state" className="block text-sm font-medium text-gray-600">State</label>
                    <input id="state" name='state' value={formData.state} type="text" className="w-full px-3 py-2 border rounded shadow appearance-none" placeholder="State" onChange={handleChange} />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="pincode" className="block text-sm font-medium text-gray-600">Pincode</label>
                    <input id="pincode" name='pincode' value={formData.pincode} type="text" className="w-full px-3 py-2 border rounded shadow appearance-none" placeholder="Pincode" onChange={handleChange} />
                  </div>
                </div>


              </form>
            </div>
          </div>
        </div>
      </div>
      <div className='flex justify-around '>
        <button onClick={handleUpdate} className="btn-primary" style={{ padding: "5px 10px", background: "#007BFF", color: "white", border: "none", borderRadius: "5px", marginRight: "10px" }}>
          Update
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
          Student Updated Successfully!!
        </Alert>
      </Snackbar>
      {/* ///////////////////////////////// */}
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={errorState.open}
        onClose={handleClose}
        key={vertical + horizontal}
        autoHideDuration={3000}
      >
        <Alert onClose={handleErrorClose} severity="error" sx={{ width: '100%' }}>
          Error Updating Student!!
        </Alert>
      </Snackbar>
    </div>
  );
};

