import React, { useEffect, useState } from 'react';
import Sidebar from '../partials/Sidebar';
import Header from '../partials/Header';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';


function EditFeeDetails() {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [formData, setFormData] = useState({
        Name: '',
        Fees: '',
    });
  const [campName, setCampName] = useState('');

  const location = useLocation();

    useEffect(() => {
        const queryParams = new URLSearchParams(location.search);
        const nm = queryParams.get('name');
        setCampName(nm);
        setFormData({...formData,Name:nm})
    }, [campName,location.search])




    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
        console.log(name, value)
    };


    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(`https://mcf-backend.vercel.app/api/updateFeeDetails/${campName}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                console.log('Fee updated successfully!');
                alert('Fee Updated successfully!');
                window.location.href = '/camp';
                // Optionally, you can redirect the user to another page or perform other actions
            } else {
                console.error('Failed to add camp');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className="flex h-screen overflow-hidden">
            {/* Sidebar */}
            <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

            {/* Content area */}
            <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
                {/* Site header */}
                <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

                <main>
                    <div className="px-4 sm:px-6 lg:px-8 py-4 w-full max-w-screen-xl mx-auto">
                        <div className="col-span-full xl:col-span-12 bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700">
                            <header className="px-5 py-4 border-b border-slate-100 dark:border-slate-700" style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <h2 className="font-semibold text-slate-800 dark:text-slate-100">Add Camp</h2>
                                <Link end to="/camp" className="bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded">Back to camp list</Link>
                            </header>
                            <div className="p-3 shadow-lg border border-gray-300 rounded-lg">
                                <form className="space-y-2" onSubmit={handleSubmit}>
                                    <label className="text-lg font-semibold">Camp Name</label>
                                    <input
                                        type="text"
                                        name="Name"
                                        placeholder='Enter Name'
                                        value={formData.Name}
                                        onChange={handleChange}
                                        required
                                        className="w-full p-3 border rounded-lg text-gray-800 focus:ring focus:ring-blue-400"
                                    />


                                    <label className="text-lg font-semibold">Camp Fee</label>
                                    <input
                                        type="number"
                                        name="Fees"
                                        placeholder='Enter Fee'
                                        value={formData.Fees}
                                        onChange={handleChange}
                                        required
                                        className="w-full p-3 border rounded-lg text-gray-800 focus:ring focus:ring-blue-400"
                                    />

                                    <button
                                        type="submit"
                                        className="w-32 p-3 mt-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-400"
                                    >
                                        Submit
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}

export default EditFeeDetails;
