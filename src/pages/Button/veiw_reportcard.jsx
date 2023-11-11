import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ReportCard = ({ match }) => {
  const [reportCardData, setReportCardData] = useState(null);

  useEffect(() => {
    // Fetch data from the API endpoint
    axios
      .get(`https://mcf-backend.vercel.app/api/getReportCard/ABCD-123`)
      .then((response) => {
        // Update the state with the fetched data
        setReportCardData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching report card data:', error);
      });
  });

  return (
    <div className="container mx-auto mt-10 p-6 bg-white rounded-lg shadow-md ">
      <h1 className="text-3xl font-bold mt-2 mb-4 text-center">Report Card</h1>
      {reportCardData ? (
        <div>
          <div className="mb-4 flex justify-between">
            <strong>Registration ID:</strong> {reportCardData.Reg_ID}
          </div>
          <div className="mb-4 flex justify-between">
            <strong>Chess No:</strong> {reportCardData.Chess_No}
          </div>
          <div className="mb-4 flex justify-between">
            <strong>Rank:</strong> {reportCardData.Rank}
          </div>
          <div className="mb-4 flex justify-between">
            <strong>Date:</strong> {reportCardData.Date}
          </div>
          <div className="mb-4 flex justify-between">
            <strong>Name:</strong> {reportCardData.Name}
          </div>
          <div className="mb-4 flex justify-between">
            <strong>Address:</strong> {reportCardData.Address}
          </div>
          <div className="mb-4 flex justify-between">
            <strong>Mobile Number:</strong> {reportCardData.Mobile_Number}
          </div>
          <div className="mb-4 flex justify-between">
            <strong>Camp Name:</strong> {reportCardData.Camp_Name}
          </div>
          <div className="mb-4 flex justify-between">
            <strong>Camp Date:</strong> {reportCardData.Camp_Date}
          </div>
          <div className="mb-4 flex justify-between">
              <strong>CQY:</strong> {reportCardData.CQY}
            </div>
          <div className="mb-4 flex justify-between">
            <strong>Incharge Name:</strong> {reportCardData.Incharge_Name}
          </div>
          <hr></hr>
          <h2 className="text-xl font-bold mt-4 mb-4 text-center">Report Card Fields</h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <strong>Discipline:</strong> {reportCardData.DISCIPLINE}
            </div>
            <div>
              <strong>Physical Fitness:</strong> {reportCardData.PHYSICAL_FITNESS}
            </div>
            <div>
              <strong>Courage:</strong> {reportCardData.COURAGE}
            </div>
            <div>
              <strong>Leadership:</strong> {reportCardData.LEADERSHIP}
            </div>
            <div>
              <strong>Initiative:</strong> {reportCardData.INITIATIVE}
            </div>
            <div>
              <strong>Interpersonal Relation:</strong> {reportCardData.INTER_PERSONAL_RELATION}
            </div>
            <div>
              <strong>Team Building:</strong> {reportCardData.TEAM_BUILDING}
            </div>
            <div>
              <strong>Training:</strong> good
            </div>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ReportCard;
