import React from "react";
import pic from "./favicon.png";
import sign from "./user-avatar-32.png";

function AdmitCard() {
  return (
    <div className="flex flex-col">
      <button
        onClick={(e) => window.print()}
        className="no-print bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded"
      >
        Print
      </button>
      <section className="bg-gray-100 flex items-center justify-center max-w-4xl mx-auto p-2">
        <div className="w-full bg-white shadow-md p-8 rounded-md">
          <div className="admit-card border-4 p-4 mb-4">
            <div className="BoxA border-1 p-4 mb-4">
              <div className="flex justify-between">
                <div className="w-1/4 flex items-center mr-16">
                  <h5 className="text-xl font-bold">ENTRANCE_CARD</h5>
                </div>
                <div className="w-3/4 flex justify-around ml-14">
                  <h5 className="text-4xl font-bold p-2 border">
                    MARSHAL CADET FORCE
                  </h5>
                  <p className="font-xl"></p>
                </div>
              </div>
            </div>
            <div className="BoxC border-1 p-4 mb-4">
              <div className="flex">
                <div className="w-full flex justify-around">
                  <h5 className="font-bold">Enrollment No : 9910101</h5>
                </div>
              </div>
            </div>
            <div className="BoxD border-1 p-4 mb-4">
              <div className="flex">
                <div className="w-1/2">
                  <table className="table table-bordered w-full border-collapse">
                    <tbody>
                      <tr>
                        <td className="font-bold border p-2">
                          Student Name :{" "}
                          <span className="font-normal">Vinod Sharma</span>{" "}
                        </td>
                      </tr>
                      <tr>
                        <td className="font-bold border p-2">
                          Sex : <span className="font-normal">Male</span>
                        </td>
                      </tr>
                      <tr>
                        <td className="font-bold border p-2">
                          Father Name :{" "}
                          <span className="font-normal">S S Sharma</span>
                        </td>
                      </tr>
                      <tr>
                        <td className="font-bold border p-2">
                          ENROLLMENT NO :{" "}
                          <span className="font-normal">99887766</span>{" "}
                        </td>
                      </tr>
                      <tr>
                        <td colSpan="2" className="font-bold border p-2">
                          Address :{" "}
                          <span className="font-normal">Viman Nagar</span>
                        </td>
                      </tr>
                      <tr>
                        <td className="border p-2">
                          <b>Course: </b> B.TECH
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="w-1/2 flex flex-col items-center justify-center">
                  <img
                    src={pic}
                    className="w-42 h-44 mb-2 border"
                    alt="Student Photo"
                  />
                  <img src={""} className="p-2 border" alt="Signature" />
                </div>
              </div>
            </div>
            <div className="BoxE border-1 p-2 mb-4 text-center">
              <div className="flex">
                <div className="w-full">
                  <h5>PICK-UP POINT : pOINT HERE , cITY , INDIA</h5>
                  {/* <p> point here <br />city ,  INDIA</p> */}
                </div>
              </div>
            </div>
            <div className="BoxF border-1 p-2 mb-4 text-center">
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
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <footer className="text-center mt-2">
              <p className="text-gray-600">
                ***************************** MARSHAL CADET FORCE
                *****************************
              </p>
            </footer>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AdmitCard;
