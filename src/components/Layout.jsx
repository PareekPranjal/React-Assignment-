import React from 'react'
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';

function Layout() {
  return (
    <div className='flex flex-row bg-neutral-100 h-screen w-[100%]' >
      <Sidebar />
      <div className='w-[100%] mt-8 xs:mt-8 md:mt-16 sm:mt-8 lg:mt-0 xl:mt-0 2xl:mt-0 p-4'>
        <Header />
        <div>{<Outlet />}</div>
      </div>
    </div>
  )
}

export default Layout
