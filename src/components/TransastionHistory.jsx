import React from 'react'
import { DownOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Dropdown, message, Space, Tooltip } from 'antd';

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

function TransastionHistory() {
  return (
   <div className='flex flex-nowrap justify-between w-[100%] border-2'>
     <div>
      <div>
      <h1 className='text-3xl p-4'>Transastion History</h1>
      </div>
      <div className='flex w-[100%] flex-wrap pb-8'>
      <Dropdown menu={menuProps} className='border-none'>
      <Button >
        <Space className='bg-gray-200 p-2 w-[7rem] rounded-md'> 
        Recepient
          <DownOutlined />
        </Space>
      </Button>
    </Dropdown>

        <Dropdown menu={menuProps} className='border-none'>
      <Button>
        <Space className='bg-gray-200 p-2 w-[6rem] rounded-md'>
        Amount
          <DownOutlined />
        </Space>
      </Button>
    </Dropdown>

         <Dropdown menu={menuProps} className='border-none'>
      <Button>
        <Space className='bg-gray-200 p-2 w-[6rem] rounded-md'>
        Status
          <DownOutlined />
        </Space>
      </Button>
    </Dropdown>

      </div>
    </div>
    <Dropdown menu={menuProps} className='border-none'>
      <Button>
        <Space  className='border-2 p-2 w-[7rem] rounded-md'>
          Month
          <DownOutlined />
        </Space>
      </Button>
    </Dropdown>
   </div>
  )
}

export default TransastionHistory;


  
  
  
  
  