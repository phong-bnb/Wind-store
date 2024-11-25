import React from 'react'
import HomePageJordan from './jordanshoe/HomePage'
import HomePageHypeBeat from './hypebeat/HomePage'

const HomePageClassify = () => {
  return (
    <div className='flex flex-row w-full gap-4 pt-8'>
<HomePageJordan/>
<HomePageHypeBeat/>


    </div>
  )
}

export default HomePageClassify