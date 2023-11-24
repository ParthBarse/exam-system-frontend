import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import './entrance.css';

function AdmitCard() {
  const [data, setData] = useState({});
  const [id, setId] = useState("");
  const location = useLocation();

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const uid = queryParams.get("id");
    setId(uid);
    axios
      .get(`https://mcf-backend.vercel.app/api/getStudent/${id}`)
      .then((x) => setData(x.data));
  }, [location.search, id]);

  return (
    <>
    <div className="hey">
      <div class="box">
        <div class="header">
        </div>

        <div class="inner-box">
          <p>
            Dear<strong> &nbsp; {data.First}</strong>
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
                <strong>{data.uuid}</strong>
              </td>
              <td>Chess No.</td>
              <td>
                <strong>{data.Chess}not added</strong>
              </td>
            </tr>
            <tr>
              <td>Name :</td>
              <td colspan="3">{data.First + " " + data.last}</td>
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
              <td>Company Name :</td>
              <td>{data.CQY} not added</td>
            </tr>
            <tr>
              <td>Pick Up Point : </td>
              <td>{data.Pick_Up_Point}</td>
              <td>Pick Up Time :</td>
              <td>{data.Pick_Time}not added</td>
            </tr>
            <tr>
              <td>In-chanrge Name :</td>
              <td colspan="3">{data.incharge}not added</td>
            </tr>
          </table>
        </div>

        <div class="in-box-2">
          <strong>Other Information :- </strong>
        </div>

        <div class="table-container">
          <table class="table">
            <tr>
              <td>Camp Place :</td>
              <td>
                <strong>{data.venue}</strong>
              </td>
              <td>Camp Date :</td>
              <td>
                <strong>{data.Start_date + " - " + data.end_date}</strong>
              </td>
            </tr>
            <tr>
              <td>Guardian name :</td>
              <td colspan="3">{data.parents}</td>
            </tr>
            <tr>
              <td>Address :</td>
              <td>{data.Address}</td>
              <td>Landmark :</td>
              <td>{data.Landmark}</td>
            </tr>
            <tr>
              <td>City :</td>
              <td>{data.city}</td>
              <td>District :</td>
              <td>{data.District}</td>
            </tr>
            <tr>
              <td>State :</td>
              <td>{data.State}</td>
              <td>Pincode :</td>
              <td>{data.Pincode}</td>
            </tr>
            <tr>
              <td>E-mail :</td>
              <td>{data.mail}not added</td>
              <td>contact number :</td>
              <td>{data.contact}not added</td>
            </tr>
            <tr>
              <td>Whatsapp :</td>
              <td>{data.whatsapp}not added</td>
              <td>Fathers number :</td>
              <td>{data.father_number}not added</td>
            </tr>
            <tr>
              <td>Blood group :</td>
              <td>{data.blood}not added</td>
              <td>Date of birth :</td>
              <td>{data.dob}not added</td>
            </tr>
            <tr>
              <td>School Name :</td>
              <td colspan="3">{data.school}not added</td>
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

        <div class="terms">
          <div class="headline">
            <strong>Terms & Conditions</strong>
          </div>
          <div class="list">
            <ol>
              <li>Without this Card the Entrance will not be accepted.</li>
              <li>Card will not be accepted if it gets damaged.</li>
              <li>
                Pick Point given is Fixed, Other than these students will not be
                picked up.
              </li>
              <li>Time schedule given is subject to be changed.</li>
              <li>
                If you have any query regarding Pick up Point or want any other
                pick up then contact on the below number.
              </li>
              <li>
                Bring Medical/Fitness Certificate on the first day of Camp,
                dated must be before a maximum of 5 Days.
              </li>
              <li>Without Medical Certificate entry will be prohibited.</li>
            </ol>
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
      </>

  );
}

export default AdmitCard;
