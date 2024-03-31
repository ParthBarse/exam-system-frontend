import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { baseurl } from "../utils/domain";
import Sidebar from "../partials/Sidebar";
import Header from "../partials/Header";
import axios from "axios";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

export default function GenerateReport() {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [step, setStep] = useState(1);
  const [searchParams, setSearchParams] = useSearchParams();
  const sid = searchParams.get("sid");
  const [student, setStudent] = useState({});
  const [loading, setLoading] = useState(false);

  const [lastData, setLastData] = useState({
    time_management: "",
    accommodation: "",
    facilities: "",
    ins_training: "",
    atmosphere: "",
    activity: "",
    uniform: "",
    certification: "",
    suggestion: "",
    best_achievement: "",
    achievement: "",
    personality_dimensions: "",
  });

  const [lastTable, setLastTable] = useState({
    "LEADERSHIP POTENTIAL": {
      SCORE: "",
      INTERPRETATION: "",
    },
    "COMMUNICATION SKILLS": {
      SCORE: "",
      INTERPRETATION: "",
    },
    "TEAMWORK AND COOPERATION": {
      SCORE: "",
      INTERPRETATION: "",
    },
    "ADAPTABILITY AND FLEXIBILITY": {
      SCORE: "",
      INTERPRETATION: "",
    },
    "PROBLEM-SOLVING ABILITY": {
      SCORE: "",
      INTERPRETATION: "",
    },
  });

  const handleLastFromChange = (e) => {
    const { name, value } = e.target;
    setLastData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const [activities, setActivities] = useState({
    skill_activities: [
      {
        "SR.NO.": 1,
        SKILL: "Archery",
        "TIMES TO REPEAT": 0,
        "TRAINED BY INS": "",
      },
      {
        "SR.NO.": 2,
        SKILL: "Lathi-Kathi",
        "TIMES TO REPEAT": 0,
        "TRAINED BY INS": "",
      },
      {
        "SR.NO.": 3,
        SKILL: "Rifle Shooting",
        "TIMES TO REPEAT": 0,
        "TRAINED BY INS": "",
      },
      {
        "SR.NO.": 4,
        SKILL: "Martial Arts",
        "TIMES TO REPEAT": 0,
        "TRAINED BY INS": "",
      },
      {
        "SR.NO.": 5,
        SKILL: "Horse Riding",
        "TIMES TO REPEAT": 0,
        "TRAINED BY INS": "",
      },
    ],
    physical_activities: [
      {
        "SR.NO.": 6,
        SKILL: "Trekking",
        "TIMES TO REPEAT": 0,
        "TRAINED BY INS": "",
      },
      {
        "SR.NO.": 7,
        SKILL: "Aerobics/Yoga",
        "TIMES TO REPEAT": 0,
        "TRAINED BY INS": "",
      },
      {
        "SR.NO.": 8,
        SKILL: "P.T. and Mass P.T. Exercise",
        "TIMES TO REPEAT": 0,
        "TRAINED BY INS": "",
      },
    ],
    water_activities: [
      {
        "SR.NO.": 9,
        SKILL: "Rain Dance",
        "TIMES TO REPEAT": 0,
        "TRAINED BY INS": "",
      },
    ],
    adventure_activities: [
      {
        "SR.NO.": 10,
        SKILL: "ROCK CLIMBING",
        "TIMES TO REPEAT": 0,
        "TRAINED BY INS": "",
      },
      {
        "SR.NO.": 11,
        SKILL: "Zip Line",
        "TIMES TO REPEAT": 0,
        "TRAINED BY INS": "",
      },
    ],
    mcf_rope_course: [
      {
        "SR.NO.": 12,
        SKILL: "Burma Bridge",
        "TIMES TO REPEAT": 0,
        "TRAINED BY INS": "",
      },
      {
        "SR.NO.": 13,
        SKILL: "Tawa Walk",
        "TIMES TO REPEAT": 0,
        "TRAINED BY INS": "",
      },
      {
        "SR.NO.": 14,
        SKILL: "Single Rope Walk",
        "TIMES TO REPEAT": 0,
        "TRAINED BY INS": "",
      },
      {
        "SR.NO.": 15,
        SKILL: "Zig Zag Ladder Walk",
        "TIMES TO REPEAT": 0,
        "TRAINED BY INS": "",
      },
      {
        "SR.NO.": 16,
        SKILL: "One Feet Walk",
        "TIMES TO REPEAT": 0,
        "TRAINED BY INS": "",
      },
    ],
    cultural_activities: [
      {
        "SR.NO.": 17,
        SKILL: "Camp Fire/Solo Dance/Solo Song",
        "TIMES TO REPEAT": 0,
        "TRAINED BY INS": "",
      },
    ],
  });

  const [formData, setFormData] = useState({
    remarks: "",
    "checked by name": "",
    rank: "",
  });

  const [fields, setFields] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    camp_name: "",
    pickup_point: "",
  });

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(`https://${baseurl}/getStudent?sid=${sid}`);
        const data = await res.json();
        setStudent(data);
        setFields({
          name: data.student.first_name + " " + data.student.last_name,
          email: data.student.email,
          phone: data.student.phn,
          address: data.student.address,
          camp_name: data.camp_details.camp_name,
          pickup_point: data.student.pick_up_point,
        });
      } catch (error) {
        alert("error fetching data");
      }
    }
    fetchData();
  }, []);

  const handleSubmit = async () => {
    setLoading(true);
    const body = {
      details: fields,
      activities: activities,
      individual_remarks_form: lastData,
      individual_remarks_table: lastTable,
      final_remarks: formData,
    };
    try {
      await axios.post(`https://${baseurl}/generateReport?sid=${sid}`, body);
      toast.success("Report generated successfully");
      setLoading(false);
      navigate("/ReportCard");
    } catch (error) {
      alert("error generating report");
      setLoading(false);
    }
  };

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        {/*  Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <div className="col-span-full xl:col-span-12 bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700 p-4 m-4">
          <form className="grid grid-cols-2  grid-rows-1 space-x-2">
            {Object.keys(fields).map((field) => (
              <div key={field}>
                <label htmlFor={field} className="flex flex-col items-start">
                  <p className="text-md font-semibold">
                    {field.replace("_", " ").toUpperCase()}
                  </p>
                  <input
                    className="w-full px-3 py-2 border rounded shadow appearance-none"
                    type="text"
                    id={field}
                    name={field}
                    value={fields[field]}
                    onChange={(e) =>
                      setFields({ ...fields, [field]: e.target.value })
                    }
                  />
                </label>
              </div>
            ))}
          </form>
          <form>
            {Object.keys(activities).map((activity, i) => (
              <div key={activity} className="m-4">
                <h1 className="font-bold text-md">{activity.toUpperCase()}</h1>
                <table>
                  {i == 0 ? (
                    <thead>
                      <tr>
                        {Object.keys(activities[activity][0]).map((key) => (
                          <th key={key}>{key}</th>
                        ))}
                      </tr>
                    </thead>
                  ) : (
                    ""
                  )}
                  <tbody>
                    {activities[activity].map((act) => (
                      <tr key={act.SKILL}>
                        {Object.keys(act).map((key) => (
                          <td key={key}>
                            {
                              <input
                                type="text"
                                value={act[key]}
                                placeholder={
                                  key === "TRAINED BY INS"
                                    ? "Trained By Instructor"
                                    : ""
                                }
                                onChange={(e) => {
                                  const newActivities = { ...activities };
                                  newActivities[activity] = newActivities[
                                    activity
                                  ].map((a) =>
                                    a.SKILL === act.SKILL
                                      ? { ...a, [key]: e.target.value }
                                      : a
                                  );
                                  setActivities(newActivities);
                                }}
                                disabled={key === "SR.NO." || key === "SKILL"}
                              />
                            }
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ))}
          </form>
          <form className="text-base font-semibold grid grid-cols-3 grid-rows-3 gap-2 p-4">
            {Object.keys(lastData).map((field) => {
              return (
                <div key={field} className="flex flex-col">
                  <label>{field.replace("_", " ").toUpperCase()}</label>
                  <input
                    type="text"
                    name={field}
                    onChange={handleLastFromChange}
                    value={lastData[field]}
                    placeholder={`Enter ${field.replace("_", " ")}`}
                    className="text-sm font-normal"
                  />
                </div>
              );
            })}
          </form>

          <form>
            {Object.keys(lastTable).map((field, i) => (
              <div key={field} className="m-4">
                <table>
                  <h1 className="font-semibold text-md">
                    {field.toUpperCase()}
                  </h1>
                  <tbody>
                    <tr>
                      <td>
                        <input
                          type="text"
                          value={lastTable[field].SCORE}
                          placeholder="Enter Score"
                          onChange={(e) => {
                            const newTable = { ...lastTable };
                            newTable[field] = {
                              ...newTable[field],
                              SCORE: e.target.value,
                            };
                            setLastTable(newTable);
                          }}
                        />
                      </td>
                      <td>
                        <input
                          className="text-sm font-normal ml-3"
                          type="text"
                          placeholder="Enter Interpretation"
                          value={lastTable[field].INTERPRETATION}
                          onChange={(e) => {
                            const newTable = { ...lastTable };
                            newTable[field] = {
                              ...newTable[field],
                              INTERPRETATION: e.target.value,
                            };
                            setLastTable(newTable);
                          }}
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            ))}
          </form>

          <div className="flex space-x-3 p-4">
            {/* Map over formData keys to render input fields */}
            {Object.keys(formData).map((key) => (
              <input
                key={key}
                type="text"
                name={key}
                value={formData[key]}
                onChange={(e) => {
                  setFormData({ ...formData, [key]: e.target.value });
                }}
                placeholder={key.charAt(0).toUpperCase() + key.slice(1)} // Capitalize the first letter of each key for placeholder
              />
            ))}
          </div>

          <button
            className="bg-blue-500 m-4 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleSubmit}
          >
            {loading ? "Generating..." : "Generate Report"}
          </button>
        </div>
      </div>
    </div>
  );
}
