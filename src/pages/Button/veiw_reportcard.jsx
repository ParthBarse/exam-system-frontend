import React, { useEffect, useState } from "react";
import pic from "./favicon.png";
import axios from "axios";
import { useLocation } from "react-router-dom";

function ViewReportCard() {
  const [data, setData] = useState({});
  const [id, setId] = useState("");
  const location = useLocation();

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const uid = queryParams.get("id");
    setId(uid);
    axios
      .get(`https://mcf-backend-main.vercel.app/getStudent?sid=${id}`)
      .then((x) => setData(x.data.student));
  }, [location.search, id]);




  return (
    <div className="flex flex-col">
      <button
        onClick={(e) => window.print()}
        className="no-print bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded"
      >
        Print
      </button>
      <div className="hey">
        <div class="box">
          <div class="header"></div>

          <div class="inner-box">
            <p>
              Dear<strong> &nbsp; {data.first_name}</strong>
            </p>
            <img
              src="https://source.unsplash.com/random/80x100"
              alt="photo"
              class="photo"
            />
          </div>

          <div class="table-container">
            <table class="table">
              <tr>
                <td>Registration No.</td>
                <td>
                  <strong>{data.sid}</strong>
                </td>
                <td>Chess No.</td>
                <td>
                  <strong>{data.chess_prefix}</strong>
                </td>
              </tr>
              <tr>
                <td>Name :</td>
                <td colspan="3">{data.first_name + " " + data.last_name}</td>
              </tr>
              <tr>
                <td>Camp Name :</td>
                <td>{data.Camp}</td>
                <td>Batch No :</td>
                <td>ATC23-5</td>
              </tr>
              <tr>
                <td>Total days :</td>
                <td>7 Days</td>
                <td>Camp Category :</td>
                <td>{data.camp_category} </td>
              </tr>
              <tr>
                <td>Pick Up Point : </td>
                <td>{data.pick_up_point}</td>
                <td>Pick Up Time :</td>
                <td>{data.Pick_Time}</td>
              </tr>
              <tr>
                <td>In-chanrge Name :</td>
                <td colspan="3">{data.employee_who_reached_out_to_you}</td>
              </tr>
            </table>
          </div>

          <div class="in-box-2">
            <strong>Other Information :- </strong>
          </div>

          <div class="table-container">
            <table className="table ">
              <tr>
                <td>Discipline</td>
                <td>
                  <strong>{data.discipline}</strong>
                </td>
              </tr>
              <tr>
                <td>Physical Fitness</td>
                <td>
                  <strong>{data.physical}</strong>
                </td>
              </tr>
              <tr>
                <td>Courage</td>
                <td>{data.courage}</td>
              </tr>
              <tr>
                <td>Leadership</td>
                <td>{data.leadership}</td>
              </tr>
              <tr>
                <td>Initiative</td>
                <td>{data.initiative}</td>
              </tr>
              <tr>
                <td>Interpersonal Relation</td>
                <td>{data.IR}</td>
              </tr>
              <tr>
                <td>Team Building</td>
                <td>{data.team}</td>
              </tr>
              <tr>
                <td>Training</td>
                <td>{data.training}</td>
              </tr>
            </table>
          </div>

          <div class="signature">
            <div class="d-flex">
              <p>sign</p>
              <img src="https://source.unsplash.com/random/50x30" alt="" />
              <p>Camp Commandant</p>
              <p>MCF</p>
            </div>
          </div>
          <div class="footer">
            <p>
              Mail us on: <strong>mcfcamp@gmail.com</strong>{" "}
              (mailto:mcfcamp@gmail.com)
            </p>
            <p>
              Cantact Us on : 9604082000/9604084000 / Website URL :
              www.mcfcamp.com (http://mcfcamp.in)
            </p>
          </div>
          <button
            onClick={(e) => window.print()}
            className="no-print bg-blue-500 hover:bg-blue-700 text-white py-1 px-8 rounded"
          >
            Print
          </button>
        </div>
      </div>
    </div>
  );
}

export default ViewReportCard;
