import React from 'react';
import pic from './favicon.png';

const AdmitCard = () => {
  return (

    <div className='flex flex-col'>
      <button onClick={e=>window.print()} className="no-print bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded">Print</button>


    <section className="bg-gray-100 flex items-center justify-center max-w-4xl mx-auto p-4">
      <div className="w-full bg-white shadow-md p-8 rounded-md">
        <div className="admit-card border-2 p-4 mb-4">
          <div className="BoxA border-1 p-4 mb-4">
            <div className="flex justify-between">
              <div className="w-1/3">
                <h5 className="text-xl font-bold">MARSHAL CADET FORCE</h5>
                <p className="mt-2">Flat No.1, Punyodhaya Apt, Near Jagtap Dairy, <br />Aundh -Wakad Rd, Maharashtra, India</p>
              </div>
              <div className="w-1/3 flex items-center justify-center">
                <img src={pic} className="w-16 h-16" alt="University Logo" />
              </div>
              <div className="w-1/3 flex items-center justify-end">
                <h5 className="text-xl font-bold">ENTRANCE Card</h5>
              </div>
            </div>
          </div>
          <div className="BoxC border-1 p-4 mb-4">
            <div className="flex">
              <div className="w-1/2">
                <h5>Enrollment No : 9910101</h5>
              </div>
            </div>
          </div>
          <div className="BoxD border-1 p-4 mb-4">
            <div className="flex">
              <div className="w-3/4">
                <table className="table table-bordered w-full">
                  <tbody>
                    <tr>
                      <td className="font-bold">ENROLLMENT NO : 9910101</td>
                      <td><b>Course: </b> B.TECH</td>
                    </tr>
                    <tr>
                      <td className="font-bold">Student Name: </td>
                      <td>Vinod Sharma</td>
                    </tr>
                    <tr>
                      <td className="font-bold">Sex: </td>
                      <td>M</td>
                    </tr>
                    <tr>
                      <td className="font-bold">Father/Husband Name: </td>
                      <td>SS Sharma</td>
                    </tr>
                    <tr>
                      <td colSpan="2" className="font-bold">Address: moh hasnxgxums</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="w-1/4 flex flex-col items-center justify-center">
                <img src={pic} className="w-32 h-44 mb-2" alt="Student Photo" />
                <img src alt="Signature" />
              </div>
            </div>
          </div>
          <div className="BoxE border-1 p-4 mb-4 text-center">
            <div className="flex">
              <div className="w-full">
                <h5>EXAMINATION VENUE</h5>
                <p>NH - 79 Gangrar Chittorgarh - 312901 <br /> RAJASTHAN, INDIA</p>
              </div>
            </div>
          </div>
          <div className="BoxF border-1 p-4 mb-4 text-center">
            <div className="flex">
              <div className="w-full">
                <table className="table table-bordered w-full">
                  <thead>
                    <tr>
                      <th>Sr. No.</th>
                      <th>Subject/Paper</th>
                      <th>Exam Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>English</td>
                      <td>5 July 2019</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>English</td>
                      <td>5 July 2019</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>English</td>
                      <td>5 July 2019</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <footer className="text-center">
            <p className="text-gray-600">*** MEWAR UNIVERSITY ***</p>
          </footer>
        </div>
      </div>
    </section>
    </div>
  );
};

export default AdmitCard;
