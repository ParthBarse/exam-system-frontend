import React from 'react';

const Agreement = ({ nextStep, prevStep }) => {
  return (
    <div>
      {/* Payment Form */}
      <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-screen-xl mx-auto">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-full xl:col-span-12 bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700">
            <header
              className="px-5 py-4 border-b border-slate-100 dark:border-slate-700"
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <h2 className="font-semibold text-slate-800 dark:text-slate-100">
                Terms and condition
              </h2>
            </header>
            <div className="p-4">
              <div className="overflow-x-auto text-xs">
                {/* Terms and services*/}
                <h1 className='font-bold'>RULES AND REGUATIONS FOR CAMPAINGN</h1>
                <ul>
  <li>Age limit for all the camps is strictly between 7 to 21yrs</li>
  <li>It is a Commando Training Camp and not a Luxurious relaxing vacation. Discipline is must *Soldier Cut/Military Cut is Compulsory for Boys.
Nails to be trimmed Property</li>
  <li>Any Expensive things such as Gold, Money or any Electronic Gadgets are not allowed in the Camp</li>
  <li> Abusive Language, Bad Words, any type of Addiction and Fighting if happened in the Camp then that child will be rusticated from the Camp
</li>
  <li>Students need to take care of their provisions food, etc. till they wach the camp.
</li>
  <li>Junk Food are strictly prohibited in the camp. You may send healthy snacks like dry fruits or homemade healthy snacks.
</li>
  <li>Parents are allowed to call their wards only on mentioned/given scheduled days
</li>
  <li>Parents would be notified by message from MCF for the arrival of the cadet on the first day and departure timing on the last day of the camp. Please don't expect calls on the same
</li>
  <li> For 7 days camp, calling schedule will be alternate day from 2nd day a 2nd 4th, and 6th day, Time between 12.00 am to 3.00 pm.students have any Complaims, Requirements then tell them to inform us
Cadets will be handed over to the parents at camp place after the closing ceremony. Remaining kids will be dropped by MCF (whatever committed pick up & drop place)students have any Complaims, Requirements then tell them to inform us
</li>
<li> if anyone have any complaint or suggestion about this Camp then contact on 9604082000 from 9 am to 12:30 pm. After that call will not receive</li>
<li>Foes once paid is Non-Refundable and Non-Transferable</li>
                </ul>
                <h1 className='font-bold'>DECLARATION OF PARENTS/GUARDIANS</h1>
                <ul>
                <li>This is Commando Training Camp Not a Luxurious and am very well known about it
                I am sending My child on My wish</li>
                <li>I will not claim to the MCF for arry Natural Calamity or Natural Accident will happen.
                My Child is physically and mentally prepared for this Camp, I have given him the information of situation of Camp I
                know that Fees once paid is non refundable at any condition</li>
                <li>Above all Rules and Regulations have read carefully & am Accepting all this rules</li>
                </ul>
                <h1 className='font-bold'>INDEMNITY BOND AND CERTIFICATE</h1>
                <ul>
                <li> Confirm that my ward/son/daughter is physically and medically fit to undertake the rigorous training of the course
            </li>
            <li>I hereby declare that I shall not hold MCF CAMP or the instructors or any staff wholly or partially either individually or jointly responsible for any injury, accident or sickness caused to my ward/son/daughter during the course of the camp 
            </li>
            <li>
            Lagre to adhere strictly to the rules and discipline of the course and abide by the directions of the organizing authority or the nominee an all times during the course. Failing for which shall be
            liable for expulsion In case of any injury, accident or sickness or any member of my family shall not held responsible to MCF CAMP or the instructors or any staff wholly or partially either individually or jointly responsible and no compensation will be claimed by me
            </li>
            <li>I hereby declare that to the best of my knowledge I do not suffer from any allment or disability likely to handicap me in undergoing the course, I am taking part in this course at my own risk</li>
            <li>This indemnity bond/certificate is given by me with due diligence & on the basis of information imparted to me by MCF CAM authorities</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='flex justify-around '>
      <button onClick={prevStep} className="btn-secondary mr-2" style={{padding: "5px 10px", background: "#007BFF", color: "white", border: "none", borderRadius: "5px", marginRight: "10px"}}>
        Previous
      </button>
      <button onClick={nextStep} className="btn-primary" style={{padding: "5px 10px", background: "#007BFF", color: "white", border: "none", borderRadius: "5px", marginRight: "10px"}}>
        Next
      </button>
      </div>
    </div>
  );
};

export default Agreement;