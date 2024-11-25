import React from 'react';
import ListSp from './ListSp';
import { Carousel } from 'antd';

const HomePageJordan = () => {
  return (
    <div className="bg-white w-[50%] flex  flex-col">
      <p className='font-bold text-[#086779] text-xl pt-2'>|GIÀY JORDAN</p>
      <div className="w-[100%] flex flex-row pr-4 gap-6">
        <div className="w-[50%]">
          <img
            src="/thumnail.png"
            alt="thumbnail"
            className="w-full h-auto object-cover p-4"
          />
        </div>

        <div className="w-[60%] pt-4">
          <Carousel autoplay>
            <ListSp />
            <ListSp />
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default HomePageJordan;
