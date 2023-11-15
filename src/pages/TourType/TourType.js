import React from 'react';
import { FaCity } from "react-icons/fa";
import { TbBeach } from "react-icons/tb";
import { FaSailboat } from "react-icons/fa6";
import { BsGlobeAsiaAustralia } from "react-icons/bs";
import { IoFastFoodSharp } from "react-icons/io5";
import { GiHiking } from "react-icons/gi";


const TourType = () => {
  const tourTypeData = [
    {
      _id: 1,
      icon: <FaCity />,
      title: "City Tours",
      tours: 10
    },
    {
      _id: 2,
      icon: <TbBeach />,
      title: "Beaches",
      tours: 10
    },
    {
      _id: 3,
      icon: <FaSailboat />,
      title: "Boat Tours",
      tours: 10
    },
    {
      _id: 4,
      icon: <BsGlobeAsiaAustralia />,
      title: "Adventure",
      tours: 10
    },
    {
      _id: 5,
      icon: <IoFastFoodSharp />,
      title: "Food",
      tours: 10
    },
    {
      _id: 6,
      icon: <GiHiking />,
      title: "Hiking",
      tours: 10
    },
  ];

  return (
    <div className='max-w-[1280px] mx-auto px-5 my-20'>
      <p className='text-primary text-md font-medium text-center'>Browse By Category</p>
      <h4 className='text-secondary mt-1 mb-6 text-3xl font-bold text-center'>Pick A Tour Type</h4>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 ">
        {
          tourTypeData.map(data => <div className=' py-6 hover:shadow-xl' key={data?._id}>
            <div className="flex justify-center ">
              <div className="bg-[#fcbf49] w-12 text-2xl flex justify-center p-3 rounded-full">
                {data?.icon}
              </div>
            </div>
            <h5 className='text-center mt-2 font-bold'>{data?.title}</h5>
            <p className='text-center text-slate-400'>{data?.tours} Tours+</p>
          </div>)
        }
      </div>
    </div>
  );
};

export default TourType;