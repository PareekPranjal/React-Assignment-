import React from 'react';
import { DownOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Dropdown, message, Space } from 'antd';

const handleButtonClick = (e) => {
  message.info('Click on left button.');
  console.log('click left button', e);
};

const handleMenuClick = (e) => {
  message.info('Click on menu item.');
  console.log('click', e);
};

const items = [
  {
    label: '1st menu item',
    key: '1',
    icon: <UserOutlined />,
  },
  {
    label: '2nd menu item',
    key: '2',
    icon: <UserOutlined />,
  },
  {
    label: '3rd menu item',
    key: '3',
    icon: <UserOutlined />,
    danger: true,
  },
  {
    label: '4rd menu item',
    key: '4',
    icon: <UserOutlined />,
    danger: true,
    disabled: true,
  },
];

const menuProps = {
  items,
  onClick: handleMenuClick,
};

function Upgrade() {
  return (
    <div className='inline-block w-[100%]'>
      <div>
        <h6 className='text-[#6e62e5] text-center md:text-left'>Premium Access</h6>
        <h1 className='pt-4 text-4xl font-bold text-center md:text-left'>
          <span className='block md:inline-block pt-3'>Take Back</span>
          <br />
          <span className='block md:inline-block pt-3'>Your Creative</span>
          <br />
          <span className='block md:inline-block pt-3'>Control</span>
        </h1>
        <div className='text-center md:text-left mt-4'>
          <Dropdown overlay={menuProps} className='border-none'>
            <Button>
              <Space className='text-gray-400 p-2 md:p-1 w-[7rem] rounded-md'>
                The Professional Platform
                <DownOutlined />
              </Space>
            </Button>
          </Dropdown>
        </div>
      </div>
      <div className="mt-6">
        <button className="text-xl border border-gray-400 text-[#6e62e5] py-2 px-4 w-full rounded-md flex items-center justify-center">
          <span className='float-left'>Upgrade Now</span>
          <svg 
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 ml-2 float-right"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </div>
  )
}

export default Upgrade;
