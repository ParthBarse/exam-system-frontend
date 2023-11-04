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
        <Route exact path="/" element={<Dashboard />} />
        <Route exact path="/camp" element={<Table />} />
        <Route exact path="/regStudent" element={<RegStudent />} />
        <Route exact path='/CanStudent' element={<CanStudent />} />
        <Route exact path="/settings" element={<Settings />} />
        <Route exact path="/Reportcard" element={<ReportCard />} />
        <Route exact path="/Filter" element={<Filter />} />
        <Route exact path="/add-student" element={<AddStudent />} />
      </Routes>
    </>
  );
}

export default App;
