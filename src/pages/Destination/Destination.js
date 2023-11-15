import React from 'react';
import { FaArrowRight } from "react-icons/fa";
import img1 from '../../assets/destinationImg01.jpg';
import img2 from '../../assets/destinationImg02.jpg';
import img3 from '../../assets/destinationImg03.jpg';
import img4 from '../../assets/destinationImg04.jpg';


const Destination = () => {
  const destinationData = [
    {
      _id: 1,
      img: img1,
      title: "United Kingdom",
      tours: 17668
    },
    {
      _id: 2,
      img: img2,
      title: "Turkey",
      tours: 17668
    },
    {
      _id: 3,
      img: img3,
      title: "Thailand",
      tours: 17668
    },
    {
      _id: 4,
      img: img4,
      title: "France",
      tours: 17668
    },
  ];
  return (
    <div className='max-w-[1280px] mx-auto px-5 my-20'>
      <div className="lg:flex justify-between">
        <div className="">
          <p className='text-primary text-md font-medium'>Destination</p>
          <h4 className='text-secondary mt-1 mb-6 text-3xl font-bold'>Top Destinations</h4>
        </div>
        <div className="flex items-center text-secondary">
          <p className='font-semibold mr-2'>See All</p>
          <FaArrowRight />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">

        <div className=''>
          <div className="flex justify-center ">
            <img className='w-full' src={img1} alt="" />
          </div>
          <h5 className='mt-2 font-bold'>United Kingdom</h5>
          <p className='text-slate-400'>17668 Travelers</p>
        </div>

        <div className='lg:mt-10'>
          <div className="flex justify-center ">
            <img className='w-full' src={img2} alt="" />
          </div>
          <h5 className='mt-2 font-bold'>Turkey</h5>
          <p className='text-slate-400'>17668 Travelers</p>
        </div>

        <div className=''>
          <div className="flex justify-center ">
            <img className='w-full' src={img3} alt="" />
          </div>
          <h5 className='mt-2 font-bold'>Thailand</h5>
          <p className='text-slate-400'>17668 Travelers</p>
        </div>

        <div className='lg:mt-10'>
          <div className="flex justify-center ">
            <img className='w-full' src={img4} alt="" />
          </div>
          <h5 className='mt-2 font-bold'>France</h5>
          <p className='text-slate-400'>17668 Travelers</p>
        </div>

      </div>

    </div>
  );
};

export default Destination;