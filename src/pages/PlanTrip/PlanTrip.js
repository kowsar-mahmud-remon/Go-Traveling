import React from 'react';
import planTrip from '../../assets/planTrip.jpg';
import { GiCheckMark } from "react-icons/gi";



const PlanTrip = () => {
  return (
    <div className='max-w-[1280px] mx-auto px-5 my-20'>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center">
        <img className='' src={planTrip} alt="" />
        <div className="">
          <p className='text-primary text-md font-medium'>Why Choose Us</p>
          <h4 className='text-secondary mt-1 mb-6 text-3xl font-bold'>Plan Your Trip With Go Traveling</h4>
          <p className=' text-slate-500'>Holisticly optimize proactive strategic theme areas rather then effective manufactured product create</p>

          <div className="flex mt-4 text-secondary">
            <div className="mr-10">
              <div className="flex items-center">
                <GiCheckMark />
                <p className='ml-2 font-semibold'>Travel Plan</p>

              </div>
              <div className="flex items-center">
                <GiCheckMark />
                <p className='ml-2 font-semibold'>Hand-Picked Tour</p>

              </div>
            </div>
            <div className="">
              <div className="flex items-center">
                <GiCheckMark />
                <p className='ml-2 font-semibold'>Cheap Rates</p>

              </div>
              <div className="flex items-center">
                <GiCheckMark />
                <p className='ml-2 font-semibold'>Private Guide</p>

              </div>
            </div>
          </div>
          <button className='rounded border-2 border-slate-300 py-2 px-6 mt-8 '>Contact Us</button>
        </div>
      </div>
    </div>
  );
};

export default PlanTrip;