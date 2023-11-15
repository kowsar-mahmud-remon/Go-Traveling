import React from 'react';
import Banner from '../Banner/Banner';
import TourType from '../TourType/TourType';
import PlanTrip from '../PlanTrip/PlanTrip';
import Destination from '../Destination/Destination';

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <TourType></TourType>
      <PlanTrip></PlanTrip>
      <Destination></Destination>
    </div>
  );
};

export default Home;