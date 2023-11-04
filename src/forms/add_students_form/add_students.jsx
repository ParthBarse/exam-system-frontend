import React, { useState } from 'react';
import Sidebar from '../../partials/Sidebar';
import Header from '../../partials/Header';
import FirstDetails from './First_details';
import Agreement from './Terms_conditons';
import Payment from './Payment';
import Entrance_card from './Entrance_card';

function Progressbar({ step }) {
  const stepNames = ['Enter Details  >>>', '>>>  Accept terms  >>>', '>>>   payment >>>', '>>>  Entrance Card '];

  return (
    <div className="w-full py-2">
      <div className="w-full">
        <div className="h-2 relative">
          <div
            className="absolute h-2 bg-green-500"
            style={{ width: `${(step / stepNames.length) * 100}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
}

function AddStudent() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [step, setStep] = useState(1);

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        {/*  Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <main>
          <div className="w-full max-w-3xl mx-auto p-4">
            <Progressbar step={step} />
            {step === 1 && <FirstDetails nextStep={nextStep} />}
            {step === 2 && <Agreement nextStep={nextStep} prevStep={prevStep} />}
            {step === 3 && <Payment nextStep={nextStep} prevStep={prevStep} />}
            {step === 4 && <Entrance_card prevStep={prevStep} />}
          </div>
        </main>
      </div>
    </div>
  );
}

export default AddStudent;
