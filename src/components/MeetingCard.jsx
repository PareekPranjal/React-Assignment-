import { ClockCircleOutlined, LaptopOutlined, VideoCameraOutlined } from '@ant-design/icons'
import React from 'react'

function MeetingCard() {
    return (
        <div>

            <div className='flex gap-6 border-b border-gray-300 pb-2 pt-2'>
                <div className='bg-gray-200 justify-center flex-nowrap  grow flex w-[50px] h-[50px] rounded-full'>
                    <img width='30px' height='20px' className='m-4' src="https://png.pngtree.com/png-vector/20230218/ourmid/pngtree-laptop-icon-png-image_6606927.png" alt="" />
                </div>
                <div>
                    <h6>Meeting with Client</h6>
                    <h6 className=' text-gray-400'><VideoCameraOutlined /> &nbsp;&nbsp;Google Meet</h6>
                </div>
                <div>
                    <p className=' text-gray-400'><ClockCircleOutlined /> 12pm </p>
                </div>
            </div>

            <div className='flex gap-9 border-b justify-center border-gray-300 pb-2 pt-2'>
                <div className='bg-gray-200 w-[50px] h-[50px] justify-center flex-nowrap  grow flex rounded-full'>
                    <img width='30px' height='20px' className='m-4' src="https://png.pngtree.com/png-vector/20230218/ourmid/pngtree-laptop-icon-png-image_6606927.png" alt="" />
                </div>
                <div>
                    <h6>Weekly Report</h6>
                    <h6 className=' text-gray-400 font-semibold' ><VideoCameraOutlined /> &nbsp;&nbsp;Google Meet</h6>
                </div>
                <div>
                    <p className=' text-gray-400'><ClockCircleOutlined /> 3pm </p>
                </div>
            </div>

            <div className='flex gap-6 pt-2'>
                <div className='bg-gray-200 w-[50px] h-[50px] justify-center flex-nowrap  grow flex rounded-full'>
                    <img width='30px' height='20px' className='m-4' src="https://png.pngtree.com/png-vector/20230218/ourmid/pngtree-laptop-icon-png-image_6606927.png" alt="" />
                </div>
                <div>
                    <h6>Daily Scrum Meeting</h6>
                    <h6 className=' text-gray-400'><VideoCameraOutlined /> &nbsp;&nbsp;Google Meet</h6>
                </div>
                <div>
                    <p className=' text-gray-400'><ClockCircleOutlined /> 5pm </p>
                </div>
            </div>

        </div>
    )
}

export default MeetingCard
