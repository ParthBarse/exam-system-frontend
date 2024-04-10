import React, { useState, useEffect } from "react";
import axios from "axios"; // Import Axios
import Sidebar from "../partials/Sidebar";
import Header from "../partials/Header";
import { Link, useNavigate } from "react-router-dom";
import BasicModal from "../components/Modal";
import { baseurl } from "../utils/domain";
import { toast } from "sonner";
import * as XLSX from "xlsx";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

function RegStudent() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10; // Number of items to display per page
  const [data, setData] = useState([]); // Store fetched data
  const [loading, setLoading] = useState(false);
  const [isDeleted, setIsDeleted] = useState(false);
  const [camps, setCamps] = useState([]);
  const [sendLoading, setSendLoading] = useState(false);
  const [excelLoading, setExcelLoading] = useState(false);

  const [cpuData, setCpuData] = useState([]);
  const [memoryData, setMemoryData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const cpuResponse = await fetch(`https://${baseurl}/cpu_utilization`);
      const cpuJson = await cpuResponse.json();
      setCpuData(prevData => [...prevData, { name: prevData.length, value: cpuJson.cpu_percent }]);

      const memoryResponse = await fetch(`https://${baseurl}/memory_utilization`);
      const memoryJson = await memoryResponse.json();
      setMemoryData(prevData => [...prevData, { name: prevData.length, value: memoryJson.percent }]);

      setTimeout(fetchData, 3000); // Fetch data every second
    };

    fetchData();
  }, []);

  const [excelData, setExcelData] = useState([]);

  useEffect(() => {}, [data]);

  useEffect(() => {
    fetchData(); // Fetch data when the component mounts
  }, [isDeleted]);

  const fetchData = async () => {
    try {
      const response = await axios.get(`https://${baseurl}/getAllSuperLogs`);
      setData(response.data.logs); // Update the state with the fetched data
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/");
    }
  }, []);

  return (
    <div className="flex h-screen overflow-hidden box-content">
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        {/* Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <main>
          <div className="text-center my-8">
            <h2 className="text-2xl font-bold">SUPER ADMIN PANEL</h2>
          </div>
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-screen-xl mx-auto">
            <div className="grid grid-cols-12 gap-6">
              <div className="col-span-full xl:col-span-12 bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700">

              <div className="App justify-center items-center mb-8">
                <div>
                  <h2 className="text-sm m-2 font-bold">CPU Utilization</h2>
                  <LineChart width={600} height={200} data={cpuData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="value" stroke="blue" />
                  </LineChart>
                </div>
                <div>
                  <h2 className="text-sm m-2 font-bold">Memory Utilization</h2>
                  <LineChart width={600} height={200} data={memoryData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="value" stroke="red" />
                  </LineChart>
                </div>
              </div>

              <div className="p-4">
  {/* Table */}
  <div className="overflow-x-auto">
    <div className="max-h-[500px] overflow-y-auto">
      <h1 className="text-lg mb-4 font-bold">ADMIN LOGS - </h1>
      <table className="dark:text-slate-300" style={{ width: "100%" }}>
        {/* Table header */}
        <thead className="text-xs uppercase text-slate-400 dark:text-slate-500 bg-slate-50 dark:bg-slate-700 dark:bg-opacity-50 rounded-sm">
          <tr>
            <th className="p-2">
              <div className="font-semibold text-left">Sr.</div>
            </th>
            <th className="p-2 max-w-xs">
              <div className="font-semibold text-center">LOGS</div>
            </th>
            <th className="p-2">
              <div className="font-semibold text-center">TIMESTAMP</div>
            </th>
            <th className="p-2">
              <div className="font-semibold text-center">IP ADDRESS</div>
            </th>
            <th className="p-2">
              <div className="font-semibold text-center">LATITUDE</div>
            </th>
            <th className="p-2">
              <div className="font-semibold text-center">LONGITUDE</div>
            </th>
            <th className="p-2">
              <div className="font-semibold text-center">LOCATION</div>
            </th>
          </tr>
        </thead>
        {/* Table body */}
        <tbody className="text-sm font-medium divide-y divide-slate-100 dark:divide-slate-700">
          {data.filter((item) => item.msg).map((item, index) => (
              <tr key={index}>
                <td>
                  <div className="text-left" style={{ fontWeight: "bold" }}>
                    {index + 1}
                  </div>
                </td>
                <td className="p-2">
                  <div className="flex items-center">
                    <div className="text-slate-800 dark:text-slate-100">
                      {item.msg}
                    </div>
                  </div>
                </td>
                <td className="p-2">
                  <div className="flex items-center">
                    <div className="text-slate-800 dark:text-slate-100">
                      {item.dt}
                    </div>
                  </div>
                </td>
                <td className="p-2">
                  <div className="flex items-center">
                    <div className="text-slate-800 dark:text-slate-100">
                      {item.ip}
                    </div>
                  </div>
                </td>
                <td className="p-2">
                  <div className="text-center">{item.lat}</div>
                </td>
                <td className="p-2">
                  <div className="text-center">{item.long}</div>
                </td>
                <td className="p-2">
                  <div className="text-center">{item.location}</div>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  </div>
</div>

              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default RegStudent;
