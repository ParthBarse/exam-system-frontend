import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DatePicker from 'react-flatpickr';
import dayjs from 'dayjs';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import { Alert } from '@mui/material';



const baseurl = 'https://mcf-backend-main.vercel.app'

const FirstDetails = () => {

  const [state, setState] = React.useState({
    open: false,
    vertical: 'top',
    horizontal: 'center',
  });

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

  const [errorState , setErrorState] = useState({ open: false, vertical: 'top', horizontal: 'center' });


  const { vertical, horizontal, open } = state;


  const handleClose = () => {
    setState({ ...state, open: false });
  };

  const handleErrorClose = () => {
    setErrorState({ ...errorState, open: false });
  };


  const [formData, setFormData] = useState({
    first_name: '',
    middle_name:'',
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

  const [camp, setCamp] = useState({})
  const [campCategory, setCampCategory] = useState('');
  
  const [admissionFormData, setAdmissionFormData] = useState({
    admissionType: '',
    campName: '',
    campCategory: '',
    batch: '',
    selectedDate: '',
    foodOption: '',
    dressCode: '',
    pickUpPoint: '',
    height: '',
    weight: '',
    blood_group: '',

  });
  useEffect(() => {
    console.log(admissionFormData);
  },[admissionFormData]);

  
  const [campId, setCampId] = useState('');

  useEffect(() => {
    if (admissionFormData.campName) {
      const selectedCamp = camps.find(camp => camp.camp_name === admissionFormData.campName);
      if (selectedCamp) {
        setCampId(selectedCamp.camp_id);
      }
    }
  }, [admissionFormData.campName, camps]);
  
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
    if (admissionFormData.batch) {
      const selectedBatch = batches.find(batch => batch.batch_name === admissionFormData.batch);
      if (selectedBatch) {
        setBatchId(selectedBatch.batch_id);
        console.log('batchid: '+ selectedBatch.batch_id)
      }
    }
  }, [admissionFormData.batch, batches]);

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
      

      const reqData = new FormData();
      
      let date = new Date(formData['dob']); // assuming formData[key] is the date you're referring to
      let day = ("0" + date.getDate()).slice(-2); // get the day as a string in the format DD
      let month = ("0" + (date.getMonth() + 1)).slice(-2); // get the month as a string in the format MM
      let year = date.getFullYear(); // get the year as a string in the format YYYY

      let formattedDate = `${day}-${month}-${year}`;
      formData['dob'] = formattedDate // combine them all together in the format DD-MM-YYYY
      
      const len = Object.keys(formData).length

      for (let key in formData) {
        reqData.append(key, formData[key])
      }

      for (let key in admissionFormData) {
        reqData.append(key, admissionFormData[key])
      }

      // Make a POST request using axios

      const response = await axios.post(`${baseurl}/registerStudent`, reqData);

      console.log(response.data); // Log the response from the server

      // // After successfully adding a student, you might want to reset the form
      setFormData({
        first_name: '',
        middle_name:'',
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
      
      setState({ vertical: 'bottom', horizontal: 'right' ,open: true });
      
    } catch (error) {
      setErrorState({ vertical: 'bottom', horizontal: 'right' ,open: true });
      console.error('Error adding student:', error);

    }
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
                  <label htmlFor="campCategory" className="block text-lg font-medium text-gray-600">
                    Camp Name
                  </label>
                  <select
                    id="campName"
                    name="campName"
                    value={admissionFormData.campName}
                    onChange={(e) => handleAdmissionChange('campName', e.target.value)}
                    className="w-full px-3 py-2 border rounded shadow appearance-none"
                  >
                    {/* Options for Camp Category */}
                    <option value="">Select Camp Name</option>
                    {camps.map((camp) => (<option value={camp.camp_name}>{camp.camp_name}</option>))}
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
                    <option value="">Select Camp Category</option>
                    <option value="diwali">DIWALI</option>
                    <option value="chs">CHS</option>
                    <option value="summer">SUMMER</option>
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
                    <option value="">Select Batch Name</option>
                    {batches.map((batch) => (<option value={batch.batch_name}>{batch.batch_name}</option>))}
                    
                  </select>
                </div>
                <div className="grid grid-cols-4 gap-4">

                  <div className="mb-4">
                    <label htmlFor="startDate" className="block text-sm font-medium text-gray-600">Start Date</label>
                    <input id="startDate" name='startDate' value={batch.start_date?convertDate(batch.start_date):''} type="date" className="w-full px-3 py-2 border rounded shadow appearance-none" placeholder="Start Date" onChange={handleChange} readOnly />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="endDate" className="block text-sm font-medium text-gray-600">End Date</label>
                    <input id="endDate" name='endDate' value={batch.end_date?convertDate(batch.end_date):''} type="date" className="w-full px-3 py-2 border rounded shadow appearance-none" placeholder="End Date" onChange={handleChange} readOnly />
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
                    <option value="">Select Food Option </option>
                    <option value="veg">VEG </option>
                    <option value="jain">JAIN </option>
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
                    <option value="">Select Dress Code </option>
                    <option value="trackSuit">TRACK SUIT</option>
                    <option value="combatDress">COMBAT DRESS </option>
                    <option value="cheetaDress">CHEETA DRESS</option>
                    <option value="blackDress">BLACK DRESS </option>
                  </select>
                </div>
                <div className="mb-4">
                  <label htmlFor="pickUpPoint" className="block text-sm font-medium text-gray-600">
                    Pick Up Point Location
                  </label>
                  <select
                    id="pickUpPoint"
                    name="pickUpPoint"
                    value={admissionFormData.pickUpPoint}
                    onChange={(e) => handleAdmissionChange('pickUpPoint', e.target.value)}
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
                    <input id="height" name='height' value={admissionFormData.height} type="text" className="w-full px-3 py-2 border rounded shadow appearance-none" placeholder="Height in cm" onChange={e=>handleAdmissionChange('height',e.target.value)} />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="weight" className="block text-sm font-medium text-gray-600">Weight</label>
                    <input id="weight" name='weight' value={admissionFormData.weight} type="text" className="w-full px-3 py-2 border rounded shadow appearance-none" placeholder="Weight in Kg" onChange={e=>handleAdmissionChange('weight',e.target.value)} />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="blood_group" className="block text-sm font-medium text-gray-600">Blood Group</label>
                    <input id="blood_group" name='blood_group' value={admissionFormData.blood_group} type="text" className="w-full px-3 py-2 border rounded shadow appearance-none" placeholder="Blood Group" onChange={e=>handleAdmissionChange('blood_group',e.target.value)} />
                  </div>
                  <div className="mb-4">
                  <label htmlFor="medicalCertificate" className="block text-sm font-medium text-gray-600">
                     Medical Certificate
                  </label>
                  <input
                    type="file"
                    id="medicalCertificate"
                    name="medicalCertificate"
                    onChange={(e) => handleFileChange(e)}
                    className="w-full px-3 py-2 border rounded shadow appearance-none"
                  />
                </div>
                <hr className="my-4 h-1 bg-gray-200" />
                {/*add option to uploade files */}
                <div className="mb-4">
                  <label htmlFor="cadetPhoto" className="block text-sm font-medium text-gray-600">
                     Cadet Photo
                  </label>
                  <input
                    type="file"
                    id="cadetPhoto"
                    name="cadetPhoto"
                    onChange={(e) => handleFileChange(e)}
                    className="w-full px-3 py-2 border rounded shadow appearance-none"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="cadetSign" className="block text-sm font-medium text-gray-600">
                     Cadet Sign
                  </label>
                  <input
                    type="file"
                    id="cadetSign"
                    name="cadetSign"
                    onChange={(e) => handleFileChange(e)}
                    className="w-full px-3 py-2 border rounded shadow appearance-none"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="parent-GurdianPhoto" className="block text-sm font-medium text-gray-600">
                     Parent/Gurdian Photo
                  </label>
                  <input
                    type="file"
                    id="parent-GurdianPhoto"
                    name="parent-GurdianPhoto"
                    onChange={(e) => handleFileChange(e)}
                    className="w-full px-3 py-2 border rounded shadow appearance-none"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="parent-GurdianSign" className="block text-sm font-medium text-gray-600">
                     Parent-Gurdian Sign
                  </label>
                  <input
                    type="file"
                    id="parent-GurdianSign"
                    name="parent-GurdianSign"
                    onChange={(e) => handleFileChange(e)}
                    className="w-full px-3 py-2 border rounded shadow appearance-none"
                  />
                </div>

                <hr className="my-4 h-1 bg-gray-200" />
                <div className="mb-4">
                  <label htmlFor="paymentOptions" className="block text-sm font-medium text-gray-600">
                   Payment Options
                  </label>
                  <select
                    id="paymentOptions"
                    name="paymentOptions"
                    value={admissionFormData.paymentOptions}
                    onChange={(e) => handleAdmissionChange('paymentOptions', e.target.value)}
                    className="w-full px-3 py-2 border rounded shadow appearance-none"
                  >
                    {/* Options for Dress Code */}
                    <option value="">Select Payment Options </option>
                    <option value="totalPayment">Total Payment</option>
                    <option value="1installment">1 installment </option>
                    <option value="2installment">2 installments </option>
                    <option value="3installment">3 installments </option>
                    <option value="4installment">4 installments </option>
                  </select>
                </div>
                <hr className="my-4 h-1 bg-gray-200" />
                <div className="p-4">
              <div className="overflow-x-auto text-xs">
                {/* Terms and services*/}
                <h1 className="text-2xl font-bold mb-4">RULES AND REGULATIONS FOR CAMPAIGN</h1>
                <ul className="list-disc pl-6 mb-4">
                  <li>Age limit for all the camps is strictly between 7 to 21 years.</li>
                  <li>It is a Commando Training Camp and not a Luxurious relaxing vacation. Discipline is a must. *Soldier Cut/Military Cut is Compulsory for Boys. Nails to be trimmed properly.</li>
                  <li>Any expensive things such as Gold, Money, or any Electronic Gadgets are not allowed in the Camp.</li>
                  <li>Abusive Language, Bad Words, any type of Addiction, and Fighting, if it happens in the Camp, then that child will be rusticated from the Camp.</li>
                  <li>Students need to take care of their provisions, food, etc., until they reach the camp.</li>
                  <li>Junk Food is strictly prohibited in the camp. You may send healthy snacks like dry fruits or homemade healthy snacks.</li>
                  <li>Parents are allowed to call their wards only on mentioned/given scheduled days.</li>
                  <li>Parents would be notified by a message from MCF for the arrival of the cadet on the first day and departure timing on the last day of the camp. Please don't expect calls on the same.</li>
                  <li>For a 7-day camp, the calling schedule will be alternate day from the 2nd day, 4th day, and 6th day, between 12.00 am to 3.00 pm. If students have any complaints or requirements, then tell them to inform us. Cadets will be handed over to the parents at the camp place after the closing ceremony. Remaining kids will be dropped by MCF (whatever committed pick-up & drop place). If students have any complaints or requirements, then tell them to inform us.</li>
                  <li>If anyone has any complaint or suggestion about this Camp, then contact us at 9604082000 from 9 am to 12:30 pm. After that, calls will not be received.</li>
                  <li>Fees once paid are Non-Refundable and Non-Transferable.</li>
                </ul>
                <h1 className="text-2xl font-bold mb-4">DECLARATION OF PARENTS/GUARDIANS</h1>
                <ul className="list-disc pl-6 mb-4">
                  <li>This is a Commando Training Camp, not a Luxurious one, and I am very well aware of it. I am sending my child of my own free will.</li>
                  <li>I will not claim to MCF for any Natural Calamity or Natural Accident that may happen. My child is physically and mentally prepared for this Camp, and I have provided them with the information about the situation of the Camp. I know that fees once paid are non-refundable under any condition.</li>
                  <li>I have carefully read and accepted all the above rules and regulations.</li>
                </ul>
                <h1 className="text-2xl font-bold mb-4">INDEMNITY BOND AND CERTIFICATE</h1>
                <ul className="list-disc pl-6 mb-4">
                  <li>I confirm that my ward/son/daughter is physically and medically fit to undertake the rigorous training of the course.</li>
                  <li>I hereby declare that I shall not hold MCF CAMP or the instructors or any staff wholly or partially, either individually or jointly responsible for any injury, accident, or sickness caused to my ward/son/daughter during the course of the camp.</li>
                  <li>I agree to adhere strictly to the rules and discipline of the course and abide by the directions of the organizing authority or the nominee at all times during the course. Failing to do so may result in expulsion. In case of any injury, accident, or sickness of any member of my family, I shall not hold MCF CAMP or the instructors or any staff wholly or partially, either individually or jointly responsible, and no compensation will be claimed by me.</li>
                  <li>I hereby declare that to the best of my knowledge, I do not suffer from any ailment or disability likely to handicap me in undergoing the course. I am taking part in this course at my own risk.</li>
                  <li>This indemnity bond/certificate is given by me with due diligence and based on the information imparted to me by MCF CAMP authorities.</li>
                </ul>
              </div>
              <label>
                <input type="checkbox" name="accept" id="accept-checkbox" />
                {''}  I accept
              </label>
            </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className='flex justify-around '>
        <button className="btn-secondary mr-2" style={{ padding: "5px 10px", background: "#007BFF", color: "white", border: "none", borderRadius: "5px", marginRight: "10px" }}>
          Previous
        </button>
        <button onClick={handleSubmit} className="btn-primary" style={{ padding: "5px 10px", background: "#007BFF", color: "white", border: "none", borderRadius: "5px", marginRight: "10px" }}>
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
      {/* ///////////////////////////////// */}
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={errorState.open}
        onClose={handleClose}
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

export default FirstDetails;
