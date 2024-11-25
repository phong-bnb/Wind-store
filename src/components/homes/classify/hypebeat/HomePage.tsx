import { Carousel } from 'antd'
import React from 'react'
import ListSp from './ListSp'

const HomePageHypeBeat = () => {
  return (
    <div className="bg-white w-[50%] flex  flex-col">
      <p className='font-bold text-[#086779] text-xl pt-2'>| GIÀY HYPEBASE</p>
      <div className='pt-4 flex flex-row pr-4 gap-4'>
      <div className="w-[50%] pl-2">
          <img
            src="/lv.png"
            alt="thumbnail"
            className="w-full h-auto object-cover"
          />
        </div>
        <div className="w-[60%]">
          <Carousel autoplay>
          <ListSp />
          <ListSp />
          <ListSp />
          </Carousel>
        </div>

      </div>
    </div>
  )
}

export default HomePageHypeBeat