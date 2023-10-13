import React from 'react'
import {IoBagHandle, IoPeople, IoPieChart} from 'react-icons/io5'

 function DashboardStartsGrid() {
  return (
    <div className="flex justify-center flex-wrap bg-[#6e62e5] min-h-24 rounded-2xl  w-[100%] ">
    <BoxWrapper>
      <div className="rounded-full h-12 w-12 flex items-center justify-center bg-sky-500">
        <IoBagHandle className="text-2xl text-white" />
      </div>
      <div className="pl-4 ">
        <span className="text-sm text-gray-300 font-light">Monthly Revenue</span>
        <div className="flex items-center">
          <strong className="text-xl text-white pr-2 font-semibold">$3.500</strong>
          <span className="text-sm text-[#6e62e5] w-12 pl-2 bg-white rounded-3xl">2.4%</span>
        </div>
        <div>
          <p className='text-gray-300 text-sm font-light'>Previous Month <span className='text-sm text-white font-bold'>$1.7k</span></p> 
        </div>
      </div>
    </BoxWrapper>
    <BoxWrapper>
      <div className="rounded-full h-12 w-12 flex items-center justify-center bg-orange-600">
        <IoPieChart className="text-2xl text-white" />
      </div>
      <div className="pl-4">
        <span className="text-sm text-gray-300 font-light">Monthly Sales</span>
        <div className="flex items-center">
          <strong className="text-xl text-white pr-2 font-semibold">$6.750</strong>
          <span className="text-sm text-[#6e62e5] w-12 pl-2 bg-white rounded-3xl">1.4%</span>
        </div>
        <p className='text-gray-300 text-sm font-light'>Previous Month <span className='text-sm text-white font-bold'>$3.1k</span></p> 
      </div>
    </BoxWrapper>
    <BoxWrapper>
      <div className="rounded-full h-12 w-12 flex items-center justify-center bg-yellow-400">
        <IoPeople className="text-2xl text-white" />
      </div>
      <div className="pl-4">
        <span className="text-sm text-gray-300 font-light">Total Profit</span>
        <div className="flex items-center">
          <strong className="text-xl pr-2 text-white font-semibold">$10.900</strong>
          <span className="text-sm text-[#6e62e5] w-12 pl-2 bg-white rounded-3xl ">4.3%</span>
        </div>
        <p className='text-gray-300 text-sm font-light'>Previous Month <span className='text-sm text-white font-bold'>$8.9k</span></p> 
      </div>
    </BoxWrapper>

  </div>
  )
}

export default DashboardStartsGrid;

function BoxWrapper({children}){
  return <div className='bg-bg-[#6e62e5]  rounded-sm p-4 flex-1 flex items-center'>{children}</div>
}