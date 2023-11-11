import React, { useEffect } from 'react';
import {
  Routes,
  Route,
  useLocation
} from 'react-router-dom';

import './css/style.css';

import './charts/ChartjsConfig';

// Import pages
import Dashboard from './pages/Dashboard';
import Table from './pages/camp';
import RegStudent from './pages/registered-students';
import CanStudent from './pages/cancelled-students';
import Settings from './pages/settings';
import ReportCard from './pages/ReportCard';
import Filter from './pages/Filter';
import AddStudent from './forms/add_students_form/add_students';
import AddCamp from './forms/add_camp';
import FeeDetails from './pages/Button/fee_details';
import FeeDiscount from './pages/Button/fee_discount';
import Batchdetails from './pages/Button/batch_details';
import AddBatch from './forms/add_batch';
import GenerateReport from './forms/generate_report';
import VeiwReportCard from './pages/Button/veiw_reportcard';
import EditFeeDetails from './forms/edit_fee_details';
import UpdateStudentDetails from './pages/update_student_form';


function App() {

  const location = useLocation();

  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto'
    window.scroll({ top: 0 })
    document.querySelector('html').style.scrollBehavior = ''
  }, [location.pathname]); // triggered on route change

  return (
    <>
      <Routes>
        <Route exact path="/" element={<Dashboard/>}/>
        <Route exact path="/camp" element={<Table/>}/>
        <Route exact path="/regStudent" element={<RegStudent/>}/>
        <Route exact path='/CanStudent' element={<CanStudent/>}/>
        <Route exact path="/settings" element={<Settings/>}/>
        <Route exact path="/Reportcard" element={<ReportCard/>}/>
        <Route exact path="/Filter" element={<Filter/>}/>
        <Route exact path="/add-student" element={<AddStudent/>}/>
        <Route exact path="/add-camp" element={<AddCamp/>}/>
        <Route exact path="/fee-details" element={<FeeDetails/>}/>
        <Route exact path="/fee-discounts" element={<FeeDiscount/>}/>
        <Route exact path="/batch-details" element={<Batchdetails />} />
        <Route exact path="/add-batch" element={<AddBatch/>} />
        <Route exact path="/generate-report" element={<GenerateReport/>}/>
        <Route exact path="/veiw-report" element={<VeiwReportCard />} />
        <Route exact path="/edit-fee-details" element={<EditFeeDetails />} />
        <Route exact path="/update-student-details" element={<UpdateStudentDetails />} />
        

      </Routes>
    </>
  );  
}

export default App;
