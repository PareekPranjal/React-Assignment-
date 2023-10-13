import React, { Fragment, useState } from 'react';
import { Menu, Popover, Transition } from '@headlessui/react';
import { HiOutlineBell, HiOutlineSearch, HiOutlineChatAlt } from 'react-icons/hi';
import classNames from 'classnames';
import '../index.css';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div className="h-[100px] mb-4 px-4 flex items-center border-b w-[100%] mx-auto">
      <div className="flex items-center flex-grow">
        <Menu as="div" className="relative mr-8">
          <Menu.Button className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-neutral-400">
            <div className="h-16 w-16 rounded-full bg-cover bg-center" style={{ backgroundImage: 'url("https://source.unsplash.com/80x80?face")' }} />
          </Menu.Button>
        </Menu>
        <div className='relative'>
          <p className='font-extrabold text-lg sm:text-lg md:text-4xl'>Good Evening Team! </p>
          <p className='text-xs sm:text-sm text-gray-500'>Have an in-depth look at all the metrics within your dashboard.</p>
        </div>
      </div>
      <div className="hidden lg:pr-[180px] md:flex items-center gap-6">
        <SearchPopover />
        <NotificationsPopover />
      </div>
      <div className="relative inline-block">
        <button className="hidden sm:flex items-center gap-2 p-1 border border-gray-400 rounded-full text-white" onClick={handleToggle}>
          <div className="h-10 w-10 rounded-full bg-cover bg-no-repeat bg-center" style={{ backgroundImage: 'url("https://source.unsplash.com/80x80?face")' }}>
            <span className="sr-only">Jhontosan</span>
          </div>
          <div><p className='text-black'> Jhontosan</p></div>
        </button>
        {isOpen && (
          <ul className="absolute top-full left-0 p-4 mt-2 bg-white border border-gray-300 rounded-lg">
            <li className="px-4 py-2">Profile</li>
            <li className="px-4 py-2">Settings</li>
            <li className="px-4 py-2">Logout</li>
          </ul>
        )}
      </div>
    </div>
  )
}

function SearchPopover() {
  return (
    <Popover className="relative">
      {({ open }) => (
        <>
          <Popover.Button className={classNames(open && 'bg-gray-100', 'group inline-flex items-center rounded-sm p-1.5 text-gray-700 hover:text-opacity-100 focus:outline-none active:bg-gray-100')}>
            <HiOutlineSearch fontSize={24} />
          </Popover.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <Popover.Panel className="absolute right-0 z-10 mt-2.5 transform w-56 sm:w-64">
              <div className="relative ">
                <HiOutlineSearch fontSize={20} className="text-gray-400 absolute top-1/2 left-3 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="text-sm focus:outline-none active:outline-none border border-gray-300 w-full h-10 pl-11 pr-4 rounded-sm"
                />
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
}

function NotificationsPopover() {
  return (
    <Popover className="relative">
      {({ open }) => (
        <>
          <Popover.Button className={classNames(open && 'bg-gray-100', 'group inline-flex items-center rounded-sm p-1.5 text-gray-700 hover:text-opacity-100 focus:outline-none active:bg-gray-100')}>
            <HiOutlineBell fontSize={24} />
          </Popover.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <Popover.Panel className="absolute right-0 z-10 mt-2.5 transform w-56 sm:w-64">
              <div className="bg-white rounded-sm shadow-md ring-1 ring-black ring-opacity-5 px-2 py-2.5">
                <strong className="text-gray-700 font-medium">Notifications</strong>
                <div className="mt-2 py-1 text-sm">This is notification panel.</div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
}
