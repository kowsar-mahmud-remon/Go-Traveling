import React from 'react';
import img1 from '../../assets/bannerImg01.jpg';
import img2 from '../../assets/bannerImg02.jpg';


const Banner = () => {
  return (
    <div className="bg-primary">
      <div className=' max-w-[1280px] mx-auto px-5 flex flex-wrap justify-between items-center pt-16'>
        <div className="mb-4">
          <p className='text-[#fcbf49] text-2xl '>Explore The</p>
          <p className=' text-6xl text-white mt-1 font-semibold mb-2'>Travel & Adventures</p>
          <p className='text-white'>Find awesome hotel, tour car and activities in London</p>
        </div>
        <div className="flex flex-wrap gap-4 justify-center">
          <img className=' w-72 h-60' src={img1} alt="" />
          <img className='w-72 h-[450px]' src={img2} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;