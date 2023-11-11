import React from 'react';

const Analytics = () => {
  return (
    <div>
      <div className="flex justify-between  mb-3">
        <h1 className="text-3xl font-bold text-[#292929] mb-6">Аналитика</h1>
      </div>
      <div className="flex justify-around gap-28">
        <div className="flex flex-col max-w-[340px] gap-16">
          <img src={require('../../assets/Graph3.png')} alt="3" />
          <img
            className="max-w-[250px]"
            src={require('../../assets/Graph5.png')}
            alt="5"
          />
          <img src={require('../../assets/Graph1.png')} alt="1" />
        </div>

        <div className="flex flex-col gap-14">
          <img
            className="max-w-[400px]"
            src={require('../../assets/Graph4.png')}
            alt="4"
          />
          <img
            className="max-w-[550px]"
            src={require('../../assets/Graph7.png')}
            alt="7"
          />
          <img
            className="max-w-[550px]"
            src={require('../../assets/Graph6.png')}
            alt="6"
          />
          <img
            className="max-w-[650px]"
            src={require('../../assets/Graph2.png')}
            alt="2"
          />
        </div>
      </div>
    </div>
  );
};

export default Analytics;
