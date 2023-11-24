import React, { useEffect, useState } from 'react';
import Sidebar from '../partials/Sidebar';
import Header from '../partials/Header';
import axios from 'axios';
import DatePicker from 'react-flatpickr';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
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

  const [campDetails , setCampDetails] = useState({});
  const [batchDetails , setBatchDetails] = useState({}); 

  useEffect(() => {
    console.log(campDetails);
    console.log(batchDetails);
  }, [campDetails, batchDetails])

  

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const sid = queryParams.get('id');
    setStudentId(sid);
    axios.get(`${baseurl}/getStudent?sid=${sid}`).then(x => {setFormData(x.data.student);setCampDetails(x.data.camp_details);setBatchDetails(x.data.batch_details)});
  }, [location.search])

  useEffect(() => {
    if (typeof formData['dob'] === 'string') {
      let parts = formData['dob'].split('-'); // split the date string on '-'
      let date = new Date(parts[2], parts[1] - 1, parts[0]); // create a new Date object
      console.log(date)
      setFormData(prevData => ({ ...prevData, dob: date }));
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
  const [camps, setCamps] = useState([]);




  useEffect(() => {
    const fetchCamps = async () => {
      try {
        const response = await axios.get(`${baseurl}/getAllCamps`);
        setCamps(response.data.camps);
      } catch (error) {
        console.error('Error fetching data', error);
      }
    };
    fetchCamps();
  } , [])

  const [camp, setCamp] = useState({})
  const [camp_category, setCampCategory] = useState('');
  
  const [admissionFormData, setAdmissionFormData] = useState({
    admissionType: '',
    camp_category: '',
    batch_id: '',
    selectedDate: '',
    food_option: '',
    dress_code: '',
    pick_up_point: '',
    height: '',
    weight: '',
    blood_group: '',
    payment_option: '',

  });

  useEffect(() => {
    if (formData.food_option){
      admissionFormData.food_option = formData.food_option;
    }
    if (formData.dress_code){
      admissionFormData.dress_code = formData.dress_code;
    }
    if (formData.pick_up_point){
      admissionFormData.pick_up_point = formData.pick_up_point;
    }
    if (formData.height){
      admissionFormData.height = formData.height;
    }
    if (formData.weight){
      admissionFormData.weight = formData.weight;
    }
    if (formData.blood_group){
      admissionFormData.blood_group = formData.blood_group;
    }

  }
  , [formData.food_option, formData.dress_code , formData.pick_up_point , formData.height , formData.weight , formData.blood_group ])

  useEffect(() => {
    console.log('campname'+campDetails.camp_name);
    
    if (campDetails.camp_name) {
      admissionFormData.camp_name = campDetails.camp_name;
    }
  }, [campDetails.camp_name]);

  useEffect(() => {
    if (formData.camp_category) {
      admissionFormData.camp_category = formData.camp_category;
    }
  }, [formData.camp_category]);

  useEffect(() => {
    if (batchDetails.batch_name) {
      admissionFormData.batch_name = batchDetails.batch_name;
    }
  }, [batchDetails.batch_name]);
    
  // //////////////////////////////////////////////


  useEffect(() => {
    console.log(admissionFormData);
  }, [admissionFormData])

  /////////////////////////////////////////////////
  
  const [campId, setCampId] = useState('');

  useEffect(() => {
    if (campDetails.camp_id) {
      setCampId(campDetails.camp_id);
    }
  }, [campDetails.camp_id]);

  useEffect(() => {
    if (admissionFormData.camp_name) {
      const selectedCamp = camps.find(camp => camp.camp_name === admissionFormData.camp_name);
      if (selectedCamp) {
        setCampId(selectedCamp.camp_id);
        console.log('campid'+selectedCamp.camp_id)
      }
    }
  }, [admissionFormData.camp_name, camps]);
  
  const [batches, setBatches] = useState([]);

  useEffect(() => {
    const fetchBatches = async () => {
      try {
        const response = await axios.get(`${baseurl}/getBatches?camp_id=${campId}`);
        setBatches(response.data.batches);
      } catch (error) {
        console.error('Error fetching data', error); 
      }
    };
    fetchBatches();

  }, [campId])

  const [batchId, setBatchId] = useState('');
  const [batch, setBatch] = useState({});

  useEffect(() => {
    if (batchDetails.batch_id) {
      setBatchId(batchDetails.batch_id);
    }
  }, [batchDetails.batch_id]);

  useEffect(() => {
    if (admissionFormData.batch_name) {
      const selectedBatch = batches.find(batch => batch.batch_name === admissionFormData.batch_name);
      if (selectedBatch) {
        setBatchId(selectedBatch.batch_id);
        console.log('batchid: '+ selectedBatch.batch_id)
      }
    }
  }, [admissionFormData.batch_name, batches]);

  useEffect(() => {
    const fetchBatch = async () => {
      try {
        const response = await axios.get(`${baseurl}/getBatch?batch_id=${batchId}`);
        setBatch(response.data.batch);
      } catch (error) {
        console.error('Error fetching data', error); 
      }
    };
    if (batchId) {
      fetchBatch();
    }
  }, [batchId]);



  const handleAdmissionChange = (name, value) => {
    setAdmissionFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const convertDate = (dateString) => {
    const [day, month, year] = dateString.split('-');
    const formattedDate = `${year}-${month}-${day}`;
    return formattedDate;
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
                <hr className="my-4 h-1 bg-gray-200" />
                <div className="mb-4">
                  <label htmlFor="camp_category" className="block text-lg font-medium text-gray-600">
                    Camp Name
                  </label>
                  <select
                    id="camp_name"
                    name="camp_name"
                    value={admissionFormData.camp_name}
                    onChange={(e) => handleAdmissionChange('camp_name', e.target.value)}
                    className="w-full px-3 py-2 border rounded shadow appearance-none"
                  >
                    {/* Options for Camp Category */}
                    <option value="">Select Camp Name</option>
                    {camps.map((camp) => (<option value={camp.camp_name}>{camp.camp_name}</option>))}
                  </select>
                </div>
                <div className="mb-4">
                  <label htmlFor="camp_category" className="block text-sm font-medium text-gray-600">
                    Camp Category
                  </label>
                  <select
                    id="camp_category"
                    name="camp_category"
                    value={admissionFormData.camp_category}
                    onChange={(e) => handleAdmissionChange('camp_category', e.target.value)}
                    className="w-full px-3 py-2 border rounded shadow appearance-none"
                  >
                    {/* Options for Camp Category */}
                    <option value="">Select Camp Category</option>
                    <option value="diwali">DIWALI</option>
                    <option value="chs">CHS</option>
                    <option value="summer">SUMMER</option>
                  </select>
                </div>
                <div className="mb-4">
                  <label htmlFor="batch_name" className="block text-sm font-medium text-gray-600">
                    Batch
                  </label>
                  <select
                    id="batch_name"
                    name="batch_name"
                    value={admissionFormData.batch_name}
                    onChange={(e) => handleAdmissionChange('batch_name', e.target.value)}
                    className="w-full px-3 py-2 border rounded shadow appearance-none"
                  >
                    {/* Options for Batch */}
                    <option value="">Select Batch Name</option>
                    {batches.map((batch) => (<option value={batch.batch_name}>{batch.batch_name}</option>))}

                  </select>
                </div>
                <div className="grid grid-cols-4 gap-4">

                  <div className="mb-4">
                    <label htmlFor="startDate" className="block text-sm font-medium text-gray-600">Start Date</label>
                    <input id="startDate" name='startDate' value={batch.start_date ? convertDate(batch.start_date) : ''} type="date" className="w-full px-3 py-2 border rounded shadow appearance-none" placeholder="Start Date" onChange={handleChange} readOnly />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="endDate" className="block text-sm font-medium text-gray-600">End Date</label>
                    <input id="endDate" name='endDate' value={batch.end_date ? convertDate(batch.end_date) : ''} type="date" className="w-full px-3 py-2 border rounded shadow appearance-none" placeholder="End Date" onChange={handleChange} readOnly />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="company" className="block text-sm font-medium text-gray-600">Company</label>
                    <input id="company" name='company' value={batch.company} type="text" className="w-full px-3 py-2 border rounded shadow appearance-none" placeholder="Company" onChange={handleChange} readOnly />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="duration" className="block text-sm font-medium text-gray-600">Duration</label>
                    <input id="duration" name='duration' value={batch.duration} type="text" className="w-full px-3 py-2 border rounded shadow appearance-none" placeholder="Duration" onChange={handleChange} readOnly />
                  </div>
                </div>
                <div className="mb-4">
                  <label htmlFor="food_option" className="block text-sm font-medium text-gray-600">
                    Food Option
                  </label>
                  <select
                    id="food_option"
                    name="food_option"
                    value={admissionFormData.food_option}
                    onChange={(e) => handleAdmissionChange('food_option', e.target.value)}
                    className="w-full px-3 py-2 border rounded shadow appearance-none"
                  >
                    {/* Options for Food Option */}
                    <option value="">Select Food Option </option>
                    <option value="veg">VEG </option>
                    <option value="jain">JAIN </option>
                  </select>
                </div>
                <div className="mb-4">
                  <label htmlFor="dress_code" className="block text-sm font-medium text-gray-600">
                    Dress Code
                  </label>
                  <select
                    id="dress_code"
                    name="dress_code"
                    value={admissionFormData.dress_code}
                    onChange={(e) => handleAdmissionChange('dress_code', e.target.value)}
                    className="w-full px-3 py-2 border rounded shadow appearance-none"
                  >
                    {/* Options for Dress Code */}
                    <option value="">Select Dress Code </option>
                    <option value="trackSuit">TRACK SUIT</option>
                    <option value="combatDress">COMBAT DRESS </option>
                    <option value="cheetaDress">CHEETA DRESS</option>
                    <option value="blackDress">BLACK DRESS </option>
                  </select>
                </div>
                <div className="mb-4">
                  <label htmlFor="pick_up_point" className="block text-sm font-medium text-gray-600">
                    Pick Up Point Location
                  </label>
                  <select
                    id="pick_up_point"
                    name="pick_up_point"
                    value={admissionFormData.pick_up_point}
                    onChange={(e) => handleAdmissionChange('pick_up_point', e.target.value)}
                    className="w-full px-3 py-2 border rounded shadow appearance-none"
                  >
                    {/* Options for Dress Code */}
                    <option value="">Select Pick Up Point Location </option>
                    <option value="mumbai">Mumbai</option>
                    <option value="pune">Pune </option>
                  </select>
                </div>
                <hr className="my-4 h-1 bg-gray-200" />
                <div className="mb-4">
                  <label htmlFor="height" className="block text-sm font-medium text-gray-600">Height</label>
                  <input id="height" name='height' value={admissionFormData.height} type="text" className="w-full px-3 py-2 border rounded shadow appearance-none" placeholder="Height in cm" onChange={e => handleAdmissionChange('height', e.target.value)} />
                </div>
                <div className="mb-4">
                  <label htmlFor="weight" className="block text-sm font-medium text-gray-600">Weight</label>
                  <input id="weight" name='weight' value={admissionFormData.weight} type="text" className="w-full px-3 py-2 border rounded shadow appearance-none" placeholder="Weight in Kg" onChange={e => handleAdmissionChange('weight', e.target.value)} />
                </div>
                <div className="mb-4">
                  <label htmlFor="blood_group" className="block text-sm font-medium text-gray-600">Blood Group</label>
                  <input id="blood_group" name='blood_group' value={admissionFormData.blood_group} type="text" className="w-full px-3 py-2 border rounded shadow appearance-none" placeholder="Blood Group" onChange={e => handleAdmissionChange('blood_group', e.target.value)} />
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

